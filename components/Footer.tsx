'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    setSubscribed(true);
    setEmail('');
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2E4380',
        color: 'white',
        pt: 0,
        pb: 4,
        mt: 'auto',
        borderTop: '4px solid',
        borderColor: 'secondary.main',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Heart Pattern Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.06,
          zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 30c-3-3-8-6-8-10 0-3 2-5 5-5 2 0 3 1 3 1s1-1 3-1c3 0 5 2 5 5 0 4-5 7-8 10z' fill='%23E91E63' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />
      <Container maxWidth="lg" sx={{ pt: 8, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {/* Logo and Mission */}
          <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
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
          <Box sx={{ flex: { xs: "0 0 50%", sm: "0 0 calc(25% - 12px)", md: "0 0 calc(16.666% - 13.33px)" } }}>
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
          <Box sx={{ flex: { xs: "0 0 50%", sm: "0 0 calc(25% - 12px)", md: "0 0 calc(16.666% - 13.33px)" } }}>
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
          <Box sx={{ flex: { xs: "0 0 50%", sm: "0 0 calc(25% - 12px)", md: "0 0 calc(16.666% - 13.33px)" } }}>
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
          <Box sx={{ flex: { xs: "0 0 50%", sm: "0 0 calc(25% - 12px)", md: "0 0 calc(16.666% - 13.33px)" } }}>
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

        {/* Newsletter Signup */}
        <Box sx={{ mt: 6, mb: 6, maxWidth: '500px', mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            Stay Connected
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
            Get updates about our impact, upcoming events, and ways to help.
          </Typography>
          {subscribed ? (
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 600 }}>
              ✓ Thank you for subscribing!
            </Typography>
          ) : (
            <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'secondary.main',
                    },
                  },
                  '& .MuiOutlinedInput-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  px: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </Button>
            </Box>
          )}
        </Box>

        {/* Partner Logos Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ mb: 3, opacity: 0.7, fontSize: '0.875rem' }}>
            Proud Partners
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Placeholder boxes for partner logos */}
            {[1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                sx={{
                  width: '120px',
                  height: '60px',
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="caption" sx={{ opacity: 0.4, fontSize: '0.75rem' }}>
                  Partner {i}
                </Typography>
              </Box>
            ))}
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
