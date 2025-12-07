'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BusinessIcon from '@mui/icons-material/Business';

export default function GetInvolvedPage() {
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
              Get Involved
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Join us in spreading kindness and comfort
            </Typography>
          </Container>
        </Box>

        {/* Introduction */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            Sweet Baskets thrives because of the generosity and dedication of people like you. Whether you have time to volunteer, items to donate, or connections to share, there are many ways to make a meaningful impact in our community.
          </Typography>
        </Container>

        {/* Ways to Help */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 6,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              Ways to Help
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {/* Volunteer */}
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)' },
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
                      Volunteer Your Time
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      Help us assemble baskets, organize donation drives, or deliver baskets to recipients. Every hour you give makes a difference.
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      Sign Up to Volunteer
                    </Button>
                  </CardContent>
                </Card>
              </Box>

              {/* Host a Basket Drive */}
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)' },
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
                      <CardGiftcardIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      Host a Basket Drive
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      Organize a collection drive at your school, workplace, or community group. We'll provide everything you need to get started.
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    >
                      Start a Drive
                    </Button>
                  </CardContent>
                </Card>
              </Box>

              {/* Partner with Your Facility */}
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)' },
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
                      <BusinessIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      Partner with Your Facility
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      Work at a hospital or nursing home? Help us connect with patients and residents who could benefit from our baskets.
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      Become a Partner
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* What Volunteers Do */}
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
            What Volunteers Do
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Basket Assembly
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Help sort donations and assemble care baskets at our regular packing events.
                </Typography>
              </Box>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Delivery
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Deliver completed baskets to hospitals, nursing homes, and homebound individuals.
                </Typography>
              </Box>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Outreach
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Help spread awareness about Sweet Baskets through social media and community events.
                </Typography>
              </Box>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Coordination
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Assist with planning, logistics, and partnership development.
                </Typography>
              </Box>
            </Box>
            </Box>
        </Container>

        {/* Call to Action */}
        <Box
          sx={{
            bgcolor: 'secondary.main',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Ready to Make a Difference?
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, opacity: 0.95 }}>
              Contact us today to learn more about volunteer opportunities and how you can get involved.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'secondary.main',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              Contact Us
            </Button>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
