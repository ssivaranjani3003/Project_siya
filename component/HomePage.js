import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LoginForm from './LoginForm';
import SignUpPage from './SignUpPage';
import SimpleDialog from './SimpleDialog'; 
import AboutPage from './AboutPage'; 
import ContactPage from './ContactPage'; // Import ContactPage
import Footer from './Footer';
function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(null); // null, 'login', or 'signup'
  const [simpleDialogOpen, setSimpleDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // manage the component state and side effects

  const handleOpenDialog = (type) => {
    setDialogOpen(type);
  };

  const handleCloseDialog = () => {
    setDialogOpen(null);
  };

  

  const handleCloseSimpleDialog = (value) => {
    setSimpleDialogOpen(false);
    setSelectedValue(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 2, paddingTop: '5px' }}>
              <ListItemButton component="a" href="#home" onClick={() => handlePageChange('home')}>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton component="a" href="#about" onClick={() => handlePageChange('about')}>
                <ListItemText primary="About Us" />
              </ListItemButton>
              <ListItemButton component="a" href="#contact" onClick={() => handlePageChange('contact')}>
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </Box>
            <Box style={{ paddingLeft: '500px' }}>
              <Button color="inherit" onClick={() => handleOpenDialog('login')}>Login</Button>
              <Button color="inherit" onClick={() => handleOpenDialog('signup')}>Sign up</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Render the AboutPage, ContactPage, or the main content based on currentPage */}
      {currentPage === 'home' && (
        <Box style={styles.con}>
          <h1 style={{ color: 'black', paddingLeft: '250px', textShadow: "3px 3px 4px black" }}>The best way to predict your future is to create it</h1>
        </Box>
      )}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Dialog for Login */}
      <Dialog open={dialogOpen === 'login'} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <LoginForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Signup */}
      <Dialog open={dialogOpen === 'signup'} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <SignUpPage />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Simple Dialog */}
      <SimpleDialog
        selectedValue={selectedValue}
        open={simpleDialogOpen}
        onClose={handleCloseSimpleDialog}
      />
      <Footer/>
    </div>
  );
}

const styles = {
  con: {
    backgroundColor: 'lightblue',
    color: 'black',
    borderRadius: '8px',
    height: '500px',
    marginTop: '20px',
    width: '1200px',
    display: 'flex',
    backgroundImage: 'url("https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2020/04/31185614/12-Benefits-of-Student-Database-Management-System.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
}

export default HomePage;
// navigation it enhances the user experience with the environment