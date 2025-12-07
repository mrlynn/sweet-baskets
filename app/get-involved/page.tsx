'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BasketWeavePattern from '@/components/BasketWeavePattern';
import SectionHeading from '@/components/SectionHeading';
import SkipLink from '@/components/SkipLink';
import Link from 'next/link';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BusinessIcon from '@mui/icons-material/Business';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Paper from '@mui/material/Paper';

export default function GetInvolvedPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <Box id="main-content" component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
              Get Involved
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Join us in spreading kindness and comfort
            </Typography>
          </Container>
        </Box>

        {/* Introduction */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            Sweet Baskets thrives because of the generosity and dedication of people like you. Whether you have time to volunteer, items to donate, or connections to share, there are many ways to make a meaningful impact in our community.
          </Typography>
        </Container>

        {/* Why We Need You */}
        <Box sx={{ bgcolor: 'background.default', py: 8, position: 'relative', overflow: 'hidden' }}>
          <BasketWeavePattern opacity={0.04} />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <SectionHeading subtitle="Sweet Baskets is growing, and we need passionate volunteers to help us reach more people in need.">
              Why We Need You
            </SectionHeading>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 6 }}>
              {/* The Need */}
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: 'white',
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                    The Need is Real
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Thousands of seniors and children in our community experience isolation and could benefit from the comfort of a care basket.
                  </Typography>
                </Paper>
              </Box>

              {/* Your Impact */}
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: 'white',
                  }}
                >
                  <GroupsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                    Your Time Multiplies
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Every hour you volunteer helps us assemble and deliver multiple baskets, creating ripples of joy throughout the community.
                  </Typography>
                </Paper>
              </Box>

              {/* Build Community */}
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: 'white',
                  }}
                >
                  <EmojiPeopleIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                    You'll Feel Purpose
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Volunteering isn't just about giving—it's about connection, purpose, and being part of something meaningful.
                  </Typography>
                </Paper>
              </Box>
            </Box>

            {/* Volunteer Testimonial */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'primary.light',
                borderLeft: '4px solid',
                borderColor: 'secondary.main',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  color: 'primary.dark',
                  mb: 2,
                }}
              >
                "I started volunteering with Sweet Baskets to fill my free time. What I found was so much more—a community of caring people, meaningful work, and the chance to see firsthand how small acts of kindness transform lives."
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.dark', fontWeight: 600 }}>
                — David M., Volunteer since 2024
              </Typography>
            </Paper>
          </Container>
        </Box>

        {/* Ways to Help */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <SectionHeading>Ways to Help</SectionHeading>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {/* Volunteer */}
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)' },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <VolunteerActivismIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      Volunteer Your Time
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      Help us assemble baskets, organize donation drives, or deliver baskets to recipients. Every hour you give makes a difference.
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      Sign Up to Volunteer
                    </Button>
                  </CardContent>
                </Card>
              </Box>

              {/* Host a Basket Drive */}
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)' },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'secondary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <CardGiftcardIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      Host a Basket Drive
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      Organize a collection drive at your school, workplace, or community group. We'll provide everything you need to get started.
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    >
                      Start a Drive
                    </Button>
                  </CardContent>
                </Card>
              </Box>

              {/* Partner with Your Facility */}
              <Box sx={{ width: { xs: "100%", md: "calc(33.333% - 21.33px)" }, flex: { md: "1 1 0" } }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)' },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mb: 3,
                      }}
                    >
                      <BusinessIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      Partner with Your Facility
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      Work at a hospital or nursing home? Help us connect with patients and residents who could benefit from our baskets.
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      Become a Partner
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* What Volunteers Do */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <SectionHeading mb={4}>What Volunteers Do</SectionHeading>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Basket Assembly
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Help sort donations and assemble care baskets at our regular packing events.
                </Typography>
              </Box>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Delivery
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Deliver completed baskets to hospitals, nursing homes, and homebound individuals.
                </Typography>
              </Box>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Outreach
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Help spread awareness about Sweet Baskets through social media and community events.
                </Typography>
              </Box>
            </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 16px)" }, flex: { sm: "1 1 0" } }}>
              <Box sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Coordination
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Assist with planning, logistics, and partnership development.
                </Typography>
              </Box>
            </Box>
            </Box>
        </Container>

        {/* Call to Action */}
        <Box
          sx={{
            bgcolor: 'secondary.main',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Ready to Make a Difference?
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, opacity: 0.95 }}>
              Contact us today to learn more about volunteer opportunities and how you can get involved.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'secondary.main',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              Contact Us
            </Button>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
