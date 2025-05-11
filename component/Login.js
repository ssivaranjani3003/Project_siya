import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic for login validation
    if (email === 'test@example.com' && password === 'password') {
      navigate('/dashboard'); // Redirect to dashboard on success
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4">Login</Typography>
      <Box component="form" onSubmit={handleSubmit} mt={2}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
