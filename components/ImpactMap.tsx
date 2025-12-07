'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import PlaceIcon from '@mui/icons-material/Place';

interface CommunityData {
  name: string;
  state: string;
  baskets: number;
  facilities: number;
  color: string;
}

const communities: CommunityData[] = [
  { name: 'Boston', state: 'MA', baskets: 245, facilities: 8, color: '#E91E63' },
  { name: 'Cambridge', state: 'MA', baskets: 156, facilities: 5, color: '#F06292' },
  { name: 'Somerville', state: 'MA', baskets: 98, facilities: 3, color: '#F48FB1' },
  { name: 'Brookline', state: 'MA', baskets: 72, facilities: 2, color: '#F8BBD0' },
  { name: 'Newton', state: 'MA', baskets: 64, facilities: 2, color: '#FCE4EC' },
];

export default function ImpactMap() {
  const totalBaskets = communities.reduce((sum, c) => sum + c.baskets, 0);
  const totalFacilities = communities.reduce((sum, c) => sum + c.facilities, 0);

  return (
    <Box>
      {/* Map Placeholder - Would integrate real map library like Mapbox or Google Maps */}
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          height: '500px',
          mb: 4,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center', zIndex: 1 }}>
          <PlaceIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
            Interactive Impact Map
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '400px', mx: 'auto' }}>
            Map visualization showing communities served across the region
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
            Integration with Mapbox or Google Maps pending
          </Typography>
        </Box>

        {/* Animated Map Pins */}
        {communities.map((community, index) => (
          <Box
            key={community.name}
            sx={{
              position: 'absolute',
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
              animation: 'bounce 2s ease-in-out infinite',
              animationDelay: `${index * 0.2}s`,
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          >
            <PlaceIcon sx={{ fontSize: 40, color: community.color, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
          </Box>
        ))}
      </Paper>

      {/* Community Stats */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
        <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' }, flex: { sm: '1 1 0' } }}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700 }}>
              {totalBaskets}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Total Baskets Delivered
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' }, flex: { sm: '1 1 0' } }}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 700 }}>
              {totalFacilities}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Partner Facilities
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Communities List */}
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ mb: 3, color: 'primary.main', fontWeight: 700 }}>
          Communities We Serve
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {communities.map((community) => (
            <Box
              key={community.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(8px)',
                  bgcolor: 'primary.light',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PlaceIcon sx={{ color: community.color, fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {community.name}, {community.state}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {community.facilities} {community.facilities === 1 ? 'facility' : 'facilities'}
                  </Typography>
                </Box>
              </Box>
              <Chip
                label={`${community.baskets} baskets`}
                sx={{
                  bgcolor: community.color,
                  color: 'white',
                  fontWeight: 600,
                }}
              />
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
