'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
              Terms of Use
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Last Updated: December 2025
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Welcome to Sweet Baskets. By accessing or using our website, you agree to comply with and be bound by these Terms of Use.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Website Use
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            This website is provided for informational purposes about Sweet Baskets and our mission. You may use the website for lawful purposes only.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Intellectual Property
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            All content on this website, including text, graphics, logos, and images, is the property of Sweet Baskets and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express permission.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Limitation of Liability
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Sweet Baskets and its directors, officers, volunteers, and employees shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our website or services.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Modifications
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this website.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Questions about these Terms? Contact us at info@sweetbaskets.org
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
