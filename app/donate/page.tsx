'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import DonateActionSchema from '@/components/DonateActionSchema';
import Link from 'next/link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FavoriteIcon from '@mui/icons-material/Favorite';

const donationAmounts = [
  { amount: 25, baskets: 1, description: '1 basket' },
  { amount: 50, baskets: 2, description: '2 baskets' },
  { amount: 100, baskets: 4, description: '4 baskets' },
  { amount: 250, baskets: 10, description: '10 baskets' },
  { amount: 500, baskets: 20, description: '20 baskets' },
];

export default function DonatePage() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  return (
    <>
      <DonateActionSchema />
      <SkipLink />
      <Header />
      <Box id="main-content" component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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

        {/* Notice Banner */}
        <Container maxWidth="md" sx={{ py: 0, pb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: 'primary.light',
              borderLeft: '6px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
              Online Donations Coming Soon
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', lineHeight: 1.7 }}>
              We're currently completing the necessary paperwork to enable secure online donation processing. In the meantime, please{' '}
              <Link href="/contact" style={{ color: 'white', fontWeight: 600, textDecoration: 'underline' }}>
                contact us directly
              </Link>
              {' '}to discuss how you can support Sweet Baskets through financial donations, in-kind contributions, or corporate sponsorship.
            </Typography>
          </Paper>
        </Container>

        {/* Donation Form */}
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(63, 91, 169, 0.02) 0%, rgba(233, 30, 99, 0.02) 100%)',
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: 'primary.main', fontWeight: 700 }}>
              Choose Your Contribution
            </Typography>

            {/* Frequency Toggle */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <ToggleButtonGroup
                value={frequency}
                exclusive
                onChange={(e, newFreq) => newFreq && setFrequency(newFreq)}
                sx={{
                  '& .MuiToggleButton-root': {
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    '&.Mui-selected': {
                      bgcolor: 'secondary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'secondary.dark',
                      },
                    },
                  },
                }}
              >
                <ToggleButton value="one-time">One-Time</ToggleButton>
                <ToggleButton value="monthly">Monthly</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* Suggested Amounts */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
              {donationAmounts.map((option) => (
                <Box
                  key={option.amount}
                  onClick={() => {
                    setSelectedAmount(option.amount);
                    setCustomAmount('');
                  }}
                  sx={{
                    width: { xs: "calc(50% - 8px)", sm: "calc(20% - 12.8px)" },
                    flex: { xs: "0 0 calc(50% - 8px)", sm: "0 0 calc(20% - 12.8px)" },
                    cursor: 'pointer',
                  }}
                >
                  <Paper
                    elevation={selectedAmount === option.amount ? 4 : 1}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      border: '2px solid',
                      borderColor: selectedAmount === option.amount ? 'secondary.main' : 'transparent',
                      transition: 'all 0.3s ease',
                      bgcolor: selectedAmount === option.amount ? 'secondary.light' : 'white',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'secondary.main',
                      },
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      ${option.amount}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      {option.description}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>

            {/* Custom Amount */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 2, textAlign: 'center', color: 'text.secondary' }}>
                Or enter a custom amount:
              </Typography>
              <TextField
                fullWidth
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                placeholder="Enter amount"
                inputProps={{
                  'aria-label': 'Custom donation amount',
                  min: 1,
                }}
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1, color: 'text.secondary' }}>$</Typography>,
                }}
                sx={{
                  maxWidth: '300px',
                  mx: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            {/* Donation Impact */}
            {(selectedAmount > 0 || customAmount) && (
              <Box
                sx={{
                  bgcolor: 'secondary.light',
                  p: 3,
                  borderRadius: 2,
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                <FavoriteIcon sx={{ fontSize: 32, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6" sx={{ color: 'secondary.main', mb: 1 }}>
                  Your Impact
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  ${customAmount || selectedAmount} {frequency === 'monthly' && 'per month'} will help deliver{' '}
                  {Math.floor((Number(customAmount) || selectedAmount) / 25)} basket
                  {Math.floor((Number(customAmount) || selectedAmount) / 25) !== 1 && 's'} to those in need.
                </Typography>
              </Box>
            )}

            {/* Donate Button */}
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{
                py: 2,
                fontSize: '1.125rem',
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(233, 30, 99, 0.4)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(233, 30, 99, 0.5)',
                },
              }}
            >
              Donate ${customAmount || selectedAmount} {frequency === 'monthly' ? 'Monthly' : 'Now'}
            </Button>

            <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'text.secondary' }}>
              Secure payment processing coming soon. Contact us to donate today.
            </Typography>
          </Paper>
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
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
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
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
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
                    Donate items that go into our care baskets—blankets, socks, chapstick, personal care products, toys for children, and more.
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
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
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
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
                    $25
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Provides toys and personal items for one child's basket
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
                    $50
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Completes one full elderly care basket
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
                    $100
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Delivers two complete baskets to recipients
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
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
