'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BusinessIcon from '@mui/icons-material/Business';

export default function ImpactPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Page Header */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #3F5BA9 0%, #5B7BC9 100%)',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Our Impact
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Measuring the difference we're making together
            </Typography>
          </Container>
        </Box>

        {/* Stats Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 6,
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            2025 Goals & Progress
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    bgcolor: 'primary.light',
                    borderRadius: '50%',
                    mb: 2,
                  }}
                >
                  <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                </Box>
                <Typography variant="h4" sx={{ color: 'primary.main', mb: 1, fontWeight: 700 }}>
                  1,000
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Baskets Goal for 2025
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    bgcolor: 'secondary.light',
                    borderRadius: '50%',
                    mb: 2,
                  }}
                >
                  <GroupsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                </Box>
                <Typography variant="h4" sx={{ color: 'secondary.main', mb: 1, fontWeight: 700 }}>
                  Growing
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Volunteer Network
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    bgcolor: 'primary.light',
                    borderRadius: '50%',
                    mb: 2,
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                </Box>
                <Typography variant="h4" sx={{ color: 'primary.main', mb: 1, fontWeight: 700 }}>
                  Expanding
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Partner Facilities
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    bgcolor: 'secondary.light',
                    borderRadius: '50%',
                    mb: 2,
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                </Box>
                <Typography variant="h4" sx={{ color: 'secondary.main', mb: 1, fontWeight: 700 }}>
                  2
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Core Programs
                </Typography>
              </Paper>
            </Box>
            </Box>
        </Container>

        {/* Pilot Story */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 4,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              Our Journey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'text.secondary',
                mb: 4,
              }}
            >
              Sweet Baskets is a young organization with big ambitions. We're currently in our pilot phase, building partnerships with local hospitals and nursing homes, assembling our first baskets, and establishing the foundation for sustainable growth.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'text.secondary',
              }}
            >
              While we're just beginning our journey, the response from recipients, families, and community members has been overwhelmingly positive. Each basket delivered reinforces our belief that small acts of kindness can have profound impacts on people's lives.
            </Typography>
          </Container>
        </Box>

        {/* Looking Ahead */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 4,
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Looking Ahead
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'primary.light',
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.dark' }}>
                  Expand Our Reach
                </Typography>
                <Typography variant="body1" sx={{ color: 'primary.dark' }}>
                  Partner with more hospitals, nursing homes, and assisted living facilities across the region.
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'secondary.light',
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'secondary.dark' }}>
                  Build Our Team
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.dark' }}>
                  Recruit and train dedicated volunteers who share our passion for service.
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'secondary.light',
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'secondary.dark' }}>
                  Secure 501(c)(3) Status
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.dark' }}>
                  Complete our nonprofit application to unlock tax-deductible donations and grant opportunities.
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'primary.light',
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.dark' }}>
                  Track & Share Stories
                </Typography>
                <Typography variant="body1" sx={{ color: 'primary.dark' }}>
                  Document and celebrate the impact we're making in the lives of recipients and their families.
                </Typography>
              </Paper>
            </Box>
            </Box>
        </Container>

        {/* Testimonial Placeholder */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="md">
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'white',
                borderLeft: '4px solid',
                borderColor: 'secondary.main',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                "The impact of a Sweet Basket goes beyond the items inside. It's about showing someone that their community remembers them, values them, and cares about their well-being during a difficult time."
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                — Sweet Baskets Founder
              </Typography>
            </Paper>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
