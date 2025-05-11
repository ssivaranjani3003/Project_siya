import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#2a2a2a',
                color: '#ffffff',
                py: 4,
                px: 2,
                textAlign: 'center',
                mt: 'auto',
            }}
        >
            {/* Footer Links */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Home
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                        About
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Contact
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Privacy Policy
                    </Link>
                </Grid>
            </Grid>

            {/* Social Media Icons */}
            <Box sx={{ mt: 3 }}>
                <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                    <Facebook />
                </IconButton>
                <IconButton component="a" href="https://www.twitter.com" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                    <Twitter />
                </IconButton>
                <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                    <Instagram />
                </IconButton>
                <IconButton component="a" href="https://www.linkedin.com" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                    <LinkedIn />
                </IconButton>
            </Box>

            {/* Copyright Text */}
            <Typography variant="body2" sx={{ mt: 3, opacity: 0.8 }}>
                &copy; {new Date().getFullYear()} All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
