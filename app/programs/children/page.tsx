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

export default function ChildrenProgramPage() {
  const basketItems = [
    'Age-appropriate toys and games',
    'Coloring books and art supplies',
    'Comfort items (stuffed animals, blankets)',
    'Books and puzzles',
    'Healthy snacks and treats',
    'Activity kits and crafts',
    'Personal care items',
    'Encouraging cards and notes',
  ];

  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Page Header */}
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
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Children's Hospital Baskets
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Bringing smiles to young patients during challenging times
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
            Hospital stays can be frightening and overwhelming for children. Our Children's Hospital Baskets are thoughtfully designed to provide comfort, distraction, and joy during medical treatments and recovery. Each basket is personalized based on the child's age, interests, and medical needs.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            We partner with pediatric hospitals and healthcare facilities to identify children who would benefit most from our service. Every basket is assembled with care by our dedicated volunteers and delivered directly to hospital rooms, bringing a moment of happiness when it's needed most.
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
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                {basketItems.map((item, index) => (
                  <Box sx={{ width: { xs: "100%", sm: "50%" } }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 24 }} />
                      <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
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
              bgcolor: 'secondary.light',
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
              }}
            >
              "A Sweet Basket doesn't just provide entertainment—it shows a child that their community cares about them. It brings light to a difficult situation and reminds families that they're not alone in their journey."
            </Typography>
          </Paper>
        </Container>

        {/* Call to Action */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Help Brighten a Child's Hospital Stay
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, opacity: 0.95 }}>
              Your donation or volunteer time can make a real difference in a young patient's life.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/donate"
                variant="contained"
                color="secondary"
                size="large"
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
