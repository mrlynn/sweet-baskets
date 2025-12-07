'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Image from 'next/image';
import { keyframes } from '@mui/system';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import FadeInCard from '@/components/FadeInCard';
import SparkleIcon from '@/components/SparkleIcon';
import SectionHeading from '@/components/SectionHeading';
import SkipLink from '@/components/SkipLink';
import OrganizationSchema from '@/components/OrganizationSchema';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CelebrationIcon from '@mui/icons-material/Celebration';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <OrganizationSchema />
      <SkipLink />
      <Header />
      <Box id="main-content" component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
                    animation: mounted ? `${fadeInUp} 1s ease-out` : 'none',
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
                    animation: mounted ? `${fadeInUp} 1s ease-out 0.2s backwards` : 'none',
                  }}
                >
                  Sweet Baskets brings comfort to children in hospitals and elderly individuals who are homebound or in nursing care.
                </Typography>
                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  flexWrap: 'wrap',
                  animation: mounted ? `${fadeInUp} 1s ease-out 0.4s backwards` : 'none',
                }}>
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
                      boxShadow: '0 4px 14px rgba(233, 30, 99, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 6px 20px rgba(233, 30, 99, 0.5)',
                      },
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
                      borderWidth: '2px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
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
                  animation: mounted ? `${fadeIn} 1.2s ease-out 0.3s backwards` : 'none',
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
          <SectionHeading mb={4}>Our Mission</SectionHeading>
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
            <SectionHeading subtitle="From donation to delivery, every step is guided by compassion">
              How It Works
            </SectionHeading>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {/* Step 1: You Give */}
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(25% - 12px)" }, flex: { md: "1 1 0" } }}>
                <FadeInCard
                  delay={0}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(233, 30, 99, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Step Number Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'secondary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        1
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <CardGiftcardIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                      You Give
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      Donate items, funds, or your time to help us gather comfort essentials
                    </Typography>
                  </CardContent>
                </FadeInCard>
              </Box>

              {/* Step 2: We Build */}
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(25% - 12px)" }, flex: { md: "1 1 0" } }}>
                <FadeInCard
                  delay={150}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(233, 30, 99, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Step Number Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'secondary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        2
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'secondary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <HandshakeIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                      We Build
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      Volunteers thoughtfully assemble each basket with care and intention
                    </Typography>
                  </CardContent>
                </FadeInCard>
              </Box>

              {/* Step 3: We Deliver */}
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(25% - 12px)" }, flex: { md: "1 1 0" } }}>
                <FadeInCard
                  delay={300}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(233, 30, 99, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Step Number Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'secondary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        3
                      </Typography>
                    </Box>
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
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                      We Deliver
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      Baskets reach hospital rooms, nursing homes, and homebound seniors
                    </Typography>
                  </CardContent>
                </FadeInCard>
              </Box>

              {/* Step 4: You Create Joy */}
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(25% - 12px)" }, flex: { md: "1 1 0" } }}>
                <FadeInCard
                  delay={450}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(233, 30, 99, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Step Number Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'secondary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        4
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'secondary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <CelebrationIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                      You Create Joy
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      Recipients feel seen, valued, and reminded they're not alone
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

        {/* Stories Section */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="lg">
            <SectionHeading subtitle="Every basket tells a story of connection, comfort, and compassion.">
              Stories of Impact
            </SectionHeading>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {/* Story 1 - Senior Recipient */}
              <Box sx={{ width: { xs: "100%", md: "calc(50% - 16px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderLeft: '4px solid',
                    borderColor: 'secondary.main',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      mb: 3,
                    }}
                  >
                    "When I received my basket, I felt like someone remembered I existed. The soft blanket brought me warmth, the lotion made my hands feel young again, and the heartfelt note reminded me that kindness still exists in this world."
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'secondary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <FavoriteIcon sx={{ color: 'secondary.main', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        Margaret T.
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Nursing home resident, 84
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>

              {/* Story 2 - Volunteer */}
              <Box sx={{ width: { xs: "100%", md: "calc(50% - 16px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      mb: 3,
                    }}
                  >
                    "Assembling baskets with Sweet Baskets has given me purpose. Seeing the joy on recipients' faces when we deliver reminds me why community matters. It's not just about the gifts—it's about showing up for each other."
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <GroupsIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        Sarah K.
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Volunteer coordinator
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>

            {/* CTA to Stories Page */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                component={Link}
                href="/stories"
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                Read More Stories
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
