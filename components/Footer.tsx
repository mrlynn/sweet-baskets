'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerLinks = {
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Impact', href: '/impact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Press', href: '/press' },
  ],
  programs: [
    { label: "Children's Hospital Baskets", href: '/programs/children' },
    { label: 'Elderly Care Baskets', href: '/programs/elderly' },
  ],
  getInvolved: [
    { label: 'Volunteer', href: '/get-involved' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Use', href: '/legal/terms' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
    { label: 'Accessibility', href: '/legal/accessibility' },
    { label: 'Gift Policy', href: '/legal/gift-policy' },
    { label: 'Nonprofit Status', href: '/legal/nonprofit-status' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {/* Logo and Mission */}
          <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image
                src="/sweet-baskets-logo.png"
                alt="Sweet Baskets Logo"
                width={60}
                height={60}
              />
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 700 }}>
                Sweet Baskets
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Bringing comfort to children in hospitals and elderly individuals who are homebound or in nursing care through personalized care baskets.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                aria-label="Facebook"
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>

          {/* About Links */}
          <Box sx={{ width: { xs: "50%", sm: "25%", md: "16.66%" } }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 700 }}>
              About
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.about.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '0.875rem',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Programs Links */}
          <Box sx={{ width: { xs: "50%", sm: "25%", md: "16.66%" } }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 700 }}>
              Programs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.programs.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '0.875rem',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Get Involved Links */}
          <Box sx={{ width: { xs: "50%", sm: "25%", md: "16.66%" } }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 700 }}>
              Get Involved
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.getInvolved.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '0.875rem',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Legal Links */}
          <Box sx={{ width: { xs: "50%", sm: "25%", md: "16.66%" } }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 700 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '0.875rem',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>
            </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 6,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Sweet Baskets. A pending 501(c)(3) nonprofit organization. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
            sweetbaskets.org
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
