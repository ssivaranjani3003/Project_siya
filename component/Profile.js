// src/components/Profile.js
import React, { useState } from 'react';
import { 
    TextField, 
    Button, 
    Box, 
    Typography, 
    Snackbar, 
    Alert, 
    Card, 
    CardContent, 
    CardActions, 
    CircularProgress 
} from '@mui/material';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        picture: null,
    });
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setProfile({ ...profile, [name]: type === 'file' ? files[0] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate email and phone
        if (!validateEmail(profile.email)) {
            setSnackbarMessage('Invalid email format');
            setSnackbarOpen(true);
            return;
        }
        if (!validatePhone(profile.phone)) {
            setSnackbarMessage('Invalid phone number');
            setSnackbarOpen(true);
            return;
        }

        setLoading(true);
        // Simulate saving profile logic here (e.g., send data to an API)
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        console.log('Profile saved:', profile);
        setLoading(false);
        setSnackbarMessage('Profile saved successfully');
        setSnackbarOpen(true);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; 
        return phoneRegex.test(phone) && phone !== '0000000000';
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit} 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            sx={{ padding: 2 }} 
        >
            <Card sx={{ maxWidth: 400, mb: 3 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom align="center">Profile Management</Typography>
                    <TextField
                        name="name"
                        label="Name"
                        value={profile.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        size="small"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        value={profile.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        type="email"
                        size="small"
                    />
                    <TextField
                        name="phone"
                        label="Phone"
                        value={profile.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        type="tel"
                        size="small"
                    />
                    <input 
                        accept="image/*"
                        style={{ display: 'none' }} 
                        id="profile-picture" 
                        type="file" 
                        name="picture"
                        onChange={handleChange}
                    />
                    <label htmlFor="profile-picture">
                        <Button variant="outlined" component="span" sx={{ mt: 2 }}>
                            Upload Profile Picture
                        </Button>
                    </label>
                </CardContent>
                <CardActions>
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        {loading ? <CircularProgress size={24} /> : 'Save Profile'}
                    </Button>
                </CardActions>
            </Card>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarMessage.includes('Invalid') ? 'error' : 'success'}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Profile;
