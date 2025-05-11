// src/component/CourseMaterialsSection.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const CourseMaterialsSection = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Course Materials</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Lecture 1: Introduction to Data Science" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Lecture 2: Statistics Basics" />
        </ListItem>
        {/* Add more materials */}
      </List>
    </Box>
  );
};

export default CourseMaterialsSection;
