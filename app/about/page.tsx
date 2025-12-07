'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function AboutPage() {
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
              About Sweet Baskets
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Our story, our mission, and why this work matters
            </Typography>
          </Container>
        </Box>

        {/* Our Story Section */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 4,
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Sweet Baskets was born from a simple observation: some of life's hardest moments happen in hospital rooms and nursing homes. For children facing medical challenges and elderly individuals experiencing isolation, a small gesture of kindness can make an extraordinary difference.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Our founder witnessed firsthand how a thoughtfully assembled care basket could transform someone's day—bringing not just practical comfort items, but hope, connection, and the reminder that someone cares. This vision grew into Sweet Baskets, an organization dedicated to spreading comfort and joy to those who need it most.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            Today, Sweet Baskets partners with hospitals, nursing homes, and community organizations to ensure that no child or elderly person has to face their challenges alone. Every basket we deliver carries a message: You matter. You are seen. You are loved.
          </Typography>
        </Container>

        {/* Why This Matters Section */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 6,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              Why This Work Matters
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      bgcolor: 'secondary.main',
                      borderRadius: '50%',
                      mb: 3,
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                    Emotional Support
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Hospital stays and nursing home life can be isolating. Our baskets provide emotional comfort and a tangible reminder that someone cares.
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      bgcolor: 'primary.main',
                      borderRadius: '50%',
                      mb: 3,
                    }}
                  >
                    <HandshakeIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                    Community Connection
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Each basket strengthens the bond between our community and those facing health challenges, building bridges of compassion.
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      bgcolor: 'secondary.main',
                      borderRadius: '50%',
                      mb: 3,
                    }}
                  >
                    <EmojiPeopleIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                    Dignity & Joy
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Every person deserves to feel valued and remembered. Our personalized baskets restore dignity and bring moments of joy.
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Our Commitment Section */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 4,
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Our Commitment
          </Typography>
          <Box sx={{ bgcolor: 'primary.light', p: 4, borderRadius: 3 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'primary.dark',
                mb: 2,
              }}
            >
              At Sweet Baskets, we are committed to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: 'primary.dark' }}>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 1 }}>
                  Delivering thoughtfully curated baskets that meet the specific needs and preferences of recipients
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 1 }}>
                  Partnering with healthcare facilities to identify those who would benefit most from our service
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 1 }}>
                  Operating with transparency and accountability as we work toward 501(c)(3) nonprofit status
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
                  Growing our reach while maintaining the personal, heartfelt touch that makes each basket special
                </Typography>
              </li>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
