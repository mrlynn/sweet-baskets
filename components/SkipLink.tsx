'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';

export default function SkipLink() {
  return (
    <Box
      component={Link}
      href="#main-content"
      sx={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 9999,
        padding: '1rem',
        backgroundColor: 'primary.main',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 700,
        '&:focus': {
          left: '1rem',
          top: '1rem',
        },
      }}
    >
      Skip to main content
    </Box>
  );
}
