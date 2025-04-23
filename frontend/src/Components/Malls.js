import React, { useState } from "react";
import "../Componentscss/malls.css";
import { Link, useLocation } from "react-router-dom";
import {item} from "../Components/data" 
 function Malls({setdata}) {
  const location =useLocation();
  const [classlist, setclasslist] = useState(false);
  const change = () => {
    setclasslist(!classlist);
  };
  const filtebycategory=(mallName)=>{
  const filteredMalls = item.filter((product) => product.mallName ===mallName);
  setdata(filteredMalls);  
  }
  const leave=()=>{
    change()
}
const enter=()=>{
  change();
}
  
  return (
    <>
    {
      location.pathname=='/'&&
      <div className="icon"onMouseEnter={enter}>
          Show-Mall
        </div>
    }

      <div className="mainmallcontainer">
        
        <div className={classlist ? "containers" : "containerr"}>
          <div className="ContainerMall" id="ContainerMalls"
          onMouseLeave={leave}
          >
            <button onClick={()=>filtebycategory("GeetaStore")}
            className="Malls"
            >GeetaStore</button>
            <button onClick={()=>filtebycategory("SportyHub")}
            className="Malls"
            >SportyHub</button>
            <button onClick={()=>filtebycategory("FootwearPoint")}
            className="Malls"
            >FootwearPoint</button>
            <button onClick={()=>filtebycategory("FitZone")}
            className="Malls"
            >FitZone</button>
            <button onClick={()=>filtebycategory("ClassicStyle")}
            className="Malls"
            >ClassicStyle</button>
            <button onClick={()=>filtebycategory("StreetWear")}
            className="Malls"
            >StreetWear</button>
            <button onClick={()=>filtebycategory("ProSports")}
            className="Malls"
            >ProSports</button>
            <button onClick={()=>filtebycategory("RunFast")}
            className="Malls"
            >RunFast</button>
            <button onClick={()=>filtebycategory("RetroStore")}
            className="Malls"
            >RetroStore</button>
            <button onClick={()=>filtebycategory("ComfortWear")}
            className="Malls"
            >ComfortWear</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Malls