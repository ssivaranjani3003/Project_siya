// src/component/StatisticsSection.js
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const StatisticsSection = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Statistics</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Students</Typography>
            <Typography variant="h4">250</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6">Average CGPA</Typography>
            <Typography variant="h4">3.4</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6">Courses Offered</Typography>
            <Typography variant="h4">15</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsSection;
