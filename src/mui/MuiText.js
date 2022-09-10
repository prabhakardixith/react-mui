import {React,useState} from "react";
import {TextField, InputAdornment} from "@mui/material";
import { Stack } from "@mui/system";

const MuiText = () => {
    const [value, setValue] = useState('')
  return (
    <>
      <Stack spacing={2} direction="row" style={{marginLeft:'500px'}}>
        <TextField id="" variant="outlined" label="first" value={null}/>
        <TextField id="" variant="filled" label="second" value={null}/>
        <TextField id="" variant="standard" label="third" value={null}/>
      </Stack>

      <Stack spacing={2} direction="row" style={{marginTop:'50px',marginLeft:'500px'}}>
        <TextField id="" variant="outlined" label="Small" size="small" 
        onChange={e=> setValue(e.target.value)} value={value} error={!value} helperText={!value ? 'Required' : 'Do not share your email with others'}/>
      </Stack>

      <Stack spacing={2} direction="row" style={{marginTop:'50px',marginLeft:'500px'}}>
        <TextField disabled label="Password" type="text" helperText="Do not share your email with others"     required/>
        <TextField variant="filled" InputProps={{readOnly: true}} type="text" value="Keho" helperText="Do not share your email with others"/>
      </Stack>

      <Stack spacing={2} direction="row" style={{marginTop:'50px',marginLeft:'500px'}}>
        <TextField label="Amount" InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}} />
        <TextField label="Weight" InputProps={{endAdornment:<InputAdornment position="end">kg</InputAdornment>}} />
      </Stack>
    </>
  );
};

export default MuiText;
