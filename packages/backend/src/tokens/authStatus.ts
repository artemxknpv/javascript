import type { JwtPayload } from '@clerk/types';

import { createBackendApiClient } from '../api';
import type { SignedInAuthObject, SignedInAuthObjectOptions, SignedOutAuthObject } from './authObjects';
import { signedInAuthObject, signedOutAuthObject } from './authObjects';
import type { TokenVerificationErrorReason } from './errors';

export enum AuthStatus {
  SignedIn = 'signed-in',
  SignedOut = 'signed-out',
  Interstitial = 'interstitial',
  Unknown = 'unknown',
}

export type SignedInState = {
  status: AuthStatus.SignedIn;
  reason: null;
  message: null;
  proxyUrl?: string;
  publishableKey: string;
  isSatellite: boolean;
  domain: string;
  signInUrl: string;
  signUpUrl: string;
  afterSignInUrl: string;
  afterSignUpUrl: string;
  isSignedIn: true;
  isInterstitial: false;
  isUnknown: false;
  toAuth: () => SignedInAuthObject;
};

export type SignedOutState = {
  status: AuthStatus.SignedOut;
  message: string;
  reason: AuthReason;
  proxyUrl?: string;
  publishableKey: string;
  isSatellite: boolean;
  domain: string;
  signInUrl: string;
  signUpUrl: string;
  afterSignInUrl: string;
  afterSignUpUrl: string;
  isSignedIn: false;
  isInterstitial: false;
  isUnknown: false;
  toAuth: () => SignedOutAuthObject;
};

export type InterstitialState = Omit<SignedOutState, 'isInterstitial' | 'status' | 'toAuth'> & {
  status: AuthStatus.Interstitial;
  isInterstitial: true;
  toAuth: () => null;
};

export type UnknownState = Omit<InterstitialState, 'status' | 'isInterstitial' | 'isUnknown'> & {
  status: AuthStatus.Unknown;
  isInterstitial: false;
  isUnknown: true;
};

export enum AuthErrorReason {
  CookieAndUATMissing = 'cookie-and-uat-missing',
  CookieMissing = 'cookie-missing',
  CookieOutDated = 'cookie-outdated',
  CookieUATMissing = 'uat-missing',
  CrossOriginReferrer = 'cross-origin-referrer',
  HeaderMissingCORS = 'header-missing-cors',
  HeaderMissingNonBrowser = 'header-missing-non-browser',
  SatelliteCookieNeedsSyncing = 'satellite-needs-syncing',
  SatelliteReturnsFromPrimary = 'satellite-returns-from-primary',
  PrimaryRespondsToSyncing = 'primary-responds-to-syncing',
  StandardSignedIn = 'standard-signed-in',
  StandardSignedOut = 'standard-signed-out',
  UnexpectedError = 'unexpected-error',
  Unknown = 'unknown',
}

export type AuthReason = AuthErrorReason | TokenVerificationErrorReason;

export type RequestState = SignedInState | SignedOutState | InterstitialState | UnknownState;

export type LoadResourcesOptions = {
  loadSession?: boolean;
  loadUser?: boolean;
  loadOrganization?: boolean;
};

type RequestStateParams = {
  publishableKey?: string;
  domain?: string;
  isSatellite?: boolean;
  proxyUrl?: string;
  signInUrl?: string;
  signUpUrl?: string;
  afterSignInUrl?: string;
  afterSignUpUrl?: string;
};

type AuthParams = {
  /* Client token cookie value */
  cookieToken?: string;
  /* Client uat cookie value */
  clientUat?: string;
  /* Client token header value */
  headerToken?: string;
};

export type AuthStatusOptionsType = LoadResourcesOptions &
  Partial<SignedInAuthObjectOptions> &
  RequestStateParams &
  AuthParams;

