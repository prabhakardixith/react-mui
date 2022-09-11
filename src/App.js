import logo from "./logo.svg";
import "./App.css";
import MuiMain from "./mui/MuiMain";
import { useState,useEffect } from "react";
function App() {
  const [bodyColor, setBodyColor] = useState('white')
  useEffect(() => {
    document.title = "Material UI";
  }, []);

  return (
    <div className="App">
      <div style={{backgroundColor : `${bodyColor}`}}>
        <MuiMain bodyColor={bodyColor} setBodyColor={setBodyColor}/>
      </div>
    </div>
  );
}

export default App;
