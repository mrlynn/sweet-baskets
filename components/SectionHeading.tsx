'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  color?: string;
  mb?: number;
}

export default function SectionHeading({
  children,
  subtitle,
  align = 'center',
  color = 'primary.main',
  mb = 6
}: SectionHeadingProps) {
  return (
    <Box sx={{ textAlign: align, mb }}>
      <Box sx={{ display: 'inline-block', position: 'relative' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            color: color,
            fontWeight: 700,
            mb: subtitle ? 2 : 0,
          }}
        >
          {children}
        </Typography>
        {/* Pink accent underline */}
        <Box
          sx={{
            width: '60px',
            height: '4px',
            bgcolor: 'secondary.main',
            mx: align === 'center' ? 'auto' : 0,
            mt: 1,
            borderRadius: '2px',
          }}
        />
      </Box>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            color: 'text.secondary',
            maxWidth: '600px',
            mx: align === 'center' ? 'auto' : 0,
            mt: 3,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
