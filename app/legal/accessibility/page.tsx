'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
              Accessibility Statement
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Sweet Baskets is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Conformance Goal
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines help make web content more accessible for people with disabilities and more user-friendly for everyone.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Measures We Take
          </Typography>
          <Box component="ul" sx={{ mb: 4, pl: 4 }}>
            <li><Typography variant="body1">Providing alt text for images</Typography></li>
            <li><Typography variant="body1">Using clear and consistent navigation</Typography></li>
            <li><Typography variant="body1">Ensuring sufficient color contrast</Typography></li>
            <li><Typography variant="body1">Making content keyboard accessible</Typography></li>
            <li><Typography variant="body1">Using semantic HTML markup</Typography></li>
          </Box>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Feedback
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact us:
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Email: info@sweetbaskets.org
            <br />
            We aim to respond to accessibility feedback within 5 business days.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
