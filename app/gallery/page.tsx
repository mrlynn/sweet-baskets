'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Photo gallery data - easy to update over time
const photos = [
  { src: '/photos/IMG_7320.jpeg', alt: 'Sweet Baskets volunteers preparing care packages' },
  { src: '/photos/IMG_7321.jpeg', alt: 'Care basket assembly in progress' },
  { src: '/photos/IMG_7643.jpeg', alt: 'Volunteers working together' },
  { src: '/photos/IMG_7647.jpeg', alt: 'Care packages ready for distribution' },
  { src: '/photos/IMG_7653.jpeg', alt: 'Volunteers sorting basket items' },
  { src: '/photos/IMG_7669.jpeg', alt: 'Community members helping with baskets' },
  { src: '/photos/IMG_7672.jpeg', alt: 'Team assembling care packages' },
  { src: '/photos/IMG_7673.jpeg', alt: 'Volunteers organizing supplies' },
  { src: '/photos/IMG_7674.jpeg', alt: 'Basket assembly in action' },
  { src: '/photos/IMG_7675.jpeg', alt: 'Care package creation' },
  { src: '/photos/IMG_7676.jpeg', alt: 'Sweet Baskets community event' },
  { src: '/photos/IMG_7677.jpeg', alt: 'Volunteers preparing donations' },
  { src: '/photos/IMG_7680.jpeg', alt: 'Basket items being organized' },
  { src: '/photos/IMG_7682.jpeg', alt: 'Team working on care packages' },
  { src: '/photos/IMG_7686.jpeg', alt: 'Sweet Baskets volunteers in action' },
];

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleClickOpen = (photo: { src: string; alt: string }) => {
    setSelectedImage(photo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Page Header */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #3F5BA9 0%, #5B7BC9 100%)',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Photo Gallery
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              See our volunteers in action and the impact we're making together
            </Typography>
          </Container>
        </Box>

        {/* Gallery Grid */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={16}
            sx={{
              columnCount: {
                xs: '1 !important',
                sm: '2 !important',
                md: '3 !important',
              },
            }}
          >
            {photos.map((photo, index) => (
              <ImageListItem
                key={index}
                sx={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
                onClick={() => handleClickOpen(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>

        {/* Lightbox Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent sx={{ p: 0, bgcolor: 'transparent' }}>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #E91E63 0%, #F06292 100%)',
            color: 'white',
            py: 6,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              Want to Be Part of Our Story?
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 3, opacity: 0.95 }}>
              Join our volunteer team and help us create more moments of joy
            </Typography>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
