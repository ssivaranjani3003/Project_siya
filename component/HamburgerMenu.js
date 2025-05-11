// src/component/HamburgerMenu.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setOpen(true); // Open the drawer directly when "Menu" is clicked
    };

    const handleDrawerClose = () => {
        setOpen(false); // Close the menu when user clicks outside or navigates
    };

    const handleMenuItemClick = (path) => {
        navigate(path);
        setOpen(false); // Navigate and close the drawer after navigation
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" onClick={handleMenuClick} style={{ cursor: 'pointer' }}>
                        Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
                <List>
                    <ListItem button onClick={() => handleMenuItemClick('/')}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => handleMenuItemClick('/signup')}>
                        <ListItemText primary="Sign Up" />
                    </ListItem>
                    <ListItem button onClick={() => handleMenuItemClick('/cgpa')}>
                        <ListItemText primary="CGPA" />
                    </ListItem>
                    <ListItem button onClick={() => handleMenuItemClick('/Student Details')}>
                        <ListItemText primary="Student Details" />
                    </ListItem>
                    <ListItem button onClick={() => handleMenuItemClick('/Courses')}>
                        <ListItemText primary="Courses" />
                    </ListItem>
                    
                    {/* Add more menu items if needed */}
                </List>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;
