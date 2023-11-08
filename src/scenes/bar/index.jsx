import React from 'react'
import BarChart from '../../components/BarChart'
import { Box } from '@mui/material'
import Header from '../../components/Header';

export const Bar = () => {
  return (
    <Box m="20px">
        <Header
          title="Calendar"
          subtitle="Full Calendar Interactive Page"
        />

        <Box height="75vh">
           <BarChart/>
        </Box>
        <BarChart/>
    </Box>
  )
}
