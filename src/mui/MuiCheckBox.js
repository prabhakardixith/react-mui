import {React,useState} from 'react'
import {Box,FormControlLabel,Checkbox, FormControl, FormLabel, FormHelperText, FormGroup} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Check } from '@mui/icons-material'
const MuiCheckBox = () => {

    const [accept, setAccept] = useState(false)
    const [skills, setSkills] = useState([])
    console.log({accept});
    console.log({skills});


    const handleAccept = (e) => {
      if(skills.indexOf(e.target.value) === -1){
        setSkills([...skills,e.target.value]);
      }else{
        setSkills(skills.filter(s=> s !== e.target.value));
      }
    }

  return (
    <Box style={{width:'300px',border:'1px solid black',display:'inline-block',}}>
      <Box>
        <FormControlLabel checked={accept} onChange={(e)=>setAccept(e.target.checked)}label='I accept terms and conditions' control={<Checkbox/>}/>
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={accept}/>
      </Box>

      <Box>
        <FormControl error={!skills[0]}>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleAccept}/>}></FormControlLabel>
            <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleAccept}/>}></FormControlLabel>
            <FormControlLabel label='JavaScript' control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleAccept}/>}></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckBox
