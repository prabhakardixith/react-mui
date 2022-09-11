import {React,useState} from 'react'
import {Box,
    FormHelperText,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from '@mui/material'

const MuiRadio = () => {
    const [value, setValue] = useState('')
    console.log({value});
  return (
    <Box>
      <FormControl error={!value} >
        <FormLabel id='job-experience-group-label'>
            Years of Experience
        </FormLabel>
        <RadioGroup row value={value} onChange={(e)=> setValue(e.target.value)} name="job-experience" aria-labelledby='job-experience-group-label'>
            <FormControlLabel  control={<Radio size='small' color='secondary' />} label='0-2' value='0-2'/>
            <FormControlLabel  control={<Radio size='medium' color='primary'/>} label='3-5' value='3-5'/>
            <FormControlLabel   control={<Radio size='small' color='warning'/>} label='6-9' value='6-9'/>
        </RadioGroup>
         {!value && <FormHelperText>Invalid Selection</FormHelperText>}
    </FormControl>
    </Box>
  )
}

export default MuiRadio
