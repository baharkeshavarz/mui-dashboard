import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { tokens } from '../../theme';
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
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

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
       active={selected === title}
       style={{ color: colors.grey[100] }}
       onClick={() => setSelected(title)}
       icon={icon}
       >
       <Link to={to} >
         <Typography
               sx={{ color: "white"}}>
              {title}
         </Typography>
       </Link>
     </MenuItem>
  )
}

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
            { /* Logo and Menu Item */ }
            <MenuItem 
                   onClick={() => setIsCollapsed(!isCollapsed)}
                   icon={isCollapsed ? <MenuOutlinedIcon/> : undefined }
                   style={{
                      margin: "10px 0 20px 0",
                      color: colors.grey[100]
                   }}
                  >
                {!isCollapsed && (
                  <Box 
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton 
                       onClick={() => setIsCollapsed(!isCollapsed)}
                   >
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
                       width="90px"
                       height="90px"
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
               <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />

               <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx= {{ m: "15px 0 5px 20px" }}
                >
                  Data
                </Typography>
              <Item
                  title="Manage Team"
                  to="/team"
                  icon={<PeopleOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />    
               <Item
                  title="Contacts Information"
                  to="/contacts"
                  icon={<ContactsOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />  
               <Item
                  title="Invoices Information"
                  to="/invoices"
                  icon={<ReceiptOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />  
               <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx= {{ m: "15px 0 5px 20px" }}
                >
                  Pages
              </Typography>
              <Item
                  title="Profile Form"
                  to="/form"
                  icon={<PersonOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />  

               <Item
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               /> 
               <Item
                  title="FAQ Page"
                  to="/faq"
                  icon={<HelpOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               /> 
               <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx= {{ m: "15px 0 5px 20px" }}
                >
                  Charts
              </Typography>
               <Item
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               /> 

               <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               /> 

              <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               /> 

              <Item
                  title="Geoghraphy Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               /> 
            </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar