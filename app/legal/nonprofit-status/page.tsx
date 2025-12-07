'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NonprofitStatusPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
              Nonprofit Status
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Sweet Baskets is committed to operating with full transparency and accountability as we work to formalize our nonprofit status.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              bgcolor: 'secondary.light',
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.dark' }}>
              Current Status
            </Typography>
            <Typography variant="body1" sx={{ color: 'secondary.dark', lineHeight: 1.8 }}>
              Sweet Baskets is currently applying for 501(c)(3) tax-exempt status with the Internal Revenue Service (IRS). We are in the process of completing all required documentation and expect to receive our determination letter in the coming months.
            </Typography>
          </Paper>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            What This Means
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            While our 501(c)(3) application is pending, donations to Sweet Baskets may not yet be tax-deductible. However, we are committed to providing acknowledgment letters for all contributions and will notify donors once our tax-exempt status is confirmed.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Our Mission Remains Unchanged
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Regardless of our formal tax status, Sweet Baskets is dedicated to our mission of bringing comfort to children in hospitals and elderly individuals experiencing isolation. Every donation and volunteer hour directly supports this work.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Updates
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            We will update this page and notify our supporters as soon as we receive confirmation of our 501(c)(3) status from the IRS.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Questions?
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            If you have questions about our nonprofit status or how donations are used, please contact us at info@sweetbaskets.org.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
