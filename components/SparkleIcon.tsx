'use client';

import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';

const sparkle = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

interface SparkleIconProps {
  size?: number;
  color?: string;
  delay?: number;
}

export default function SparkleIcon({
  size = 20,
  color = '#FFD700',
  delay = 0
}: SparkleIconProps) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        position: 'relative',
        animation: `${sparkle} 2s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill={color}
          opacity="0.9"
        />
      </svg>
    </Box>
  );
}
