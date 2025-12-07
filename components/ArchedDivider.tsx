'use client';

import Box from '@mui/material/Box';

interface ArchedDividerProps {
  topColor?: string;
  bottomColor?: string;
  height?: number;
  flip?: boolean;
}

export default function ArchedDivider({
  topColor = '#5B7BC9',
  bottomColor = '#ffffff',
  height = 80,
  flip = false,
}: ArchedDividerProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        backgroundColor: bottomColor,
        margin: 0,
        padding: 0,
        display: 'block',
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: flip ? 'auto' : 0,
          bottom: flip ? 0 : 'auto',
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      >
        <path
          d={flip ? "M0,120 Q600,0 1200,120 L1200,0 L0,0 Z" : "M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"}
          fill={topColor}
        />
      </svg>
    </Box>
  );
}
