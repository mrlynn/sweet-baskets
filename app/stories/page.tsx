'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StoriesPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
              Impact Stories
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Real stories of how Sweet Baskets makes a difference
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: 'center',
              bgcolor: 'background.default',
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              Stories Coming Soon
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary', mb: 3 }}>
              As Sweet Baskets grows and delivers more care baskets, we'll share inspiring stories from recipients, families, volunteers, and partner facilities.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
              These stories will highlight the real impact of your donations and volunteer efforts, showing how small acts of kindness create meaningful moments of connection and comfort.
            </Typography>
          </Paper>

          <Box sx={{ mt: 6, p: 4, bgcolor: 'primary.light', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.dark' }}>
              Have a Story to Share?
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.dark', lineHeight: 1.8 }}>
              If you or someone you know has been touched by a Sweet Basket, we'd love to hear from you. Your story could inspire others to get involved and help us reach more people in need.
              <br /><br />
              Email us at <strong>info@sweetbaskets.org</strong>
            </Typography>
          </Box>
        </Container>

        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h5" sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>
              What People Are Saying
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'white',
                borderLeft: '4px solid',
                borderColor: 'secondary.main',
                mb: 3,
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
                "Sweet Baskets represents the best of our community—people coming together to bring comfort and joy to those who need it most."
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                — Community Partner
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'white',
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
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                "The impact of a thoughtfully assembled care basket goes far beyond the items inside. It's a message of hope and connection."
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                — Sweet Baskets Team
              </Typography>
            </Paper>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
