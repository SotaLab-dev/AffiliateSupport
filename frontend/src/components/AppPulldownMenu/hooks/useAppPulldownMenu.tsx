import { mockAffiliateStatuses } from '@/components/mocks/AppPulldownMenu';

export const usePulldownMaster = () => {
  return {
    options: mockAffiliateStatuses,
    isLoading: false,
  };
};