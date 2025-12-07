'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ElderlyIcon from '@mui/icons-material/Elderly';

export default function ProgramsPage() {
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
              Our Programs
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Bringing comfort and joy to those who need it most
            </Typography>
          </Container>
        </Box>

        {/* Programs Overview */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              textAlign: 'center',
              mb: 6,
            }}
          >
            Sweet Baskets delivers carefully curated care packages to two special groups: children facing medical challenges in hospitals and elderly individuals experiencing isolation in nursing homes or at home. Each program is designed with the unique needs of our recipients in mind.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {/* Children's Hospital Baskets */}
            <Box sx={{ width: { xs: "100%", md: "calc(50% - 16px)" }, flex: { md: "1 1 0" } }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      bgcolor: 'secondary.main',
                      borderRadius: '50%',
                      mb: 3,
                    }}
                  >
                    <ChildCareIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                    Children's Hospital Baskets
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                    Designed to bring comfort and distraction to young patients during hospital stays.
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Each basket includes age-appropriate toys, games, comfort items, and activities to help children cope with medical treatments and hospital life.
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={Link}
                    href="/programs/children"
                    variant="contained"
                    color="secondary"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Box>

            {/* Elderly Care Baskets */}
            <Box sx={{ width: { xs: "100%", md: "calc(50% - 16px)" }, flex: { md: "1 1 0" } }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      bgcolor: 'primary.main',
                      borderRadius: '50%',
                      mb: 3,
                    }}
                  >
                    <ElderlyIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                    Elderly Care Baskets
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                    Created to combat isolation and bring joy to seniors in nursing homes or homebound.
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    These baskets feature soft blankets, cozy socks, chapstick, lotion, personal care products, and other comfort items tailored to bring warmth and connection.
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={Link}
                    href="/programs/elderly"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Box>
            </Box>
        </Container>

        {/* Call to Action */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #E91E63 0%, #F06292 100%)',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Help Us Expand Our Programs
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, opacity: 0.95 }}>
              Your support enables us to reach more children and elderly individuals in need.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/donate"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'secondary.main',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                }}
              >
                Donate Now
              </Button>
              <Button
                component={Link}
                href="/get-involved"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                Volunteer
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
