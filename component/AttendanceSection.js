// src/component/AttendanceSection.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const AttendanceSection = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Attendance</Typography>
      <List>
        <ListItem>
          <ListItemText primary="John Doe - 95%" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Jane Smith - 85%" />
        </ListItem>
        {/* Add more students */}
      </List>
    </Box>
  );
};

export default AttendanceSection;
