'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import SectionHeading from '@/components/SectionHeading';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function HospitalPartnerPortal() {
  const [facilityName, setFacilityName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [basketType, setBasketType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [requestDate, setRequestDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to submit request
    setSubmitted(true);
  };

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
            <LocalHospitalIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Hospital Partner Portal
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Request baskets and schedule deliveries for your facility
            </Typography>
          </Container>
        </Box>

        {/* Portal Features */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 8 }}>
            <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 21.33px)' }, flex: { md: '1 1 0' } }}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <InventoryIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Request Baskets
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Submit requests for care baskets based on your facility's needs
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 21.33px)' }, flex: { md: '1 1 0' } }}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <CalendarTodayIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Schedule Delivery
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Choose convenient pickup and delivery times
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 21.33px)' }, flex: { md: '1 1 0' } }}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <LocalHospitalIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Track Impact
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  View the impact of baskets delivered to your facility
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* Request Form */}
          <SectionHeading mb={4}>Request Care Baskets</SectionHeading>

          {submitted ? (
            <Paper elevation={3} sx={{ p: 5, textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
              <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
                Request Submitted Successfully!
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                Thank you for your request. Our team will review it and contact you within 2 business days to confirm details and schedule delivery.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </Paper>
          ) : (
            <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, maxWidth: '800px', mx: 'auto' }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h6" sx={{ mb: 3, color: 'primary.main' }}>
                  Facility Information
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
                  <TextField
                    fullWidth
                    required
                    label="Facility Name"
                    value={facilityName}
                    onChange={(e) => setFacilityName(e.target.value)}
                    sx={{ flex: '1 1 100%' }}
                  />
                  <TextField
                    required
                    label="Contact Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}
                  />
                  <TextField
                    required
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}
                  />
                  <TextField
                    required
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{ flex: '1 1 100%' }}
                  />
                </Box>

                <Typography variant="h6" sx={{ mb: 3, color: 'primary.main' }}>
                  Basket Request Details
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
                  <TextField
                    required
                    select
                    label="Basket Type"
                    value={basketType}
                    onChange={(e) => setBasketType(e.target.value)}
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}
                  >
                    <MenuItem value="children">Children's Hospital Baskets</MenuItem>
                    <MenuItem value="elderly">Elderly Care Baskets</MenuItem>
                    <MenuItem value="both">Both Types</MenuItem>
                  </TextField>
                  <TextField
                    required
                    type="number"
                    label="Quantity Needed"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    inputProps={{ min: 1 }}
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}
                  />
                  <TextField
                    required
                    type="date"
                    label="Request Date"
                    value={requestDate}
                    onChange={(e) => setRequestDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}
                  />
                  <TextField
                    required
                    type="date"
                    label="Preferred Delivery Date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Additional Notes or Special Requests"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    sx={{ flex: '1 1 100%' }}
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Submit Request
                </Button>
              </Box>
            </Paper>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
}
