# Feature Flags - Phase 2.5

This document explains how to enable/disable Phase 2.5 bonus features using feature flags.

## Overview

Feature flags allow you to turn features on and off without code changes. All Phase 2.5 features are **disabled by default** and can be enabled by modifying the configuration file.

## Configuration File

Location: `/config/features.ts`

```typescript
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
```

## How to Enable Features

1. Open `/config/features.ts`
2. Change the desired feature from `false` to `true`
3. Save the file
4. Rebuild the application: `npm run build`
5. Restart the development server if running: `npm run dev`

## Available Phase 2.5 Features

### 1. Hospital Partner Portal (`HOSPITAL_PARTNER_PORTAL`)

**Route:** `/partners/portal`

**Description:** A dedicated portal for hospital and nursing home partners to:
- Request care baskets
- Schedule deliveries
- Track impact metrics

**When enabled:**
- Adds "Partner Portal" link to main navigation
- Exposes the portal page at `/partners/portal`

**To enable:**
```typescript
HOSPITAL_PARTNER_PORTAL: true,
```

---

### 2. Volunteer Hours Tracking (`VOLUNTEER_HOURS_TRACKING`)

**Route:** `/volunteer/hours`

**Description:** A system for volunteers to:
- Log volunteer hours
- Track activities (basket assembly, delivery, outreach, etc.)
- View total hours and approval status
- See personal impact statistics

**When enabled:**
- Adds "Track Hours" link to main navigation
- Exposes the tracking page at `/volunteer/hours`

**To enable:**
```typescript
VOLUNTEER_HOURS_TRACKING: true,
```

---

### 3. Impact Map (`IMPACT_MAP`)

**Location:** `/impact` page

**Description:** An interactive map visualization showing:
- Communities served across the region
- Number of baskets delivered per community
- Partner facilities in each area
- Total impact statistics

**When enabled:**
- Adds "Communities We Serve" section to the Impact page
- Shows animated map with location pins
- Displays community statistics

**To enable:**
```typescript
IMPACT_MAP: true,
```

**Note:** Currently shows a placeholder map. Integration with Mapbox or Google Maps can be added later.

---

### 4. Video Hero (`VIDEO_HERO`)

**Status:** Not yet implemented

**Planned functionality:**
- Replace static hero image with gentle slow-motion video
- Show seniors receiving baskets
- Auto-play, muted, looping background video

**To enable when implemented:**
```typescript
VIDEO_HERO: true,
```

---

### 5. Annual Report (`ANNUAL_REPORT`)

**Status:** Not yet implemented

**Planned functionality:**
- Dedicated annual report section
- Financial transparency
- Impact metrics and stories
- Donor trust building

**To enable when implemented:**
```typescript
ANNUAL_REPORT: true,
```

---

## Usage in Code

### Using the Hook

```typescript
import { useFeatureFlag } from '@/hooks/useFeatureFlag';

export default function MyComponent() {
  const showFeature = useFeatureFlag('HOSPITAL_PARTNER_PORTAL');

  return (
    <>
      {showFeature && <PartnerPortalSection />}
    </>
  );
}
```

### Direct Function Call

```typescript
import { isFeatureEnabled } from '@/config/features';

if (isFeatureEnabled('IMPACT_MAP')) {
  // Feature-specific logic
}
```

## Testing Feature Flags

### To test with all features enabled:

1. Open `/config/features.ts`
2. Set all Phase 2.5 features to `true`:
```typescript
HOSPITAL_PARTNER_PORTAL: true,
VOLUNTEER_HOURS_TRACKING: true,
IMPACT_MAP: true,
VIDEO_HERO: true,
ANNUAL_REPORT: true,
```
3. Run `npm run build && npm run dev`
4. Navigate to:
   - Partner Portal: http://localhost:3000/partners/portal
   - Volunteer Hours: http://localhost:3000/volunteer/hours
   - Impact Map: http://localhost:3000/impact (see map section)

### To test with all features disabled:

1. Set all features to `false` (default state)
2. Run `npm run build && npm run dev`
3. Verify features do not appear in navigation or pages

## Best Practices

1. **Test before deploying:** Always build and test after changing feature flags
2. **Document changes:** Update this file when adding new features
3. **Progressive rollout:** Enable one feature at a time in production
4. **Monitor impact:** Track user engagement when enabling new features
5. **Keep defaults conservative:** New features should default to `false`

## Deployment Recommendations

### Staging Environment
Enable all features to test full functionality:
```typescript
HOSPITAL_PARTNER_PORTAL: true,
VOLUNTEER_HOURS_TRACKING: true,
IMPACT_MAP: true,
```

### Production Environment
Enable features gradually based on readiness:
```typescript
// Week 1: Enable Impact Map
IMPACT_MAP: true,

// Week 2: Enable Volunteer Hours
VOLUNTEER_HOURS_TRACKING: true,

// Week 3: Enable Hospital Portal
HOSPITAL_PARTNER_PORTAL: true,
```

## Future Enhancements

Additional features that can be added to the feature flag system:
- `BLOG_SECTION`: Content management and blog posts
- `EVENTS_CALENDAR`: Volunteer events and fundraisers
- `DONOR_DASHBOARD`: Personalized donor portal
- `SOCIAL_SHARING`: Enhanced social media integration
- `MULTILINGUAL`: Multi-language support

## Support

For questions about feature flags:
- Review this documentation
- Check `/config/features.ts` for current settings
- Consult the development team for new feature additions
