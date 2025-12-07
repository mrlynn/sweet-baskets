'use client';

import Box from '@mui/material/Box';

interface BasketWeavePatternProps {
  opacity?: number;
}

export default function BasketWeavePattern({ opacity = 0.03 }: BasketWeavePatternProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: opacity,
        zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233F5BA9' fill-opacity='0.4'%3E%3Crect x='0' y='0' width='30' height='2'/%3E%3Crect x='30' y='0' width='2' height='30'/%3E%3Crect x='0' y='15' width='30' height='2'/%3E%3Crect x='15' y='0' width='2' height='30'/%3E%3Crect x='0' y='30' width='30' height='2'/%3E%3Crect x='30' y='30' width='2' height='30'/%3E%3Crect x='0' y='45' width='30' height='2'/%3E%3Crect x='15' y='30' width='2' height='30'/%3E%3Crect x='30' y='15' width='30' height='2'/%3E%3Crect x='45' y='0' width='2' height='30'/%3E%3Crect x='30' y='45' width='30' height='2'/%3E%3Crect x='45' y='30' width='2' height='30'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}
    />
  );
}
