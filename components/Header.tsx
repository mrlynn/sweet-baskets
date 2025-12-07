'use client';

import { useState, useMemo } from 'react';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Link from 'next/link';

const basePages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const showHospitalPortal = useFeatureFlag('HOSPITAL_PARTNER_PORTAL');
  const showVolunteerHours = useFeatureFlag('VOLUNTEER_HOURS_TRACKING');

  const pages = useMemo(() => {
    const dynamicPages = [...basePages];

    if (showHospitalPortal) {
      dynamicPages.splice(5, 0, { label: 'Partner Portal', href: '/partners/portal' });
    }

    if (showVolunteerHours) {
      dynamicPages.splice(4, 0, { label: 'Track Hours', href: '/volunteer/hours' });
    }

    return dynamicPages;
  }, [showHospitalPortal, showVolunteerHours]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, alignItems: 'center' }}>
              <Image
                src="/sweet-baskets-logo.png"
                alt="Sweet Baskets Logo"
                width={50}
                height={50}
                priority
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 2,
                  fontWeight: 700,
                  color: 'primary.main',
                  textDecoration: 'none',
                }}
              >
                Sweet Baskets
              </Typography>
            </Box>
          </Link>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link href={page.href} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <Image
                src="/sweet-baskets-logo.png"
                alt="Sweet Baskets Logo"
                width={40}
                height={40}
                priority
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 1,
                  fontWeight: 700,
                  color: 'primary.main',
                  fontSize: '1rem',
                }}
              >
                Sweet Baskets
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                href={page.href}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Donate Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={Link}
              href="/donate"
              variant="contained"
              color="secondary"
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                fontWeight: 700,
                borderRadius: 28,
                boxShadow: '0 4px 12px rgba(233, 30, 99, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(233, 30, 99, 0.4)',
                },
              }}
            >
              Donate
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
