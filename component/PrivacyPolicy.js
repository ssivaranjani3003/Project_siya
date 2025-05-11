import React from 'react';
import { Box, Typography, Container, Divider, Link } from '@mui/material';
import Footer from './Footer';

function PrivacyPolicy() {
    return (
        <div>
            <Container maxWidth="md">
                <Box 
                    sx={{ 
                        mt: 8, mb: 8, px: { xs: 3, sm: 6 }, py: 6, 
                        bgcolor: '#f4f4f4', borderRadius: 2, 
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
                    }}
                >
                    {/* Title */}
                    <Typography 
                        variant="h4" 
                        align="center" 
                        sx={{ fontWeight: 600, color: '#212121', mb: 4 }}
                    >
                        Privacy Policy
                    </Typography>

                    {/* Introduction */}
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555' }}>
                        At [Your Company], we respect your privacy and are committed to protecting the personal information you provide. This Privacy Policy outlines our practices regarding the collection, use, and protection of your data.
                    </Typography>

                    <Divider sx={{ my: 4, borderColor: '#ccc' }} />

                    {/* Information We Collect */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Information We Collect
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555' }}>
                        We may collect personal details like your name, email, and contact information when you register or interact with our website. We also track data such as browser type, IP address, and cookies for better service.
                    </Typography>

                    <Divider sx={{ my: 4, borderColor: '#ccc' }} />

                    {/* How We Use Your Information */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        How We Use Your Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555' }}>
                        Your information is used to improve our services, enhance your experience, and communicate updates. We do not share your data with third parties unless required by law.
                    </Typography>

                    <Divider sx={{ my: 4, borderColor: '#ccc' }} />

                    {/* Cookies */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Cookies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555' }}>
                        Our site may use cookies to personalize your experience. You can choose to disable cookies in your browser settings, though this may affect your user experience.
                    </Typography>

                    <Divider sx={{ my: 4, borderColor: '#ccc' }} />

                    {/* Data Security */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Data Security
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555' }}>
                        We implement security measures to protect your data, but please note that no transmission method over the internet is 100% secure.
                    </Typography>

                    <Divider sx={{ my: 4, borderColor: '#ccc' }} />

                    {/* Policy Changes */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Changes to This Policy
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555' }}>
                        We may update this policy occasionally. Please review this page periodically for changes.
                    </Typography>

                    <Divider sx={{ my: 4, borderColor: '#ccc' }} />

                    {/* Contact Us */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555' }}>
                        If you have questions or concerns about this policy, reach us at: 
                        <Link href="mailto:privacy@yourwebsite.com" sx={{ ml: 1, color: '#1a73e8' }}>
                            privacy@yourwebsite.com
                        </Link>
                    </Typography>
                </Box>
            </Container>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
