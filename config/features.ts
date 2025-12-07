/**
 * Feature Flags Configuration
 *
 * Toggle features on/off without code changes.
 * Set to true to enable, false to disable.
 */

export const FEATURES = {
  // Phase 2.5 Features
  HOSPITAL_PARTNER_PORTAL: false,
  VOLUNTEER_HOURS_TRACKING: false,
  IMPACT_MAP: false,
  VIDEO_HERO: false,
  ANNUAL_REPORT: false,

  // Future Features
  BLOG_SECTION: false,
  EVENTS_CALENDAR: false,
  DONOR_DASHBOARD: false,
  SOCIAL_SHARING: true,
} as const;

export type FeatureFlag = keyof typeof FEATURES;

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: FeatureFlag): boolean {
  return FEATURES[feature];
}

/**
 * Get all enabled features
 */
export function getEnabledFeatures(): FeatureFlag[] {
  return Object.entries(FEATURES)
    .filter(([_, enabled]) => enabled)
    .map(([feature]) => feature as FeatureFlag);
}

