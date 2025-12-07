'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactPage() {
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
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              We'd love to hear from you
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
              mb: 6,
            }}
          >
            Whether you're interested in volunteering, making a donation, partnering with us, or simply want to learn more about Sweet Baskets, we're here to help. Reach out and let's start a conversation about how we can work together to bring comfort to those who need it most.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {/* Email */}
            <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
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
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    mb: 3,
                  }}
                >
                  <EmailIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Email Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    wordBreak: 'break-word',
                  }}
                >
                  info@sweetbaskets.org
                </Typography>
              </Paper>
            </Box>

            {/* Phone */}
            <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
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
                    bgcolor: 'secondary.main',
                    borderRadius: '50%',
                    mb: 3,
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Call Us
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Coming Soon
                </Typography>
              </Paper>
            </Box>

            {/* Location */}
            <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
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
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    mb: 3,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Serving
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Your Community
                </Typography>
              </Paper>
            </Box>
            </Box>
        </Container>

        {/* Reasons to Contact */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 6,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              Reach Out If You Want To...
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Volunteer
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Join our team and help assemble and deliver care baskets
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Donate
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Contribute financially or donate items for our baskets
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Partner
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Connect your hospital or nursing home with Sweet Baskets
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Host a Drive
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Organize a basket drive at your school or workplace
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Learn More
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Ask questions about our programs and impact
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    Share Feedback
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Tell us about your experience with Sweet Baskets
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Contact Form Placeholder */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper
            elevation={2}
            sx={{
              p: 6,
              textAlign: 'center',
              bgcolor: 'primary.light',
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: 'primary.dark' }}>
              Contact Form Coming Soon
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.dark', mb: 3 }}>
              In the meantime, please reach out to us directly at <strong>info@sweetbaskets.org</strong>
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.dark' }}>
              We typically respond within 1-2 business days.
            </Typography>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
