'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';

const ThemeToggle: React.FC = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Évite le flash incorrect au chargement
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '1.5rem', // Même hauteur que la NavBar
                right: { xs: '1.5rem', md: '2rem' }, // Un peu plus de marge sur grands écrans
                zIndex: 1200, // Au-dessus du reste

                // Style cohérent avec la NavBar (Glassmorphism)
                backgroundColor: 'var(--navbar-bg)',
                color: 'var(--navbar-text)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%', // Rond parfait pour un seul bouton
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
            }}
        >
            <IconButton
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                size="medium"
                sx={{
                    color: 'inherit',
                    padding: '10px',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'rotate(180deg)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                }}
                aria-label="Changer le thème"
            >
                {resolvedTheme === 'dark' ? (
                    <LightModeIcon fontSize="small" />
                ) : (
                    <DarkModeIcon fontSize="small" />
                )}
            </IconButton>
        </Box>
    );
};

export default ThemeToggle;