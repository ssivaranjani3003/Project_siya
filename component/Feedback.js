import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem, Rating, Checkbox, FormControlLabel } from '@mui/material';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [subscribe, setSubscribe] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === '') {
      triggerSnackbar('Feedback cannot be empty', 'error');
      return;
    }
    
    console.log('Feedback submitted:', { name, email, category, rating, feedback, subscribe });
    triggerSnackbar('Feedback submitted successfully!', 'success');
    clearForm();
  };

  const clearForm = () => {
    setFeedback('');
    setName('');
    setEmail('');
    setCategory('');
    setRating(0);
    setSubscribe(false);
  };

  const triggerSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: 3,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 3, color: '#3f51b5', textAlign: 'center' }}>
        Feedback
      </Typography>

      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: 5 },
        }}
      />
      <TextField
        label="Your Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: 5 },
        }}
      />
      
      <FormControl fullWidth margin="normal">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": { borderRadius: 5 },
          }}
        >
          <MenuItem value="Compliment">Compliment</MenuItem>
          <MenuItem value="Complaint">Complaint</MenuItem>
          <MenuItem value="Suggestion">Suggestion</MenuItem>
        </Select>
      </FormControl>

      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Your feedback"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        inputProps={{ maxLength: 200 }}
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: 5 },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            color="primary"
          />
        }
        label="Subscribe for follow-up"
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        sx={{ marginTop: 2, borderRadius: 5, '&:hover': { bgcolor: '#303f9f' } }}
      >
        Submit
      </Button>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeedbackSection;
