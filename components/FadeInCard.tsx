'use client';

import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { SxProps, Theme } from '@mui/material/styles';

interface FadeInCardProps {
  children: React.ReactNode;
  delay?: number;
  sx?: SxProps<Theme>;
}

export default function FadeInCard({ children, delay = 0, sx = {} }: FadeInCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(`fade-card-${delay}`);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card
      id={`fade-card-${delay}`}
      sx={{
        ...sx,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </Card>
  );
}
