'use client';

import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { getSession } from 'next-auth/react'; // Correct import for getSession
import { Session } from 'next-auth'; // Correct import for Session type
import SessionProviderWrapper from './SessionProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, setSession] = useState<Session | null>(null); // State to hold the session

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();

    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/15c33e8a67.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <html lang='en' className='bg-zinc-800'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={inter.className}>
        <SessionProviderWrapper session={session}>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
