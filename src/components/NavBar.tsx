'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavBarLinks from '../types/types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar: React.FC = () => {
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {NavBarLinks.map((link) => {
                        const IconComponent = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Button
                                key={link.name}
                                component={Link}
                                href={link.href}
                                sx={{
                                    backgroundColor: isActive ? 'var(--background)' : 'transparent',
                                    color: isActive ? 'var(--foreground)' : 'inherit',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '25px',
                                    padding: { xs: '8px 12px', sm: '4px 18px' },
                                    textTransform: 'none',
                                    fontSize: '0.85rem',
                                    fontWeight: isActive ? 600 : 400,
                                    fontFamily: 'var(--font-geist-sans)',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.3s ease',
                                    minWidth: 'auto',

                                    '&:hover': {
                                        backgroundColor: isActive
                                            ? 'var(--background)'
                                            : 'rgba(255, 255, 255, 0.1)',
                                    }
                                }}
                            >
                                <IconComponent
                                    sx={{
                                        fontSize: '1.2rem',
                                        mr: { xs: 0, sm: 1 }
                                    }}
                                />

                                <Box component="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    {link.name}
                                </Box>
                            </Button>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;