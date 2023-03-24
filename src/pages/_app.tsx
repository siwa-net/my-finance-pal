import { config } from '@fortawesome/fontawesome-svg-core';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
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
            <main className={inter.className}>
                <Navigation />
                <section className={appStyles.ContentWrapper}>
                    <Component {...pageProps} />
                </section>
            </main>
        </QueryClientProvider>
    );
}
