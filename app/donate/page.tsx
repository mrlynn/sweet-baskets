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
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

export default function DonatePage() {
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
              Donate
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Your generosity brings comfort to those who need it most
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
              mb: 4,
            }}
          >
            Every donation to Sweet Baskets—whether monetary or in-kind—helps us create and deliver care baskets that bring hope, comfort, and connection to children in hospitals and elderly individuals experiencing isolation.
          </Typography>
        </Container>

        {/* Ways to Donate */}
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
              Ways to Donate
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {/* Financial Donation */}
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
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
                    <AttachMoneyIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                    Financial Contribution
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    Make a monetary donation to help us purchase basket items, cover operational costs, and expand our reach.
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                    Donation processing coming soon. Contact us to donate.
                  </Typography>
                </Paper>
              </Box>

              {/* In-Kind Donation */}
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
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
                    <CardGiftcardIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                    In-Kind Donations
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    Donate items that go into our care baskets—toys, books, comfort items, personal care products, and more.
                  </Typography>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    color="secondary"
                  >
                    See Needed Items
                  </Button>
                </Paper>
              </Box>

              {/* Corporate Sponsorship */}
              <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
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
                    <CorporateFareIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                    Corporate Sponsorship
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    Partner with Sweet Baskets as a corporate sponsor and make a larger impact in the community.
                  </Typography>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </Paper>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Tax Deductibility Notice */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: 'primary.light',
              borderLeft: '4px solid',
              borderColor: 'primary.main',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.dark' }}>
              About Tax Deductibility
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.dark', lineHeight: 1.7 }}>
              Sweet Baskets is currently applying for 501(c)(3) nonprofit status with the IRS. Once our application is approved, donations may become tax-deductible. We will provide acknowledgment letters for all contributions and will notify donors once our tax-exempt status is confirmed.
            </Typography>
          </Paper>
        </Container>

        {/* How Donations Are Used */}
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
              How Your Donation Helps
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
                    $25
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Provides comfort items for one child's basket
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
                    $50
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Completes one full elderly care basket
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
                    $100
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Delivers two complete baskets to recipients
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
                    $500
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Supports a full basket drive event
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* CTA */}
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
              Contact us today to discuss how you can support Sweet Baskets through financial donations, in-kind contributions, or corporate sponsorship.
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
              Contact Us to Donate
            </Button>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
