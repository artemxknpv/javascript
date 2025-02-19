import type { OrganizationResource } from '@clerk/types';
import React from 'react';

import { InfiniteListSpinner } from '../../common';
import {
  useCoreOrganization,
  useCoreOrganizationList,
  useCoreUser,
  useOrganizationSwitcherContext,
} from '../../contexts';
import { Box, descriptors, localizationKeys } from '../../customizables';
import { OrganizationPreview, PersonalWorkspacePreview, PreviewButton } from '../../elements';
import { useInView } from '../../hooks';
import { SwitchArrows } from '../../icons';
import { common } from '../../styledSystem';
import { organizationListParams } from './utils';

export type UserMembershipListProps = {
  onPersonalWorkspaceClick: React.MouseEventHandler;
  onOrganizationClick: (org: OrganizationResource) => unknown;
};

const useFetchMemberships = () => {
  const { userMemberships } = useCoreOrganizationList({
    userMemberships: organizationListParams.userMemberships,
  });

  const { ref } = useInView({
    threshold: 0,
    onChange: inView => {
      if (!inView) {
        return;
      }
      if (userMemberships.hasNextPage) {
        userMemberships.fetchNext?.();
      }
    },
  });

  return {
    userMemberships,
    ref,
  };
};
export const UserMembershipList = (props: UserMembershipListProps) => {
  const { onPersonalWorkspaceClick, onOrganizationClick } = props;

  const { hidePersonal } = useOrganizationSwitcherContext();
  const { organization: currentOrg } = useCoreOrganization();
  const { ref, userMemberships } = useFetchMemberships();
  const user = useCoreUser();

  const otherOrgs = ((userMemberships.count || 0) > 0 ? userMemberships.data || [] : [])
    .map(e => e.organization)
    .filter(o => o.id !== currentOrg?.id);

  const { username, primaryEmailAddress, primaryPhoneNumber, ...userWithoutIdentifiers } = user;

  const { isLoading, hasNextPage } = userMemberships;

  return (
    <Box
      sx={t => ({
        maxHeight: `calc(4 * ${t.sizes.$12})`,
        overflowY: 'auto',
        ...common.unstyledScrollbar(t),
      })}
      role='group'
      aria-label={hidePersonal ? 'List of all organization memberships' : 'List of all accounts'}
    >
      {currentOrg && !hidePersonal && (
        <PreviewButton
          elementDescriptor={descriptors.organizationSwitcherPreviewButton}
          icon={SwitchArrows}
          sx={{ borderRadius: 0 }}
          onClick={onPersonalWorkspaceClick}
          role='menuitem'
        >
          <PersonalWorkspacePreview
            user={userWithoutIdentifiers}
            size='sm'
            avatarSx={t => ({ margin: `0 calc(${t.space.$3}/2)` })}
            title={localizationKeys('organizationSwitcher.personalWorkspace')}
          />
        </PreviewButton>
      )}
      {otherOrgs.map(organization => (
        <PreviewButton
          key={organization.id}
          elementDescriptor={descriptors.organizationSwitcherPreviewButton}
          icon={SwitchArrows}
          sx={{ borderRadius: 0 }}
          onClick={() => onOrganizationClick(organization)}
          role='menuitem'
        >
          <OrganizationPreview
            elementId='organizationSwitcher'
            avatarSx={t => ({ margin: `0 calc(${t.space.$3}/2)` })}
            organization={organization}
            size='sm'
          />
        </PreviewButton>
      ))}
      {(hasNextPage || isLoading) && <InfiniteListSpinner ref={ref} />}
    </Box>
  );
};
