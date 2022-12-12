import React from 'react';
import './App.css';
import Mainframe from './component/Mainframe';
import * as ReactDOM from 'react-dom';
import Xerox from "./Resource/Xerox.jpeg"
import hcl from "./Resource/hcl.png"
import Home from "./Resource/Home.png"
// import Embedded from './component/Embedded';
// import Navigation from './component/Navigation';
function App() {
  let text="HI";
  const home = () => {
    window.location.reload()
};
const pull_data = (data) => {
  text=<span className='dashboard'>{data}</span>;
  // console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  ReactDOM.render(text, document.getElementById('htext'));
 };

  return (
    <div>
      {/* <div className="App_2">
      Basic Embbed<br></br>
      Click On Data Points To View In Details
      </div> */}
      {/* <div className="App_2">
        <Embedding/>
        </div> */}
        <div className="header">
        <img className="xerox" src={Xerox} alt="Xerox" />
        <div className='flex'>
          <div className="dtext" id="htext"><span className='dashboard'>Management Cockpit</span></div>
          
          <button className="homebutton" type="button" onClick={home}><img className='home' src={Home}></img></button>
          <img className="hcl" src={hcl} alt="hcl" />
          </div>
        </div>
        {/* <div classname="main"> */}
          <Mainframe func={pull_data}></Mainframe>
        {/* </div> */}
        
    {/* <Embedding/> */}
    </div>
    
  );
}

export default App;
