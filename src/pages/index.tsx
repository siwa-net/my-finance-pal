import Head from 'next/head';
import React from 'react';

import { BudgetList } from '../components/BudgetList/BudgetList';

export default function Home() {
    return (
        <>
            <Head>
                <title>My Finance Pal</title>
                <meta name="description" content="Demo application for a budget planner" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BudgetList />
        </>
    );
}
