import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function SignUpPage() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        registerNo: '',
        gender: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({
        name: '',
        age: '',
        registerNo: '',
        gender: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            name: formData.name ? '' : 'Name is required',
            age: formData.age ? '' : 'Age is required',
            registerNo: formData.registerNo ? '' : 'Register Number is required',
            gender: formData.gender ? '' : 'Gender is required',
            mobileNumber: formData.mobileNumber ? '' : 'Mobile Number is required',
            email: formData.email ? '' : 'Email is required',
            password: formData.password ? '' : 'Password is required',
            confirmPassword: formData.confirmPassword ? '' : 'Confirm Password is required',
        };

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }

        if (formData.password && formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error)) {
            return; // If there are errors, do not proceed
        }

        alert('Sign up is successful!'); // Show popup message

        // Reset form fields
        setFormData({
            name: '',
            age: '',
            registerNo: '',
            gender: '',
            mobileNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsAccepted: false,
        });
        setErrors({});
    };

    const handleSocialLogin = (provider) => {
        if (provider === 'Facebook') {
            window.location.href = 'https://www.facebook.com/login/';
        } else if (provider === 'Google') {
            window.location.href = 'https://accounts.google.com/signin';
        }
    };

    return (
        <div style={styles.background}>
            <Box component="section" style={styles.box}>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" style={styles.typo}>
                        Signup
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="name"
                            label="Name"
                            style={styles.textField}
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            autoComplete="off"
                        />
                        <br /><br />
                        <TextField
                            id="age"
                            label="Age"
                            style={styles.textField}
                            value={formData.age}
                            onChange={handleChange}
                            error={!!errors.age}
                            helperText={errors.age}
                            autoComplete="off"
                        />
                        <br /><br />
                        <TextField
                            id="gender"
                            label="Gender"
                            style={styles.textField}
                            value={formData.gender}
                            onChange={handleChange}
                            error={!!errors.gender}
                            helperText={errors.gender}
                            autoComplete="off"
                        />
                        <br /><br />
                        <TextField
                            id="registerNo"
                            label="Register Number"
                            style={styles.textField}
                            value={formData.registerNo}
                            onChange={handleChange}
                            error={!!errors.registerNo}
                            helperText={errors.registerNo}
                            autoComplete="off"
                        />
                        <br /><br />
                        <TextField
                            id="mobileNumber"
                            label="Mobile Number"
                            style={styles.textField}
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            error={!!errors.mobileNumber}
                            helperText={errors.mobileNumber}
                            autoComplete="off"
                        />
                        <br /><br />
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            style={styles.textField}
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            autoComplete="off"
                        />
                        <br /><br />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            style={styles.textField}
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            autoComplete="off"
                        />
                        <br /><br />
                        <TextField
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            style={styles.textField}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            autoComplete="off"
                        />
                        <br /><br />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                />
                            }
                            label="I agree to the terms and conditions"
                        />
                        <br /><br />
                        <Button type="submit" variant="contained" color="primary" style={styles.submitButton}>
                            Sign Up
                        </Button>
                    </form>

                    {/* Social login buttons */}
                    <Box sx={{ mt: 3 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FacebookIcon />}
                            fullWidth
                            onClick={() => handleSocialLogin('Facebook')}
                            sx={{ mb: 1 }}
                        >
                            Sign Up with Facebook
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<GoogleIcon />}
                            fullWidth
                            onClick={() => handleSocialLogin('Google')}
                        >
                            Sign Up with Google
                        </Button>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

const styles = {
    background: {
        backgroundImage: 'url("your-background-image-url.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    textField: {
        width: '420px',
    },
    typo: {
        color: 'black',
        paddingBottom: '30px',
    },
    submitButton: {
        width: '420px',
    },
};

export default SignUpPage;
