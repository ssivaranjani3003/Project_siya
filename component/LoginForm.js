import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import './login.css';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Email Address is required');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password (only for login)
    if (!forgotPassword && !password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!forgotPassword && password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      if (forgotPassword) {
        alert('Password reset link has been sent to your email!');
      } else {
        alert('Login successful!');
      }
    }
  };

  const toggleForm = () => {
    setForgotPassword((prev) => !prev);
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Box
        component="section"
        style={{
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#ffffff',
          transition: 'box-shadow 0.3s',
        }}
      >
        <Typography
          variant="h4"
          style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}
        >
          {forgotPassword ? 'Forgot Password' : 'Login'}
        </Typography>
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={!!emailError}
          helperText={emailError}
          margin="normal"
        />
        {!forgotPassword && (
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            error={!!passwordError}
            helperText={passwordError}
            margin="normal"
          />
        )}
        <Button
          variant="contained"
          style={{
            width: '100%',
            marginTop: '20px',
            backgroundColor: '#3f51b5',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
          onClick={handleSubmit}
        >
          {forgotPassword ? 'Reset Password' : 'Login'}
        </Button>
        <Link
          href="#"
          onClick={toggleForm}
          style={{
            marginTop: '15px',
            display: 'block',
            textAlign: 'center',
            color: '#3f51b5',
            textDecoration: 'underline',
            transition: 'color 0.2s',
            '&:hover': {
              color: '#0056b3',
            },
          }}
        >
          {forgotPassword ? 'Back to Login' : 'Forgot Password?'}
        </Link>
      </Box>
    </Container>
  );
}

export default LoginForm;
