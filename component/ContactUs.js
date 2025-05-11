import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate Name
    if (!/^[A-Za-z\s]+$/.test(name)) {
      triggerSnackbar("Name can only contain alphabets.", "error");
      return;
    }

    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email)) {
      triggerSnackbar("Please enter a valid email address.", "error");
      return;
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(phone) || phone === "0000000000") {
      triggerSnackbar("Please enter a valid phone number.", "error");
      return;
    }

    console.log("Message sent:", { name, email, phone, subject, message });
    triggerSnackbar("Message sent!", "success");
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const triggerSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: "#3f51b5" }}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 5 } }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 5 } }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 5 } }}
        />
        <FormControl fullWidth margin="normal" sx={{ "& .MuiSelect-root": { borderRadius: 5 } }}>
          <InputLabel id="subject-label">Subject</InputLabel>
          <Select
            labelId="subject-label"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <MenuItem value="General Inquiry">General Inquiry</MenuItem>
            <MenuItem value="Support">Support</MenuItem>
            <MenuItem value="Feedback">Feedback</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 5 } }}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "#3f51b5", '&:hover': { bgcolor: '#303f9f' } }}
          >
            Send Message
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={clearForm}
            sx={{ borderColor: "#3f51b5", '&:hover': { bgcolor: "#e3f2fd" } }}
          >
            Clear
          </Button>
        </Box>
      </form>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