export async function signedIn<T extends AuthStatusOptionsType>(
  options: T,
  sessionClaims: JwtPayload,
): Promise<SignedInState> {
  const {
    publishableKey = '',
    proxyUrl = '',
    isSatellite = false,
    domain = '',
    signInUrl = '',
    signUpUrl = '',
    afterSignInUrl = '',
    afterSignUpUrl = '',
    secretKey,
    apiUrl,
    apiVersion,
    cookieToken,
    headerToken,
    loadSession,
    loadUser,
    loadOrganization,
  } = options;

  const { sid: sessionId, org_id: orgId, sub: userId } = sessionClaims;

  const { sessions, users, organizations } = createBackendApiClient({
    secretKey,
    apiUrl,
    apiVersion,
  });

  const [sessionResp, userResp, organizationResp] = await Promise.all([
    loadSession ? sessions.getSession(sessionId) : Promise.resolve(undefined),
    loadUser ? users.getUser(userId) : Promise.resolve(undefined),
    loadOrganization && orgId ? organizations.getOrganization({ organizationId: orgId }) : Promise.resolve(undefined),
  ]);

  const session = sessionResp && !sessionResp.errors ? sessionResp.data : undefined;
  const user = userResp && !userResp.errors ? userResp.data : undefined;
  const organization = organizationResp && !organizationResp.errors ? organizationResp.data : undefined;

  const authObject = signedInAuthObject(
    sessionClaims,
    {
      secretKey,
      apiUrl,
      apiVersion,
      token: cookieToken || headerToken || '',
      session,
      user,
      organization,
    },
    { ...options, status: AuthStatus.SignedIn },
  );

  return {
    status: AuthStatus.SignedIn,
    reason: null,
    message: null,
    proxyUrl,
    publishableKey,
    domain,
    isSatellite,
    signInUrl,
    signUpUrl,
    afterSignInUrl,
    afterSignUpUrl,
    isSignedIn: true,
    isInterstitial: false,
    isUnknown: false,
    toAuth: () => authObject,
  };
}
export function signedOut<T extends AuthStatusOptionsType>(
  options: T,
  reason: AuthReason,
  message = '',
): SignedOutState {
  const {
    publishableKey = '',
    proxyUrl = '',
    isSatellite = false,
    domain = '',
    signInUrl = '',
    signUpUrl = '',
    afterSignInUrl = '',
    afterSignUpUrl = '',
  } = options;

  return {
    status: AuthStatus.SignedOut,
    reason,
    message,
    proxyUrl,
    publishableKey,
    isSatellite,
    domain,
    signInUrl,
    signUpUrl,
    afterSignInUrl,
    afterSignUpUrl,
    isSignedIn: false,
    isInterstitial: false,
    isUnknown: false,
    toAuth: () => signedOutAuthObject({ ...options, status: AuthStatus.SignedOut, reason, message }),
  };
}

export function interstitial<T extends AuthStatusOptionsType>(
  options: T,
  reason: AuthReason,
  message = '',
): InterstitialState {
  const {
    publishableKey = '',
    proxyUrl = '',
    isSatellite = false,
    domain = '',
    signInUrl = '',
    signUpUrl = '',
    afterSignInUrl = '',
    afterSignUpUrl = '',
  } = options;

  return {
    status: AuthStatus.Interstitial,
    reason,
    message,
    publishableKey,
    isSatellite,
    domain,
    proxyUrl,
    signInUrl,
    signUpUrl,
    afterSignInUrl,
    afterSignUpUrl,
    isSignedIn: false,
    isInterstitial: true,
    isUnknown: false,
    toAuth: () => null,
  };
}

export function unknownState(options: AuthStatusOptionsType, reason: AuthReason, message = ''): UnknownState {
  const {
    publishableKey = '',
    proxyUrl = '',
    isSatellite = false,
    domain = '',
    signInUrl = '',
    signUpUrl = '',
    afterSignInUrl = '',
    afterSignUpUrl = '',
  } = options;

  return {
    status: AuthStatus.Unknown,
    reason,
    message,
    publishableKey,
    isSatellite,
    domain,
    proxyUrl,
    signInUrl,
    signUpUrl,
    afterSignInUrl,
    afterSignUpUrl,
    isSignedIn: false,
    isInterstitial: false,
    isUnknown: true,
    toAuth: () => null,
  };
}
