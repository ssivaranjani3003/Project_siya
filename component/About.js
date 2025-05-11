import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
        minHeight="80vh" // Adjusted to ensure content is vertically centered
        textAlign="center"
        sx={{ 
          bgcolor: '#f9f9f9', 
          p: { xs: 2, md: 6 }, // Padding adjusts based on screen size
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
          maxWidth: '800px',
          mx: 'auto',
          mt: { xs: 4, md: 6 }
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Divider sx={{ width: '50px', mb: 3, bgcolor: '#000' }} />

        <Typography variant="h6" sx={{ lineHeight: 1.6, mb: 3 }}>
          Welcome to the <strong>Student Information Management System</strong>! Our platform is designed to help educational institutions 
          manage and maintain their student data efficiently and accurately.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary', maxWidth: '600px' }}>
          With features like student profile management, CGPA calculation, real-time data access, and secure storage, 
          we aim to streamline the student management process for both institutions and students.
        </Typography>
      </Box>

      <Footer />
    </div>
  );
}

export default About;
