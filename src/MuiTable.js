import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
export const MuiTable = () => {
    const keys = Object.keys(tableData[0]);
    console.log(keys);
  return (
    <TableContainer component={Paper} sx={{marginTop:'20px',maxHeight:'300px',marginBottom:'500px'}}>
      <Table arial-aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>{
            keys.map(k=> (<TableCell key={k} align={k==='email' ? 'center' : ''}>{k}</TableCell>))
          }

          </TableRow>
        </TableHead>
        <TableBody>
        { tableData.map(d => (<TableRow key={d.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
            <TableCell>{d.id}</TableCell>
            <TableCell>{d.first_name}</TableCell>
            <TableCell>{d.last_name}</TableCell>
            <TableCell align="center">{d.email}</TableCell>
            <TableCell >{d.gender}</TableCell>
            <TableCell >{d.ip_address}</TableCell>
        </TableRow>))
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Symon",
    last_name: "Zanicchi",
    email: "szanicchi0@loc.gov",
    gender: "Male",
    ip_address: "52.44.231.154",
  },
  {
    id: 2,
    first_name: "Frederik",
    last_name: "Aylwin",
    email: "faylwin1@netscape.com",
    gender: "Male",
    ip_address: "179.119.119.147",
  },
  {
    id: 3,
    first_name: "Saba",
    last_name: "Tibols",
    email: "stibols2@newsvine.com",
    gender: "Female",
    ip_address: "113.11.113.176",
  },
  {
    id: 4,
    first_name: "Mano",
    last_name: "Loweth",
    email: "mloweth3@symantec.com",
    gender: "Male",
    ip_address: "152.48.153.201",
  },
  {
    id: 5,
    first_name: "Carly",
    last_name: "Molines",
    email: "cmolines4@goo.ne.jp",
    gender: "Genderfluid",
    ip_address: "38.44.75.239",
  },
  {
    id: 6,
    first_name: "Granger",
    last_name: "Atthowe",
    email: "gatthowe5@hubpages.com",
    gender: "Male",
    ip_address: "41.105.109.189",
  },
  {
    id: 7,
    first_name: "Wynn",
    last_name: "Carrabott",
    email: "wcarrabott6@joomla.org",
    gender: "Male",
    ip_address: "207.185.237.171",
  },
  {
    id: 8,
    first_name: "Cordell",
    last_name: "Bosket",
    email: "cbosket7@yale.edu",
    gender: "Male",
    ip_address: "72.243.54.21",
  },
  {
    id: 9,
    first_name: "Ted",
    last_name: "Kidder",
    email: "tkidder8@so-net.ne.jp",
    gender: "Male",
    ip_address: "55.102.11.37",
  },
  {
    id: 10,
    first_name: "Rey",
    last_name: "Nouch",
    email: "rnouch9@mtv.com",
    gender: "Male",
    ip_address: "119.139.56.20",
  },
];
