'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { keyframes } from '@mui/system';

const heartPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

interface AnimatedCounterProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  showHeartPulse?: boolean;
}

export default function AnimatedCounter({
  value,
  label,
  icon,
  color,
  bgColor,
  showHeartPulse = false,
}: AnimatedCounterProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [label]);

  return (
    <Box
      id={`counter-${label}`}
      sx={{
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease-out',
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          p: 2,
          bgcolor: bgColor,
          borderRadius: '50%',
          mb: 2,
          position: 'relative',
        }}
      >
        {icon}
        {showHeartPulse && (
          <Box
            sx={{
              position: 'absolute',
              top: -8,
              right: -8,
              animation: `${heartPulse} 1.5s ease-in-out infinite`,
            }}
          >
            <FavoriteIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
          </Box>
        )}
      </Box>
      <Typography variant="h4" sx={{ color, mb: 1, fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
    </Box>
  );
}
