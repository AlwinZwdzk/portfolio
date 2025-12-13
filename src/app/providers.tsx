'use client';

import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            {/* On change defaultTheme de "system" à "dark" */}
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}