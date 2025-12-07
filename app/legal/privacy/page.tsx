'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 6,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
              }}
            >
              Privacy Policy
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Last Updated: December 2025
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Sweet Baskets ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our organization.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Information We Collect
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            We may collect personal information that you voluntarily provide to us when you:
          </Typography>
          <Box component="ul" sx={{ mb: 4, pl: 4 }}>
            <li><Typography variant="body1">Express interest in volunteering</Typography></li>
            <li><Typography variant="body1">Make a donation</Typography></li>
            <li><Typography variant="body1">Contact us via email or phone</Typography></li>
            <li><Typography variant="body1">Sign up for our newsletter or updates</Typography></li>
          </Box>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            We use the information we collect to:
          </Typography>
          <Box component="ul" sx={{ mb: 4, pl: 4 }}>
            <li><Typography variant="body1">Coordinate volunteer activities</Typography></li>
            <li><Typography variant="body1">Process donations and provide acknowledgments</Typography></li>
            <li><Typography variant="body1">Respond to inquiries and provide customer service</Typography></li>
            <li><Typography variant="body1">Send updates about our programs and impact</Typography></li>
            <li><Typography variant="body1">Improve our website and services</Typography></li>
          </Box>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Information Sharing
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our nonprofit activities, provided they agree to keep this information confidential.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Cookies and Tracking
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Our website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but this may limit your ability to use certain features of our website.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Data Security
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Your Rights
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at info@sweetbaskets.org.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: info@sweetbaskets.org
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
