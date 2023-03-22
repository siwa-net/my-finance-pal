import '../styles/globals.css';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import React from 'react';

import { Navigation } from '../components/Navigation/Navigation';

import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <main className={inter.className}>
                <Navigation />
                <Component {...pageProps} />
            </main>
        </QueryClientProvider>
    );
}
