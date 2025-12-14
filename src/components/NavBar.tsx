'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navBarLinks } from '@/resources/content';
import { useTheme } from 'next-themes';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

const NavBar: React.FC = () => {
    const pathname = usePathname();

    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Box
                // Blur effect behind the navbar
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6.5rem',
                    zIndex: 100,
                    pointerEvents: 'none',
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(8px)',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                }}
            />
            <AppBar
                position="fixed"
                elevation={3}
                sx={{
                    top: '1rem',
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
                        {navBarLinks.map((link) => {
                            const IconComponent = link.icon;
                            const isActive = pathname === link.href;

                            return (
                                <Button
                                    key={link.name}
                                    component={Link}
                                    href={link.href}
                                    sx={{
                                        backgroundColor: isActive ? 'var(--navbar-active-bg)' : 'transparent',
                                        color: isActive ? 'var(--foreground)' : 'inherit',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '25px',
                                        padding: { xs: '4px 12px', sm: '4px 18px' },
                                        textTransform: 'none',
                                        fontSize: '0.85rem',
                                        fontWeight: isActive ? 600 : 400,
                                        fontFamily: 'var(--font-geist-sans)',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s ease',

                                        '&:hover': {
                                            backgroundColor: isActive
                                                ? 'var(--navbar-active-bg)'
                                                : 'rgba(128, 128, 128, 0.1)',
                                        }
                                    }}
                                >
                                    <IconComponent
                                        sx={{
                                            fontSize: '1rem',
                                            mr: { xs: 0, sm: 1 }
                                        }}
                                    />

                                    <Box component="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        {link.name}
                                    </Box>
                                </Button>
                            );
                        })}

                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', ml: 0.5 }}>

                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    height: 24,
                                    alignSelf: 'center',
                                    borderColor: 'var(--navbar-text)',
                                    opacity: 0.3,
                                    mx: 0.5
                                }}
                            />

                            <IconButton
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                size="small"
                                sx={{
                                    color: 'inherit',
                                    padding: '18px',
                                    '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.1)' }
                                }}
                                aria-label="Changer le thème"
                            >
                                {mounted && (resolvedTheme === 'dark' ? (
                                    <LightModeIcon sx={{ fontSize: '1.1rem' }} />
                                ) : (
                                    <DarkModeIcon sx={{ fontSize: '1.1rem' }} />
                                ))}
                            </IconButton>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;