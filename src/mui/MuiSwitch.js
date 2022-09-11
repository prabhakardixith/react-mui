import {useState,React} from 'react'
import {FormControlLabel,Switch,Box,TextField} from '@mui/material'

const MuiSwitch = ({setBodyColor,bodyColor}) => {
    const [check, setCheck] = useState(false)
   
    console.log({check});

    const handleChange = (e) => {
        setCheck(e.target.checked);
        if(check) {
            setBodyColor('white')
        }
        else{
            setBodyColor('lightGray')
        }
    }
   
  return (
    <>
    <Box >
    <FormControlLabel label="dark mode" control={<Switch checked={check} onChange={(e)=> handleChange(e)} />}/>
    </Box>
    </>
  )
}

export default MuiSwitch
