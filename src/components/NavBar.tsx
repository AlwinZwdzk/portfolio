'use client';

import React from 'react';
import Link from 'next/link';
import NavBarLinks from '../types/types';

// Import des composants Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const NavBar: React.FC = () => {
    return (
        <AppBar
            position="static"
            elevation={1}
            // Utilisation des variables CSS natives définies dans globals.css
            // On supprime la prop 'color="default"' pour laisser nos variables gérer la couleur
            sx={{
                backgroundColor: 'var(--navbar-bg)',
                color: 'var(--navbar-text)'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* LOGO ou NOM DU PORTFOLIO à gauche */}
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit', // Hérite de la couleur de l'AppBar (donc --navbar-text)
                            textDecoration: 'none',
                        }}
                    >
                        PORTFOLIO
                    </Typography>

                    {/* Zone de navigation (Les liens) */}
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        {NavBarLinks.map((link) => (
                            <Button
                                key={link.name}
                                component={Link}
                                href={link.href}
                                // On force l'héritage de couleur ici aussi
                                sx={{ my: 2, color: 'inherit', display: 'block' }}
                            >
                                {link.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;