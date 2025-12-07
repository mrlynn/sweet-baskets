'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Hero Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #3F5BA9 0%, #5B7BC9 100%)',
            color: 'white',
            py: { xs: 8, md: 12 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Small moments of kindness become lifelines of hope.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                mb: 5,
                opacity: 0.95,
                fontWeight: 400,
              }}
            >
              Sweet Baskets brings comfort to children in hospitals and elderly individuals who are homebound or in nursing care.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/donate"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  fontSize: '1.125rem',
                  py: 1.5,
                  px: 4,
                }}
              >
                Give a Basket
              </Button>
              <Button
                component={Link}
                href="/get-involved"
                variant="outlined"
                size="large"
                sx={{
                  fontSize: '1.125rem',
                  py: 1.5,
                  px: 4,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Volunteer
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Mission Section */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              color: 'primary.main',
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Sweet Baskets was founded on a simple belief: a thoughtful, personalized basket can lift someone's spirit at the exact moment they need it. We create and deliver care baskets to hospitalized children and older adults in nursing homes or at home. Each basket is built with compassion, curated with intention, and hand-delivered with kindness.
          </Typography>
        </Container>

        {/* How It Works Section */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                color: 'primary.main',
              }}
            >
              How It Works
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <VolunteerActivismIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      1. We gather comfort items
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Volunteers, donors, and partners contribute age-appropriate gifts and essentials.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'secondary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <FavoriteIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      2. We assemble with care
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Each basket is personalized to brighten someone's day.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <LocalShippingIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      3. We deliver with love
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      To pediatric hospital rooms, nursing homes, and homebound seniors.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* CTA Strip */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #E91E63 0%, #F06292 100%)',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Bring a moment of sweetness to someone who needs it.
            </Typography>
            <Button
              component={Link}
              href="/donate"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'secondary.main',
                fontSize: '1.125rem',
                py: 1.5,
                px: 5,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Donate a Basket Today
            </Button>
          </Container>
        </Box>

        {/* Trust/Stats Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ width: { xs: "100%", sm: "33.33%" } }}>
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
                  2025 Goal: Baskets Delivered
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "33.33%" } }}>
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
                  Volunteers Active
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "33.33%" } }}>
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
            </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
