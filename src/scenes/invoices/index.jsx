import React from 'react'
import Header from '../../components/Header';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from "../../data/mockData"

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const columns = [
    {
       field: "id", 
       headerName: "ID"
    },
    { 
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName:  "name-column--cell"
    },
    { 
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
    },
    { 
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    { 
      field: "cost",
      headerName: "Cost",
      renderCell: (params) => (
         <Typography color={colors.greenAccent[500]}>
             ${params.row.cost}
         </Typography>
      ),
      flex: 1,
    },
    { 
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    ]
  return (
    <Box m="20px">
          <Header
            title="INVOICES"
            subtitle="List of Invoice Balances"
          />
          <Box
               m="20px 0 0 0"
               height="75vh"
               sx={{
                 "& .MuiDataGrid-root": {
                    border: "none",
                    backgroundColor: colors.primary[400]
                 },
                 "& .name-column--cell" : {
                   color: colors.greenAccent[300],
                 },
                 "& .MuiDataGrid-columnHeader": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                 },
                 "& .MuiDataGrid-footerContainer": {
                    backgroundColor: colors.blueAccent[700],
                 },
                 "& .MuiDataGrid-columnHeaders" : {
                     borderBottom: "none"
                 },
                 "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`
                 }
               }}
               >
            <DataGrid
                checkboxSelection
                rows={mockDataInvoices}
                columns= {columns}
            />
         </Box>
    </Box>
  )
}

export default Invoices;
