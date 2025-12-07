'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
              Cookie Policy
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Last Updated: December 2025
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            This Cookie Policy explains how Sweet Baskets uses cookies and similar technologies on our website.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            What Are Cookies?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Types of Cookies We Use
          </Typography>
          <Box component="ul" sx={{ mb: 4, pl: 4 }}>
            <li><Typography variant="body1"><strong>Essential Cookies:</strong> Required for the website to function properly</Typography></li>
            <li><Typography variant="body1"><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</Typography></li>
            <li><Typography variant="body1"><strong>Functionality Cookies:</strong> Remember your preferences and settings</Typography></li>
          </Box>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Managing Cookies
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            You can control and manage cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Questions about our use of cookies? Contact us at info@sweetbaskets.org
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
