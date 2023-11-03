import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { tokens } from '../../theme';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          border: "0 !important",
        },
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menuitem-root": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menuitem-root:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menuitem-root.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
         <Menu iconShape="square">
            <MenuItem>
                {!isCollapsed && (
                  <Box 
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        ml: "15px",
                    }}>
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
            </MenuItem>
         
            {!isCollapsed && (
              <Box mb="25px">
                 <Box display="flex" justifyContent="center" alignItems="center">
                    <img 
                       alt="profile user"
                       width="100px"
                       height="100px"
                       src="/assets/3.jpg"
                       style={{ cursor: "pointer", borderRadius: "100%" }}
                    />
                 </Box>
               
                <Box textAlign="center">
                    <Typography 
                        variant="h4"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        m="10px 0 0 0"
                    >
                        Bahar Ksh
                    </Typography>

                    <Typography 
                         variant="h6"
                         color={colors.greenAccent[500]}
                        >
                      VP Fancy Admin
                    </Typography>
                </Box>
              </Box>
            )}
             
             { /* User Menus */ }

             <Box paddiingLeft={isCollapsed ? undefined : "10%"}>
               <MenuItem>
                  First
               </MenuItem>
               <MenuItem>
                  Second
               </MenuItem>
               <MenuItem>
                  Third
               </MenuItem>
             </Box>
       
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar