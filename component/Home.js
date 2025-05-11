import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="flex-start" // Changed to flex-start to align items at the top
        height="100vh"
        textAlign="center"
        sx={{
          bgcolor: "#f5f5f5",
          p: 3,
          backgroundImage: 'url("https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2020/04/31185614/12-Benefits-of-Student-Database-Management-System.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Box mt={3}> {/* Added margin to create space from the top */}
          <Typography variant="h3" gutterBottom>
            Welcome to the Student Information Management System
          </Typography>
          <Typography variant="h5">
            Here you can manage student details, calculate CGPA, and much more.
          </Typography>
        </Box>

        
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
