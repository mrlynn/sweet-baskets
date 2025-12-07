'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FAQPage() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'What is Sweet Baskets?',
      answer: 'Sweet Baskets is a nonprofit organization that creates and delivers personalized care baskets to children in hospitals and elderly individuals who are homebound or in nursing care. Our mission is to bring comfort, connection, and joy to those facing difficult circumstances.',
    },
    {
      question: 'How can I volunteer with Sweet Baskets?',
      answer: 'We welcome volunteers to help assemble baskets, organize donation drives, deliver baskets to recipients, and assist with outreach and coordination. Visit our Get Involved page or contact us at info@sweetbaskets.org to learn about current volunteer opportunities.',
    },
    {
      question: 'What items can I donate?',
      answer: 'For seniors, we accept blankets, socks, chapstick, lotion, and personal care products. For children, we accept age-appropriate toys, games, books, puzzles, and personal care items. Specific needs vary based on our current recipients. Contact us for a current list of needed items.',
    },
    {
      question: 'Are donations tax-deductible?',
      answer: 'Sweet Baskets is currently applying for 501(c)(3) nonprofit status. Once approved, donations may become tax-deductible. We will provide acknowledgment letters for all contributions and notify donors once our tax-exempt status is confirmed.',
    },
    {
      question: 'How do you select recipients for baskets?',
      answer: 'We partner with hospitals, nursing homes, and healthcare facilities to identify individuals who would benefit most from our care baskets. Our partners help us ensure baskets reach those experiencing medical challenges, isolation, or difficult circumstances.',
    },
    {
      question: 'Can I request a basket for someone I know?',
      answer: "Yes! If you know a child in the hospital or an elderly individual who could benefit from a Sweet Basket, please contact us at info@sweetbaskets.org with details. We'll do our best to accommodate requests based on our current capacity and resources.",
    },
    {
      question: 'How can my organization partner with Sweet Baskets?',
      answer: "We're always looking to partner with hospitals, nursing homes, assisted living facilities, schools, and corporate sponsors. Contact us at info@sweetbaskets.org to discuss partnership opportunities.",
    },
    {
      question: 'How can I host a basket drive?',
      answer: 'Hosting a basket drive is a great way to support Sweet Baskets! We can provide guidance, materials, and a list of needed items. Contact us to get started with organizing a drive at your school, workplace, or community group.',
    },
    {
      question: 'Where does Sweet Baskets operate?',
      answer: 'We are currently establishing our service area and building partnerships with local facilities. Contact us to learn more about our current reach and expansion plans.',
    },
    {
      question: 'How are donations used?',
      answer: 'Donations are used to purchase basket items, cover operational costs, expand our programs, and deliver care baskets to recipients. We are committed to transparency and using funds efficiently to maximize our impact.',
    },
  ];

  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.95,
              }}
            >
              Find answers to common questions about Sweet Baskets
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 8 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ mb: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>

        <Box
          sx={{
            bgcolor: 'background.default',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              Still Have Questions?
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, color: 'text.secondary' }}>
              We're here to help! Contact us and we'll get back to you as soon as possible.
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Email: <Link href="mailto:info@sweetbaskets.org" style={{ color: 'inherit' }}>info@sweetbaskets.org</Link>
            </Typography>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
