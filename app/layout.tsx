import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Sweet Baskets - Bringing Comfort Through Care",
    template: "%s | Sweet Baskets"
  },
  description: "Sweet Baskets brings comfort to children in hospitals and elderly individuals who are homebound or in nursing care through personalized care baskets.",
  keywords: ["nonprofit", "charity", "care baskets", "hospital", "elderly care", "volunteer", "donate", "senior care", "children's hospital", "nursing home", "community service"],
  authors: [{ name: "Sweet Baskets" }],
  creator: "Sweet Baskets",
  publisher: "Sweet Baskets",
  metadataBase: new URL('https://sweetbaskets.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sweet Baskets - Bringing Comfort Through Care",
    description: "Sweet Baskets brings comfort to children in hospitals and elderly individuals who are homebound or in nursing care through personalized care baskets.",
    url: 'https://sweetbaskets.org',
    siteName: 'Sweet Baskets',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/sweet-baskets-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sweet Baskets - Bringing comfort through care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweet Baskets - Bringing Comfort Through Care',
    description: 'Sweet Baskets brings comfort to children in hospitals and elderly individuals through personalized care baskets.',
    images: ['/sweet-baskets-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
