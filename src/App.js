import logo from "./logo.svg";
import "./App.css";
import MuiMain from "./mui/MuiMain";
import { useState, useEffect } from "react";
import MuiLayout from "./mui/boxAndStack/MuiLayout";
import Grids from "./mui/Grids";
import { Routes, Route, Outlet } from "react-router-dom";
import MuiCard from "./mui/MuiCard";
import { MuiCardian } from "./mui/MuiCardian";
import { MuiImageList } from "./mui/MuiImageList";
import { MuiNavBar } from "./mui/MuiNavBar";
import { MuiLink } from "./mui/MuiLink";
import { MuiDrawer } from "./mui/MuiDrawer";
import { MuiSpeedDial } from "./mui/MuiSpeedDial";
import { MuiBottomNavtigation } from "./mui/MuiBottomNavtigation";
import { MuiAvatar } from "./mui/MuiAvatar";
import { MuiBadge } from "./mui/MuiBadge";
import { MuiList } from "./mui/MuiList";
import { MuiChip } from "./mui/MuiChip";
import { MuiTable } from "./MuiTable";
import { MuiAlert } from "./mui/MuiAlert";
import { MuiSnackBar } from "./mui/MuiSnackBar";
import { MuiDialog } from "./mui/MuiDialog";
import MuiText from "./mui/MuiText";

function App() {
  const [bodyColor, setBodyColor] = useState("white");
  useEffect(() => {
    document.title = "Material UI";
  }, []);

  return (
    <>
      {/* <Grids/> */}
      {/* <MuiCard/> */}
      {/* <MuiCardian/> */}
      {/* <MuiImageList/> */}
      <MuiNavBar />
      <MuiLink />
      <MuiDrawer />
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavtigation/> */}
      <MuiAvatar />
      <MuiBadge/>
      {/* <MuiList/> */}
      <MuiChip/>
      <MuiSnackBar/>
      {/* <MuiText/> */}
      <MuiDialog/>
      <MuiAlert/>
      <MuiTable/>
      
    </>
  );
}

export default App;
