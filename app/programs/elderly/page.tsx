'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ElderlyProgramPage() {
  const basketItems = [
    'Comfort items and soft blankets',
    'Personal care products',
    'Puzzles and brain games',
    'Large-print books and magazines',
    'Healthy snacks and treats',
    'Handwritten cards and notes',
    'Grooming essentials',
    'Nostalgic items and photos',
  ];

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
              Elderly Care Baskets
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Combating isolation and bringing dignity to seniors
            </Typography>
          </Container>
        </Box>

        {/* Program Description */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 4,
            }}
          >
            Isolation and loneliness are serious challenges for many elderly individuals, whether they're in nursing homes or homebound. Our Elderly Care Baskets are designed to bring comfort, connection, and a sense of being remembered to seniors who may feel forgotten.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            Each basket is carefully curated with items that promote comfort, mental stimulation, and self-care. We work closely with nursing homes, assisted living facilities, and community organizations to ensure our baskets reach those who need them most. Every delivery includes a personal touch—a handwritten note reminding recipients that they are valued and loved.
          </Typography>
        </Container>

        {/* What's Included */}
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
              What's Included
            </Typography>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {basketItems.map((item, index) => (
                  <Box sx={{ width: { xs: "100%", sm: "50%" } }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                      <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* Impact Section */}
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
            The Impact
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: 'primary.light',
              borderLeft: '4px solid',
              borderColor: 'primary.main',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                fontStyle: 'italic',
                color: 'primary.dark',
              }}
            >
              "For many elderly individuals, a Sweet Basket represents more than just gifts—it's proof that someone in the community remembers them, values them, and cares about their well-being. That sense of connection can be life-changing."
            </Typography>
          </Paper>
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
              Help Combat Senior Isolation
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, opacity: 0.95 }}>
              Your support brings comfort and connection to elderly individuals who need it most.
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
                Donate a Basket
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
