'use client';

import { isFeatureEnabled, type FeatureFlag } from '@/config/features';

/**
 * Hook to check if a feature is enabled
 *
 * @example
 * const isPortalEnabled = useFeatureFlag('HOSPITAL_PARTNER_PORTAL');
 */
export function useFeatureFlag(feature: FeatureFlag): boolean {
  return isFeatureEnabled(feature);
}
