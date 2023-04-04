import { config } from '@fortawesome/fontawesome-svg-core';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from 'next/font/google';
import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

import { Navigation } from '../components/Navigation/Navigation';
import appStyles from '../styles/app.module.scss';

import type { AppProps } from 'next/app';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <main className={inter.className}>
                    <Navigation />
                    <section className={appStyles.ContentWrapper}>
                        <Component {...pageProps} />
                    </section>
                </main>
                <ReactQueryDevtools />
            </LocalizationProvider>
        </QueryClientProvider>
    );
}
