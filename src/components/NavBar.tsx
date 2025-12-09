'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavBarLinks from '../types/types';

// Import des composants Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar: React.FC = () => {
    // Permet de savoir sur quelle page on se trouve
    const pathname = usePathname();

    return (
        <AppBar
            position="fixed"
            elevation={3}
            sx={{
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'fit-content',
                maxWidth: '95vw',
                borderRadius: '50px',
                backgroundColor: 'var(--navbar-bg)',
                color: 'var(--navbar-text)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <Toolbar
                sx={{
                    px: '1rem !important',
                    minHeight: '48px !important',
                    gap: 1
                }}
            >

                {/* LIENS */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {NavBarLinks.map((link) => {
                        const IconComponent = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Button
                                key={link.name}
                                component={Link}
                                href={link.href}
                                startIcon={<IconComponent style={{ fontSize: '1.1rem' }} />}
                                sx={{
                                    backgroundColor: isActive ? 'var(--background)' : 'transparent',
                                    color: isActive ? 'var(--foreground)' : 'inherit',

                                    display: 'flex',
                                    borderRadius: '25px',
                                    padding: '4px 18px',
                                    textTransform: 'none',
                                    fontSize: '0.85rem',
                                    fontWeight: isActive ? 600 : 400,
                                    fontFamily: 'var(--font-geist-sans)',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.3s ease',

                                    '&:hover': {
                                        backgroundColor: isActive
                                            ? 'var(--background)'
                                            : 'rgba(255, 255, 255, 0.1)',
                                    }
                                }}
                            >
                                {link.name}
                            </Button>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;