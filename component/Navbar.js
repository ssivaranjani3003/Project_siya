import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'; // Optional: Add styling

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true); // Open the drawer when the menu icon is clicked
    };

    const handleDrawerClose = () => {
        setOpen(false); // Close the drawer
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {/* Hamburger Menu Icon */}
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/StudentDetails">Student Details</Link></li>
                        <li><Link to="/Profile">Profile</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </Toolbar>
            </AppBar>
            {/* Drawer for Hamburger Menu */}
            <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
                <List>
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemText primary="Menu" />
                    </ListItem>
                    <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/signup" onClick={handleDrawerClose}>
                        <ListItemText primary="Sign Up" />
                    </ListItem>
                    <ListItem button component={Link} to="/Profile" onClick={handleDrawerClose}>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/Courses" onClick={handleDrawerClose}>
                        <ListItemText primary="Courses" />
                    </ListItem>
                    <ListItem button component={Link} to="/cgpa" onClick={handleDrawerClose}>
                        <ListItemText primary="CGPA" />
                    </ListItem>
                    <ListItem button component={Link} to="/Payment" onClick={handleDrawerClose}>
                        <ListItemText primary="Payment" />
                    </ListItem>
                    <ListItem button component={Link} to="/Feedback" onClick={handleDrawerClose}>
                        <ListItemText primary="Feedback" />
                    </ListItem>
                    <ListItem button component={Link} to="/About" onClick={handleDrawerClose}>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
