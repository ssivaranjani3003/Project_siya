// src/component/UpcomingEventsSection.js
import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const UpcomingEventsSection = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Upcoming Events</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Midterm Exams: October 15, 2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Project Submission Deadline: October 20, 2024" />
        </ListItem>
      </List>
    </Box>
  );
};

export default UpcomingEventsSection;
