'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import DownloadIcon from '@mui/icons-material/Download';

export default function PressPage() {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
              Press & Media Kit
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Resources for media and partners
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary', mb: 6, textAlign: 'center' }}>
            Thank you for your interest in covering Sweet Baskets. Below you'll find information and resources to help tell our story.
          </Typography>

          <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
            About Sweet Baskets
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
            Sweet Baskets is a nonprofit organization dedicated to bringing comfort and joy to children in hospitals and elderly individuals experiencing isolation. Through personalized care baskets delivered with compassion, we create moments of connection that remind recipients they are valued and remembered by their community.
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, color: 'text.secondary' }}>
            Founded on the belief that small acts of kindness can have profound impacts, Sweet Baskets partners with healthcare facilities and relies on community volunteers and donors to fulfill our mission. We are currently applying for 501(c)(3) nonprofit status and expanding our reach to serve more individuals in need.
          </Typography>

          <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
            Key Facts
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 6 }}>
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ color: 'secondary.main', mb: 1 }}>
                  Mission
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Bringing comfort through personalized care baskets
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ color: 'secondary.main', mb: 1 }}>
                  Programs
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Children's Hospital Baskets & Elderly Care Baskets
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ color: 'secondary.main', mb: 1 }}>
                  Status
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Applying for 501(c)(3) nonprofit status
                </Typography>
              </Paper>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ color: 'secondary.main', mb: 1 }}>
                  2025 Goal
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  1,000 baskets delivered
                </Typography>
              </Paper>
            </Box>
          </Box>

          <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
            Brand Assets
          </Typography>
          <Paper elevation={2} sx={{ p: 4, mb: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Our logo and brand guidelines are available for media use.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              disabled
            >
              Download Logo Package (Coming Soon)
            </Button>
          </Paper>

          <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
            Media Contact
          </Typography>
          <Paper elevation={0} sx={{ p: 4, bgcolor: 'primary.light' }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'primary.dark' }}>
              For press inquiries, interviews, or additional information:
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.dark', fontWeight: 600 }}>
              Email: <Link href="mailto:info@sweetbaskets.org" style={{ color: 'inherit' }}>info@sweetbaskets.org</Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: 'primary.dark' }}>
              We typically respond to media requests within 24-48 hours.
            </Typography>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
