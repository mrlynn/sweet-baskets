'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import SectionHeading from '@/components/SectionHeading';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface HoursEntry {
  id: number;
  date: string;
  activity: string;
  hours: number;
  status: 'pending' | 'approved';
}

export default function VolunteerHoursTracking() {
  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [hours, setHours] = useState('');
  const [entries, setEntries] = useState<HoursEntry[]>([
    { id: 1, date: '2025-01-15', activity: 'Basket Assembly', hours: 3, status: 'approved' },
    { id: 2, date: '2025-01-20', activity: 'Delivery', hours: 2, status: 'approved' },
    { id: 3, date: '2025-01-25', activity: 'Event Coordination', hours: 4, status: 'pending' },
  ]);

  const totalHours = entries.reduce((sum, entry) => sum + entry.hours, 0);
  const approvedHours = entries.filter(e => e.status === 'approved').reduce((sum, entry) => sum + entry.hours, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: HoursEntry = {
      id: entries.length + 1,
      date,
      activity,
      hours: parseFloat(hours),
      status: 'pending',
    };
    setEntries([newEntry, ...entries]);
    setDate('');
    setActivity('');
    setHours('');
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
            <AccessTimeIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Volunteer Hours Tracking
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Log and track your volunteer contributions
            </Typography>
          </Container>
        </Box>

        {/* Stats */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6 }}>
            <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' }, flex: { sm: '1 1 0' } }}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                <AccessTimeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  {totalHours}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Total Hours Logged
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' }, flex: { sm: '1 1 0' } }}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                <TrendingUpIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                  {approvedHours}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Approved Hours
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' }, flex: { sm: '1 1 0' } }}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                <EmojiEventsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  {entries.length}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Activities Completed
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* Log Hours Form */}
          <SectionHeading mb={4}>Log Your Hours</SectionHeading>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, mb: 6 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              <TextField
                required
                type="date"
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' } }}
              />
              <TextField
                required
                select
                label="Activity Type"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' } }}
              >
                <MenuItem value="Basket Assembly">Basket Assembly</MenuItem>
                <MenuItem value="Delivery">Delivery</MenuItem>
                <MenuItem value="Event Coordination">Event Coordination</MenuItem>
                <MenuItem value="Outreach">Outreach</MenuItem>
                <MenuItem value="Administrative">Administrative</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              <TextField
                required
                type="number"
                label="Hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                inputProps={{ min: 0.5, step: 0.5 }}
                sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' } }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ flex: '1 1 100%', py: 1.5 }}
              >
                Log Hours
              </Button>
            </Box>
          </Paper>

          {/* Hours History */}
          <SectionHeading mb={4}>Your Hours History</SectionHeading>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.light' }}>
                  <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Activity</TableCell>
                  <TableCell sx={{ fontWeight: 700 }} align="right">Hours</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id} hover>
                    <TableCell>{new Date(entry.date).toLocaleDateString()}</TableCell>
                    <TableCell>{entry.activity}</TableCell>
                    <TableCell align="right">{entry.hours}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: entry.status === 'approved' ? 'success.light' : 'warning.light',
                          color: entry.status === 'approved' ? 'success.dark' : 'warning.dark',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                        }}
                      >
                        {entry.status === 'approved' ? 'Approved' : 'Pending'}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
