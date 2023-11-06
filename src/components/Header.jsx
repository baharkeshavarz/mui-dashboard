import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../theme';

const Header = ({title, subtitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)  
  return (
    <Box p={2}>
        <Typography 
             variant="h3" 
             fontWeight="bold"
             fontSize={"2rem"}
             color={colors.grey[100]}
             >
            {title} 
        </Typography>

        <Typography 
            variant="h5"
            color={colors.greenAccent[400]}
            sx= {{ marginTop: "10px"}}
         >
          {subtitle}
        </Typography>
    </Box>
  )
}

export default Header;
