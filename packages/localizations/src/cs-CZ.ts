import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Zkontrolujte svůj telefon',
      subtitle: 'pro pokračování do {{applicationName}}',
      formTitle: 'Ověřovací kód',
      formSubtitle: 'Zadejte ověřovací kód odeslaný na vaše telefonní číslo',
      resendButton: 'Znovu odeslat kód',
    },
  },
} as const;

export const csCZ: LocalizationResource = {
  locale: 'cs-CZ',
  socialButtonsBlockButton: 'Pokračovat s {{provider|titleize}}',
  dividerText: 'nebo',
  formFieldLabel__emailAddress: 'Emailová adresa',
  formFieldLabel__emailAddresses: 'Emailové adresy',
  formFieldLabel__phoneNumber: 'Telefonní číslo',
  formFieldLabel__username: 'Uživatelské jméno',
  formFieldLabel__emailAddress_username: 'Emailová adresa nebo uživatelské jméno',
  formFieldLabel__password: 'Heslo',
  formFieldLabel__currentPassword: 'Stávající heslo',
  formFieldLabel__newPassword: 'Nové heslo',
  formFieldLabel__confirmPassword: 'Potvrdit heslo',
  formFieldLabel__signOutOfOtherSessions: 'Odhlásit se ze všech ostatních zařízení',
  formFieldLabel__firstName: 'Jméno',
  formFieldLabel__lastName: 'Příjmení',
  formFieldLabel__backupCode: 'Záložní kód',
  formFieldLabel__organizationName: 'Název organizace',
  formFieldLabel__organizationSlug: 'URL adresa',
  formFieldLabel__role: 'Role',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Zadejte nebo vložte jednu nebo více emailových adres oddělených mezerou nebo čárkou',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldError__notMatchingPasswords: `Hesla se neshodují.`,
  formFieldError__matchingPasswords: 'Hesla se shodují.',
  formFieldAction__forgotPassword: 'Zapomněli jste heslo?',
  formFieldHintText__optional: 'Volitelné',
  formButtonPrimary: 'Pokračovat',
  signInEnterPasswordTitle: 'Zadejte své heslo',
  backButton: 'Zpět',
  footerActionLink__useAnotherMethod: 'Použít jinou metodu',
  badge__primary: 'Hlavní',
  badge__thisDevice: 'Toto zařízení',
  badge__userDevice: 'Zařízení uživatele',
  badge__otherImpersonatorDevice: 'Jiné zařízení představitele',
  badge__default: 'Výchozí',
  badge__unverified: 'Nepotvrzené',
  badge__requiresAction: 'Vyžaduje akci',
  badge__you: 'Vy',
  footerPageLink__help: 'Nápověda',
  footerPageLink__privacy: 'Ochrana soukromí',
  footerPageLink__terms: 'Podmínky',
  paginationButton__previous: 'Předchozí',
  paginationButton__next: 'Další',
  paginationRowText__displaying: 'Zobrazuje se',
  paginationRowText__of: 'z',
  membershipRole__admin: 'Správce',
  membershipRole__basicMember: 'Člen',
  membershipRole__guestMember: 'Host',
  signUp: {
    start: {
      title: 'Vytvořte si účet',
      subtitle: 'pro pokračování do {{applicationName}}',
      actionText: 'Máte účet?',
      actionLink: 'Přihlásit se',
    },
    emailLink: {
      title: 'Ověřte svůj email',
      subtitle: 'pro pokračování do {{applicationName}}',
      formTitle: 'Ověřovací odkaz',
      formSubtitle: 'Použijte ověřovací odkaz poslaný na vaši emailovou adresu',
      resendButton: 'Znovu poslat odkaz',
      verified: {
        title: 'Úspěšně zaregistrováno',
      },
      loading: {
        title: 'Probíhá registrace...',
      },
      verifiedSwitchTab: {
        title: 'Email úspěšně ověřen',
        subtitle: 'Vraťte se do nově otevřeného okna pro pokračování',
        subtitleNewTab: 'Vraťte se do předchozího okna pro pokračování',
      },
    },
    emailCode: {
      title: 'Ověřte svůj email',
      subtitle: 'pro pokračování do {{applicationName}}',
      formTitle: 'Ověřovací kód',
      formSubtitle: 'Zadejte ověřovací kód poslaný na vaši emailovou adresu',
      resendButton: 'Znovu poslat kód',
    },
    phoneCode: {
      title: 'Ověřte svůj telefon',
      subtitle: 'pro pokračování do {{applicationName}}',
      formTitle: 'Ověřovací kód',
      formSubtitle: 'Zadejte ověřovací kód poslaný na vaše telefonní číslo',
      resendButton: 'Znovu poslat kód',
    },
    continue: {
      title: 'Vyplňte chybějící pole',
      subtitle: 'pro pokračování do {{applicationName}}',
      actionText: 'Máte účet?',
      actionLink: 'Přihlásit se',
    },
  },
  signIn: {
    start: {
      title: 'Přihlásit se',
      subtitle: 'pro pokračování do {{applicationName}}',
      actionText: 'Nemáte účet?',
      actionLink: 'Registrovat se',
      actionLink__use_email: 'Použít email',
      actionLink__use_phone: 'Použít telefon',
      actionLink__use_username: 'Použít uživatelské jméno',
      actionLink__use_email_username: 'Použít email nebo uživatelské jméno',
    },
    password: {
      title: 'Zadejte své heslo',
      subtitle: 'pro pokračování do {{applicationName}}',
      actionLink: 'Použít jinou metodu',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Zapomněli jste heslo?',
      label__alternativeMethods: 'Nebo se přihlaste pomocí jiné metody.',
      blockButton__resetPassword: 'Obnovit heslo',
    },
    forgotPassword: {
      title_email: 'Zkontrolujte svůj email',
      title_phone: 'Zkontrolujte svůj telefon',
      subtitle: 'pro obnovení hesla',
      formTitle: 'Ověřovací kód pro obnovení hesla',
      formSubtitle_email: 'Zadejte kód zaslaný na vaši emailovou adresu',
      formSubtitle_phone: 'Zadejte kód zaslaný na vaše telefonní číslo',
      resendButton: 'Znovu poslat kód',
    },
    resetPassword: {
      title: 'Obnovit heslo',
      formButtonPrimary: 'Obnovit heslo',
      successMessage: 'Vaše heslo bylo úspěšně změněno. Přihlašuji vás, prosím počkejte okamžik.',
    },
    resetPasswordMfa: {
      detailsLabel: 'Před obnovením hesla je třeba ověřit vaši totožnost.',
    },
    emailCode: {
      title: 'Zkontrolujte svůj email',
      subtitle: 'pro pokračování do {{applicationName}}',
      formTitle: 'Ověřovací kód',
      formSubtitle: 'Zadejte ověřovací kód zaslaný na vaši emailovou adresu',
      resendButton: 'Znovu poslat kód',
    },
    emailLink: {
      title: 'Zkontrolujte svůj email',
      subtitle: 'pro pokračování do {{applicationName}}',
      formTitle: 'Ověřovací odkaz',
      formSubtitle: 'Použijte ověřovací odkaz zaslaný na váš email',
      resendButton: 'Znovu poslat odkaz',
      unusedTab: {
        title: 'Můžete zavřít toto okno',
      },
      verified: {
        title: 'Úspěšně přihlášeno',
        subtitle: 'Brzy budete přesměrováni',
      },
      verifiedSwitchTab: {
        subtitle: 'Vraťte se do původního okna pro pokračování',
        titleNewTab: 'Přihlášeno v jiném okně',
        subtitleNewTab: 'Vraťte se do nově otevřeného okna pro pokračování',
      },
      loading: {
        title: 'Přihlašuji...',
        subtitle: 'Brzy budete přesměrováni',
      },
      failed: {
        title: 'Tento ověřovací odkaz je neplatný',
        subtitle: 'Vraťte se do původního okna pro pokračování.',
      },
      expired: {
        title: 'Tento ověřovací odkaz vypršel',
        subtitle: 'Vraťte se do původního okna pro pokračování.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Dvoufaktorové ověření',
      subtitle: '',
      formTitle: 'Ověřovací kód',
      formSubtitle: 'Zadejte ověřovací kód vygenerovaný vaší autentizační aplikací',
    },
    backupCodeMfa: {
      title: 'Zadejte záložní kód',
      subtitle: 'pro pokračování do {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Použít jinou metodu',
      actionLink: 'Získat pomoc',
      blockButton__emailLink: 'Odeslat odkaz na email {{identifier}}',
      blockButton__emailCode: 'Odeslat ověřovací kód na email {{identifier}}',
      blockButton__phoneCode: 'Poslat SMS kód na telefonní číslo {{identifier}}',
      blockButton__password: 'Přihlásit se pomocí hesla',
      blockButton__totp: 'Použít autentizační aplikaci',
      blockButton__backupCode: 'Použít záložní kód',
      getHelp: {
        title: 'Získat pomoc',
        content:
          'Pokud máte potíže s přihlášením do svého účtu, kontaktujte nás emailem a pokusíme se vám co nejdříve obnovit přístup.',
        blockButton__emailSupport: 'Podpora přes email',
      },
    },
    noAvailableMethods: {
      title: 'Nelze se přihlásit',
      subtitle: 'Došlo k chybě',
      message: 'Nelze pokračovat v přihlášení. Není k dispozici žádná dostupná autentifikační metoda.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Menu',
    formButtonPrimary__continue: 'Pokračovat',
    formButtonPrimary__finish: 'Dokončit',
    formButtonReset: 'Zrušit',
    start: {
      headerTitle__account: 'Účet',
      headerTitle__security: 'Bezpečnost',
      headerSubtitle__account: 'Spravujte své údaje o účtu',
      headerSubtitle__security: 'Spravujte své bezpečnostní nastavení',
      profileSection: {
        title: 'Profil',
      },
      usernameSection: {
        title: 'Uživatelské jméno',
        primaryButton__changeUsername: 'Změnit uživatelské jméno',
        primaryButton__setUsername: 'Nastavit uživatelské jméno',
      },
      emailAddressesSection: {
        title: 'Emailové adresy',
        primaryButton: 'Přidat emailovou adresu',
        detailsTitle__primary: 'Hlavní emailová adresa',
        detailsSubtitle__primary: 'Tato emailová adresa je hlavní',
        detailsAction__primary: 'Dokončit ověření',
        detailsTitle__nonPrimary: 'Nastavit jako hlavní emailovou adresu',
        detailsSubtitle__nonPrimary:
          'Nastavte tuto emailovou adresu jako hlavní pro příjem komunikace týkající se vašeho účtu.',
        detailsAction__nonPrimary: 'Nastavit jako hlavní',
        detailsTitle__unverified: 'Nepotvrzená emailová adresa',
        detailsSubtitle__unverified: 'Tato emailová adresa nebyla ověřena a může mít omezenou funkčnost',
        detailsAction__unverified: 'Dokončit ověření',
        destructiveActionTitle: 'Odstranit',
        destructiveActionSubtitle: 'Odstranit tuto emailovou adresu a odebrat ji ze svého účtu',
        destructiveAction: 'Odstranit emailovou adresu',
      },
      phoneNumbersSection: {
        title: 'Telefonní čísla',
        primaryButton: 'Přidat telefonní číslo',
        detailsTitle__primary: 'Hlavní telefonní číslo',
        detailsSubtitle__primary: 'Toto telefonní číslo je hlavní',
        detailsAction__primary: 'Dokončit ověření',
        detailsTitle__nonPrimary: 'Nastavit jako hlavní telefonní číslo',
        detailsSubtitle__nonPrimary:
          'Nastavte toto telefonní číslo jako hlavní pro příjem komunikace týkající se vašeho účtu.',
        detailsAction__nonPrimary: 'Nastavit jako hlavní',
        detailsTitle__unverified: 'Nepotvrzené telefonní číslo',
        detailsSubtitle__unverified: 'Toto telefonní číslo nebylo ověřeno a může mít omezenou funkčnost',
        detailsAction__unverified: 'Dokončit ověření',
        destructiveActionTitle: 'Odstranit',
        destructiveActionSubtitle: 'Odstranit toto telefonní číslo a odebrat jej ze svého účtu',
        destructiveAction: 'Odstranit telefonní číslo',
      },
      connectedAccountsSection: {
        title: 'Připojené účty',
        primaryButton: 'Připojit účet',
        title__connectionFailed: 'Opakovat neúspěšné připojení',
        title__reauthorize: 'Vyžadováno opětovné autorizování',
        subtitle__reauthorize:
          'Požadované oprávnění bylo aktualizováno a můžete mít omezenou funkcionalitu. Pro předejití případným problémům autorizujte tuto aplikaci znovu.',
        actionLabel__connectionFailed: 'Zkusit znovu',
        actionLabel__reauthorize: 'Autorizovat nyní',
        destructiveActionTitle: 'Odstranit',
        destructiveActionSubtitle: 'Odstranit tento připojený účet ze svého účtu',
        destructiveActionAccordionSubtitle: 'Odstranit připojený účet',
      },
      passwordSection: {
        title: 'Heslo',
        primaryButton__changePassword: 'Změnit heslo',
        primaryButton__setPassword: 'Nastavit heslo',
      },
      mfaSection: {
        title: 'Dvoufaktorové ověření',
        primaryButton: 'Přidat dvoufaktorové ověření',
        phoneCode: {
          destructiveActionTitle: 'Odstranit',
          destructiveActionSubtitle: 'Odstranit toto telefonní číslo ze dvoufaktorových ověřovacích metod',
          destructiveActionLabel: 'Odstranit telefonní číslo',
          title__default: 'Výchozí metoda',
          title__setDefault: 'Nastavit jako výchozí metodu',
          subtitle__default: 'Tato metoda bude použita jako výchozí dvoufaktorová ověřovací metoda při přihlašování.',
          subtitle__setDefault:
            'Nastavte tuto metodu jako výchozí, ta se použije jako výchozí dvoufaktorová ověřovací metoda při přihlašování.',
          actionLabel__setDefault: 'Nastavit jako výchozí',
        },
        backupCodes: {
          headerTitle: 'Záložní kódy',
          title__regenerate: 'Obnovit záložní kódy',
          subtitle__regenerate:
            'Získejte novou sadu zabezpečených záložních kódů. Předchozí záložní kódy budou smazány a nelze je použít.',
          actionLabel__regenerate: 'Obnovit kódy',
        },
        totp: {
          headerTitle: 'Aplikace Authenticator',
          title: 'Výchozí metoda',
          subtitle: 'Tato metoda bude použita jako výchozí dvoufaktorová ověřovací metoda při přihlašování.',
          destructiveActionTitle: 'Odstranit',
          destructiveActionSubtitle: 'Odstranit aplikaci Authenticator ze dvoufaktorových ověřovacích metod',
          destructiveActionLabel: 'Odstranit aplikaci Authenticator',
        },
      },
      activeDevicesSection: {
        title: 'Aktivní zařízení',
        primaryButton: 'Aktivní zařízení',
        detailsTitle: 'Aktuální zařízení',
        detailsSubtitle: 'Toto je zařízení, které právě používáte',
        destructiveActionTitle: 'Odhlásit',
        destructiveActionSubtitle: 'Odhlásit se ze svého účtu na tomto zařízení',
        destructiveAction: 'Odhlásit se z zařízení',
      },
      web3WalletsSection: {
        title: 'Web3 peněženky',
        primaryButton: 'Web3 peněženky',
        destructiveActionTitle: 'Odstranit',
        destructiveActionSubtitle: 'Odstranit tuto Web3 peněženku ze svého účtu',
        destructiveAction: 'Odstranit peněženku',
      },
    },
    profilePage: {
      title: 'Aktualizovat profil',
      imageFormTitle: 'Profilový obrázek',
      imageFormSubtitle: 'Nahrát obrázek',
      imageFormDestructiveActionSubtitle: 'Odstranit obrázek',
      fileDropAreaTitle: 'Přetáhněte soubor sem nebo...',
      fileDropAreaAction: 'Vybrat soubor',
      fileDropAreaHint: 'Nahrajte obrázek ve formátech JPG, PNG, GIF nebo WEBP s velikostí menší než 10 MB',
      successMessage: 'Váš profil byl aktualizován.',
    },
    usernamePage: {
      title: 'Aktualizovat uživatelské jméno',
      successMessage: 'Vaše uživatelské jméno bylo aktualizováno.',
    },
    emailAddressPage: {
      title: 'Přidat e-mailovou adresu',
      emailCode: {
        formHint: 'Na tuto e-mailovou adresu bude odeslán ověřovací kód.',
        formTitle: 'Ověřovací kód',
        formSubtitle: 'Zadejte ověřovací kód zaslaný na adresu {{identifier}}',
        resendButton: 'Znovu odeslat kód',
        successMessage: 'E-mailová adresa {{identifier}} byla přidána k vašemu účtu.',
      },
      emailLink: {
        formHint: 'Na tuto e-mailovou adresu bude odeslán ověřovací odkaz.',
        formTitle: 'Ověřovací odkaz',
        formSubtitle: 'Klikněte na ověřovací odkaz v e-mailu zaslaném na adresu {{identifier}}',
        resendButton: 'Znovu odeslat odkaz',
        successMessage: 'E-mailová adresa {{identifier}} byla přidána k vašemu účtu.',
      },
      removeResource: {
        title: 'Odstranit e-mailovou adresu',
        messageLine1: '{{identifier}} bude odstraněna z tohoto účtu.',
        messageLine2: 'Nebudete se moci přihlásit pomocí této e-mailové adresy.',
        successMessage: '{{emailAddress}} byla odebrána z vašeho účtu.',
      },
    },
    phoneNumberPage: {
      title: 'Přidat telefonní číslo',
      successMessage: '{{identifier}} bylo přidáno k vašemu účtu.',
      infoText: 'Na toto telefonní číslo bude odeslána textová zpráva obsahující ověřovací odkaz.',
      infoText__secondary: 'Mohou se vztahovat poplatky za zprávy a data.',
      removeResource: {
        title: 'Odstranit telefonní číslo',
        messageLine1: '{{identifier}} bude odebráno z tohoto účtu.',
        messageLine2: 'Nebudete již moci přihlásit se pomocí tohoto telefonního čísla.',
        successMessage: '{{phoneNumber}} bylo odebráno z vašeho účtu.',
      },
    },
    connectedAccountPage: {
      title: 'Přidat připojený účet',
      formHint: 'Vyberte poskytovatele pro připojení vašeho účtu.',
      formHint__noAccounts: 'Nejsou k dispozici žádní dostupní externí poskytovatelé účtů.',
      socialButtonsBlockButton: 'Připojit účet {{provider|titleize}}',
      successMessage: 'Poskytovatel byl přidán k vašemu účtu.',
      removeResource: {
        title: 'Odstranit připojený účet',
        messageLine1: '{{identifier}} bude odebrán z tohoto účtu.',
        messageLine2: 'Nebudete již moci používat tento připojený účet a jakékoli závislé funkce přestanou fungovat.',
        successMessage: '{{connectedAccount}} byl odebrán z vašeho účtu.',
      },
    },
    web3WalletPage: {
      title: 'Přidat web3 peněženku',
      subtitle__availableWallets: 'Vyberte web3 peněženku k připojení k vašemu účtu.',
      subtitle__unavailableWallets: 'Nejsou k dispozici žádné dostupné web3 peněženky.',
      successMessage: 'Peněženka byla přidána k vašemu účtu.',
      removeResource: {
        title: 'Odstranit web3 peněženku',
        messageLine1: '{{identifier}} bude odebrána z tohoto účtu.',
        messageLine2: 'Nebudete se již moci přihlásit pomocí této web3 peněženky.',
        successMessage: '{{web3Wallet}} byla odebrána z vašeho účtu.',
      },
    },
    passwordPage: {
      title: 'Nastavit heslo',
      changePasswordTitle: 'Změnit heslo',
      successMessage: 'Vaše heslo bylo nastaveno.',
      changePasswordSuccessMessage: 'Vaše heslo bylo aktualizováno.',
      sessionsSignedOutSuccessMessage: 'Všechna ostatní zařízení byla odhlášena.',
    },
    mfaPage: {
      title: 'Přidat dvoufaktorové ověřování',
      formHint: 'Vyberte způsob přidání.',
    },
    mfaTOTPPage: {
      title: 'Přidat aplikaci pro ověřování',
      verifyTitle: 'Ověřovací kód',
      verifySubtitle: 'Zadejte ověřovací kód generovaný vaší aplikací pro ověřování',
      successMessage:
        'Dvoufaktorové ověřování je nyní povoleno. Při přihlášení budete muset zadat ověřovací kód z této aplikace pro ověřování jako další krok.',
      authenticatorApp: {
        infoText__ableToScan:
          'Nastavte novou metodu přihlášení ve vaší aplikaci pro ověřování a naskenujte následující QR kód, abyste jej propojili se svým účtem.',
        infoText__unableToScan:
          'Nastavte novou metodu přihlášení ve své aplikaci pro ověřování a zadejte níže poskytnutý klíč.',
        inputLabel__unableToScan1:
          'Ujistěte se, že je povoleno časově závislé nebo jednorázové heslo, a dokončete propojení vašeho účtu.',
        inputLabel__unableToScan2:
          'Alternativně, pokud vaše aplikace pro ověřování podporuje TOTP URI, můžete také zkopírovat celý URI.',
        buttonAbleToScan__nonPrimary: 'Namísto toho naskenujte QR kód',
        buttonUnableToScan__nonPrimary: 'Nemůžete naskenovat QR kód?',
      },
      removeResource: {
        title: 'Odstranit dvoufaktorové ověřování',
        messageLine1: 'Při přihlašování již nebudou vyžadovány ověřovací kódy z této aplikace pro ověřování.',
        messageLine2: 'Váš účet nemusí být tak bezpečný. Opravdu chcete pokračovat?',
        successMessage: 'Dvoufaktorové ověřování pomocí aplikace pro ověřování bylo odebráno.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Přidat ověřování pomocí SMS kódu',
      primaryButton__addPhoneNumber: 'Přidat telefonní číslo',
      subtitle__availablePhoneNumbers:
        'Vyberte telefonní číslo pro registraci dvoufaktorového ověřování pomocí SMS kódu.',
      subtitle__unavailablePhoneNumbers:
        'Nejsou k dispozici žádná dostupná telefonní čísla pro registraci dvoufaktorového ověřování pomocí SMS kódu.',
      successMessage:
        'Dvoufaktorové ověřování pomocí SMS kódu je nyní povoleno pro toto telefonní číslo. Při přihlášení budete muset zadat ověřovací kód zaslaný na toto telefonní číslo jako další krok.',
      removeResource: {
        title: 'Odstranit dvoufaktorové ověřování',
        messageLine1: '{{identifier}} již nebude dostávat ověřovací kódy při přihlašování.',
        messageLine2: 'Váš účet nemusí být tak bezpečný. Opravdu chcete pokračovat?',
        successMessage: 'Dvoufaktorové ověřování pomocí SMS kódu bylo odebráno pro {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Přidat ověřování pomocí záložních kódů',
      title__codelist: 'Záložní kódy',
      subtitle__codelist: 'Uchovávejte je bezpečně a tajně.',
      infoText1: 'Pro tento účet budou povoleny záložní kódy.',
      infoText2:
        'Záložní kódy uchovávejte tajně a bezpečně. Můžete vygenerovat nové záložní kódy, pokud máte podezření, že byly kompromitovány.',
      successSubtitle:
        'Použijte jeden z těchto kódů k přihlášení do svého účtu, pokud ztratíte přístup k vašemu ověřovacímu zařízení.',
      successMessage:
        'Záložní kódy jsou nyní povoleny. Pokud ztratíte přístup k vašemu ověřovacímu zařízení, můžete použít jeden z těchto kódů k přihlášení do svého účtu. Každý kód lze použít pouze jednou.',
      actionLabel__copy: 'Zkopírovat vše',
      actionLabel__copied: 'Zkopírováno!',
      actionLabel__download: 'Stáhnout .txt',
      actionLabel__print: 'Vytisknout',
    },
  },
  userButton: {
    action__manageAccount: 'Spravovat účet',
    action__signOut: 'Odhlásit se',
    action__signOutAll: 'Odhlásit se ze všech účtů',
    action__addAccount: 'Přidat účet',
  },
  organizationSwitcher: {
    personalWorkspace: 'Osobní pracovní prostor',
    notSelected: 'Není vybrána žádná organizace',
    action__createOrganization: 'Vytvořit organizaci',
    action__manageOrganization: 'Spravovat organizaci',
  },
  impersonationFab: {
    title: 'Přihlášen(a) jako {{identifier}}',
    action__signOut: 'Odhlásit se',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Členové',
      headerTitle__settings: 'Nastavení',
      headerSubtitle__members: 'Zobrazit a spravovat členy organizace',
      headerSubtitle__settings: 'Spravovat nastavení organizace',
    },
    profilePage: {
      title: 'Profil organizace',
      subtitle: 'Spravovat profil organizace',
      successMessage: 'Organizace byla aktualizována.',
      dangerSection: {
        title: 'Upozornění',
        leaveOrganization: {
          title: 'Opustit organizaci',
          messageLine1: 'Opravdu chcete opustit tuto organizaci? Ztratíte přístup k této organizaci a jejím aplikacím.',
          messageLine2: 'Tato akce je trvalá a nevratná.',
          successMessage: 'Opustili jste organizaci.',
        },
      },
    },
    invitePage: {
      title: 'Pozvat členy',
      subtitle: 'Pozvat nové členy do této organizace',
      successMessage: 'Pozvánky byly úspěšně odeslány',
      detailsTitle__inviteFailed: 'Pozvánky se nepodařilo odeslat. Opravte následující a zkuste to znovu:',
      formButtonPrimary__continue: 'Odeslat pozvánky',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Žádní členové k zobrazení',
      action__invite: 'Pozvat',
      start: {},
      activeMembersTab: {
        tableHeader__user: 'Uživatel',
        tableHeader__joined: 'Připojil se',
        tableHeader__role: 'Role',
        tableHeader__actions: '',
        menuAction__remove: 'Odstranit člena',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Pozváni',
        menuAction__revoke: 'Zrušit pozvání',
      },
    },
  },
  createOrganization: {
    title: 'Vytvořit organizaci',
    formButtonSubmit: 'Vytvořit organizaci',
    invitePage: {
      formButtonReset: 'Přeskočit',
    },
  },
  unstable__errors: {
    form_identifier_not_found: '',
    form_password_pwned: 'Toto heslo bylo nalezeno v rámci uniku dat a nemůže být použito, prosím zvolte jiné heslo.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Nesprávné heslo',
    form_password_not_strong_enough: 'Vaše heslo není dostatečně silné.',
    form_password_size_in_bytes_exceeded:
      'Vaše heslo překročilo maximální povolený počet bytů, prosím zkrátit ho nebo odstranit některé speciální znaky.',
    passwordComplexity: {
      sentencePrefix: 'Vaše heslo musí obsahovat',
      minimumLength: '{{length}} nebo více znaků',
      maximumLength: 'méně než {{length}} znaků',
      requireNumbers: 'číslici',
      requireLowercase: 'malé písmeno',
      requireUppercase: 'velké písmeno',
      requireSpecialCharacter: 'speciální znak',
    },
    zxcvbn: {
      notEnough: 'Vaše heslo není dostatečně silné.',
      couldBeStronger: 'Vaše heslo funguje, ale mohlo by být silnější. Zkuste přidat více znaků.',
      goodPassword: 'Dobrá práce. Toto je vynikající heslo.',
      warnings: {
        straightRow: 'Řady kláves na klávesnici jsou snadno uhádnutelné.',
        keyPattern: 'Krátké vzory na klávesnici jsou snadno uhádnutelné.',
        simpleRepeat: 'Opakující se znaky jako "aaa" jsou snadno uhádnutelné.',
        extendedRepeat: 'Opakující se vzory znaků jako "abcabcabc" jsou snadno uhádnutelné.',
        sequences: 'Běžné sekvence znaků jako "abc" jsou snadno uhádnutelné.',
        recentYears: 'Nedávné roky jsou snadno uhádnutelné.',
        dates: 'Datum je snadno uhádnutelné.',
        topTen: 'Toto je často používané heslo.',
        topHundred: 'Toto je často používané heslo.',
        common: 'Toto je běžně používané heslo.',
        similarToCommon: 'Toto je podobné běžně používanému heslu.',
        wordByItself: 'Samostatná slova jsou snadno uhádnutelná.',
        namesByThemselves: 'Samostatná jména nebo příjmení jsou snadno uhádnutelná.',
        commonNames: 'Běžná jména a příjmení jsou snadno uhádnutelná.',
        userInputs: 'Heslo by nemělo obsahovat osobní nebo stránkou související údaje.',
        pwned: 'Vaše heslo bylo odhaleno při úniku dat na internetu.',
      },
      suggestions: {
        l33t: "Vyhněte se předvídatelným náhradám písmen, například '@' místo 'a'.",
        reverseWords: 'Vyhněte se obráceným pravopisům běžných slov.',
        allUppercase: 'Použijte velká písmena pouze u některých, ne všech písmen.',
        capitalization: 'Písmena pište s velkým počátečním písmenem a více než jen první písmeno.',
        dates: 'Vyhněte se datům a letopočtům, které jsou s vámi spojené.',
        recentYears: 'Vyhněte se nedávným rokům.',
        associatedYears: 'Vyhněte se letopočtům, které jsou s vámi spojené.',
        sequences: 'Vyhněte se běžným sekvencím znaků.',
        repeated: 'Vyhněte se opakujícím se slovům a znakům.',
        longerKeyboardPattern: 'Použijte delší vzory na klávesnici a měňte směr psaní vícekrát.',
        anotherWord: 'Přidejte více slov, která nejsou tak běžná.',
        useWords: 'Použijte více slov, ale vyhněte se běžným frázím.',
        noNeed: 'Můžete vytvářet silná hesla i bez použití symbolů, čísel nebo velkých písmen.',
        pwned: 'Pokud používáte toto heslo i jinde, měli byste ho změnit.',
      },
    },
  },
  dates: {
    previous6Days: "Minulý {{ date | weekday('cs-CZ','long') }} v {{ date | timeString('cs-CZ') }}",
    lastDay: "Včera v {{ date | timeString('cs-CZ') }}",
    sameDay: "Dnes v  {{ date | timeString('cs-CZ') }}",
    nextDay: "Zítra v {{ date | timeString('cs-CZ') }}",
    next6Days: "Příští  {{ date | weekday('cs-CZ','long') }} v {{ date | timeString('cs-CZ') }}",
    numeric: "{{ date | numeric('cs-CZ') }}",
  },
} as const;
