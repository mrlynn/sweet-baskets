'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArchedDivider from '@/components/ArchedDivider';
import AnimatedCounter from '@/components/AnimatedCounter';
import FadeInCard from '@/components/FadeInCard';
import SparkleIcon from '@/components/SparkleIcon';
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
            position: 'relative',
            color: 'white',
            overflow: 'hidden',
            pb: 0,
            pt: { xs: 8, md: 12 },
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
            }}
          />
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(63, 91, 169, 0.85) 0%, rgba(91, 123, 201, 0.85) 100%)',
              zIndex: 1,
            }}
          />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-end',
                gap: { xs: 4, md: 6 },
                minHeight: { md: '500px' },
              }}
            >
              {/* Text Content */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: 'center', md: 'left' },
                  pb: { xs: 4, md: 8 },
                  alignSelf: { xs: 'center', md: 'flex-start' },
                  pt: { md: 6 },
                  position: 'relative',
                }}
              >
                {/* Decorative Sparkles */}
                <Box sx={{ position: 'absolute', top: 20, left: { xs: 20, md: -20 }, display: { xs: 'none', sm: 'block' } }}>
                  <SparkleIcon size={24} color="rgba(255, 255, 255, 0.7)" delay={0} />
                </Box>
                <Box sx={{ position: 'absolute', top: 100, right: { xs: 30, md: 50 }, display: { xs: 'none', sm: 'block' } }}>
                  <SparkleIcon size={16} color="rgba(255, 255, 255, 0.6)" delay={0.5} />
                </Box>
                <Box sx={{ position: 'absolute', bottom: 50, left: { xs: 10, md: 30 }, display: { xs: 'none', sm: 'block' } }}>
                  <SparkleIcon size={20} color="rgba(255, 255, 255, 0.5)" delay={1} />
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3,
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
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
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
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
              </Box>

              {/* Image - Aligned to Bottom */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  maxWidth: { xs: '100%', md: '550px' },
                  height: { xs: 'auto', md: '100%' },
                }}
              >
                <Image
                  src="/receiving-basket.png"
                  alt="Elderly woman joyfully receiving a Sweet Basket"
                  width={600}
                  height={500}
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '500px',
                    display: 'block',
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                  }}
                />
              </Box>
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
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <FadeInCard
                  delay={0}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(233, 30, 99, 0.2)',
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
                </FadeInCard>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <FadeInCard
                  delay={200}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(233, 30, 99, 0.2)',
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
                </FadeInCard>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <FadeInCard
                  delay={400}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(233, 30, 99, 0.2)',
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
                </FadeInCard>
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
            <Box sx={{ width: { xs: "100%", sm: "calc(33.333% - 21.33px)" }, flex: { sm: "1 1 0" }, textAlign: 'center' }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <AnimatedCounter
                  value="1,000"
                  label="2025 Goal: Baskets Delivered"
                  icon={<TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
                  color="primary.main"
                  bgColor="primary.light"
                  showHeartPulse={true}
                />
              </Paper>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "calc(33.333% - 21.33px)" }, flex: { sm: "1 1 0" }, textAlign: 'center' }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <AnimatedCounter
                  value="Growing"
                  label="Volunteers Active"
                  icon={<GroupsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />}
                  color="secondary.main"
                  bgColor="secondary.light"
                  showHeartPulse={true}
                />
              </Paper>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "calc(33.333% - 21.33px)" }, flex: { sm: "1 1 0" }, textAlign: 'center' }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <AnimatedCounter
                  value="Expanding"
                  label="Partner Facilities"
                  icon={<BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
                  color="primary.main"
                  bgColor="primary.light"
                  showHeartPulse={true}
                />
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
