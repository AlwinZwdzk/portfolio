'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { person, social } from '@/resources/content';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                py: 4,
                mt: 'auto',
                borderTop: '1px solid',
                borderColor: 'divider'
            }}
            className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800"
        >
            <div className="max-w-3xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">

                <Typography
                    variant="body2"
                    className="text-zinc-600 dark:text-zinc-400 font-medium"
                >
                    © {currentYear} | {person.name}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    {social.map((item) => {
                        const IconComponent = item.icon;

                        return (
                            <IconButton
                                key={item.name}
                                component="a"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                size="small"
                                sx={{
                                    color: 'var(--foreground)',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        color: 'primary.main',
                                        backgroundColor: 'rgba(255,255,255, 0.1)'
                                    }
                                }}
                            >
                                <IconComponent fontSize="small" />
                            </IconButton>
                        );
                    })}
                </Box>
            </div>
        </Box>
    );
};

export default Footer;