import React from 'react'
import {Box, MenuItem, TextField} from '@mui/material'
import { useState, useEffect} from 'react'
const MuiSelect = () => {
    const [country, setCountry] = useState([])
   console.log(country);
  return (
    <>
    <Box width='250px' >
        <TextField helperText='Please Select your Country' error={!country[0]} SelectProps={{multiple:true}} color='secondary' size='small' fullWidth label='Select Country' select value={country} onChange={(e)=> setCountry(e.target.value)}>
            <MenuItem value='Ind'>India</MenuItem>
            <MenuItem value='Pak'>Pakistan</MenuItem>
            <MenuItem value='Usa'>USA</MenuItem>
            <MenuItem value='Aus'>Australia</MenuItem>
        </TextField>
    </Box>
      
    </>
  )
}

export default MuiSelect
