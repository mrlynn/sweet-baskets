'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GiftPolicyPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
              Gift Policy
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Sweet Baskets is grateful for all donations and contributions. This Gift Policy outlines how we accept, acknowledge, and utilize donations.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Types of Gifts Accepted
          </Typography>
          <Box component="ul" sx={{ mb: 4, pl: 4 }}>
            <li><Typography variant="body1">Monetary contributions (cash, check, credit card, online transfers)</Typography></li>
            <li><Typography variant="body1">In-kind donations of items for care baskets</Typography></li>
            <li><Typography variant="body1">Corporate sponsorships</Typography></li>
            <li><Typography variant="body1">Volunteer time and services</Typography></li>
          </Box>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            How Funds Are Allocated
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Donations are used to purchase basket items, cover operational costs, expand our programs, and deliver care baskets to recipients. We are committed to using funds efficiently and transparently to maximize our impact.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Acknowledgment
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            All donors will receive a written acknowledgment of their contribution. Once our 501(c)(3) status is approved, we will provide documentation for tax-deductible donations as required by the IRS.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Refund Policy
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            As a nonprofit organization, donations to Sweet Baskets are generally non-refundable. If you have concerns about a donation, please contact us immediately at info@sweetbaskets.org.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Donor Privacy
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            We respect the privacy of our donors. We will not sell, trade, or share donor information with third parties without permission, except as required by law.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
