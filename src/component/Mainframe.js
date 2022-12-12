import React from 'react'
import '../App.css';
import Navigation from './Navigation'
import Embedded from './Embedded';
import Level1 from './Level1';
import Level1_2 from './Level1_2';
import Level1_3 from './Level1_3';
import Level1_4 from './Level1_4';
import Level1_11 from './Level1_11';
import Level1_21 from './Level1_21';
import Level1_31 from './Level1_31';
import Level1_12 from './Level1_12';
import Level1_22 from './Level1_22';
import Level1_32 from './Level1_32';
import Level1_13 from './Level1_13';
import Level1_23 from './Level1_23';
import Level1_33 from './Level1_33';
import Level1_14 from './Level1_14';
import Level1_24 from './Level1_24';
import Level1_34 from './Level1_34';

export default function Mainframe(props) {
    // props.func('My name is Dean Winchester & this is my brother Sammie');
    let count=1;
    const refreshPage = () => {
        props.func('OTC Management Cockpit');
        document.getElementById("oldbutton").style.display="none";
        document.getElementById("newbutton1").style.display="block";
        document.getElementById("first").style.display="none";
        document.getElementById("second").style.display="block";
        document.getElementById("second1").style.display="block";
    };
    const refreshPage2 = () => {
        props.func('Delivery/SCM Management Cockpit');
        document.getElementById("oldbutton").style.display="none";
        document.getElementById("newbutton2").style.display="block";
        document.getElementById("first").style.display="none";
        // document.getElementById("second").style.display="none";
        document.getElementById("third").style.display="block";
        document.getElementById("third1").style.display="block";
    };
    const refreshPage3 = () => {
        props.func('Sales Support Management Cockpit');
        document.getElementById("oldbutton").style.display="none";
        document.getElementById("newbutton3").style.display="block";
        document.getElementById("first").style.display="none";
        // document.getElementById("second").style.display="none";
        document.getElementById("forth").style.display="block";
    };
    const refreshPage4 = () => {
        props.func('Procurement Management Cockpit');
        document.getElementById("oldbutton").style.display="none";
        document.getElementById("newbutton4").style.display="block";
        document.getElementById("first").style.display="none";
        // document.getElementById("second").style.display="none";
        document.getElementById("fifth").style.display="block";
    };
    const newpage = () => {
        count=1;
        console.log(count)
        document.getElementById("second1").style.display="block";
        document.getElementById("second2").style.display="none";
        document.getElementById("second3").style.display="none";
        document.getElementById("second4").style.display="none";
    };
    const newpage1 = () => {
        count=2;
        console.log(count)
        // let color="black";
        // document.getElementsByClassName("addColor");
        // console.log("ascasc");
        document.getElementById("second1").style.display="none";
        document.getElementById("second2").style.display="block";
        document.getElementById("second3").style.display="none";
        document.getElementById("second4").style.display="none";
    };
    const newpage2 = () => {
        count=3;
        console.log(count)
        document.getElementById("second1").style.display="none";
        document.getElementById("second2").style.display="none";
        document.getElementById("second3").style.display="block";
        document.getElementById("second4").style.display="none";
    };
    const newpage3 = () => {
        count=4;
        console.log(count)
        document.getElementById("second1").style.display="none";
        document.getElementById("second2").style.display="none";
        document.getElementById("second3").style.display="none";
        document.getElementById("second4").style.display="block";
    };
    const newpage4 = () => {
        count=5;
        console.log(count)
        document.getElementById("third1").style.display="block";
        document.getElementById("third2").style.display="none";
        document.getElementById("third3").style.display="none";
        document.getElementById("third4").style.display="none";
    };
    const newpage5 = () => {
        count=6;
        console.log(count)
        document.getElementById("third1").style.display="none";
        document.getElementById("third2").style.display="block";
        document.getElementById("third3").style.display="none";
        document.getElementById("third4").style.display="none";
    };
    const newpage6 = () => {
        count=7;
        console.log(count)
        document.getElementById("third1").style.display="none";
        document.getElementById("third2").style.display="none";
        document.getElementById("third3").style.display="block";
        document.getElementById("third4").style.display="none";
    };
    const newpage7 = () => {
        count=8;
        console.log(count)
        document.getElementById("third1").style.display="none";
        document.getElementById("third2").style.display="none";
        document.getElementById("third3").style.display="none";
        document.getElementById("third4").style.display="block";
    };
    const newpage8 = () => {
        count=9;
        console.log(count)
        document.getElementById("forth1").style.display="none";
        document.getElementById("forth2").style.display="none";
        document.getElementById("forth3").style.display="none";
        document.getElementById("forth4").style.display="block";
    };
    const newpage9 = () => {
        count=10;
        console.log(count)
        document.getElementById("forth1").style.display="none";
        document.getElementById("forth2").style.display="none";
        document.getElementById("forth3").style.display="none";
        document.getElementById("forth4").style.display="block";
    };
    const newpage10 = () => {
        count=11;
        console.log(count)
        document.getElementById("forth1").style.display="none";
        document.getElementById("forth2").style.display="none";
        document.getElementById("forth3").style.display="none";
        document.getElementById("forth4").style.display="block";
    };
    const newpage11 = () => {
        count=12;
        console.log(count)
        document.getElementById("forth1").style.display="none";
        document.getElementById("forth2").style.display="none";
        document.getElementById("forth3").style.display="none";
        document.getElementById("forth4").style.display="block";
    };
    const newpage12 = () => {
        count=13;
        console.log(count)
        document.getElementById("fifth1").style.display="none";
        document.getElementById("fifth2").style.display="none";
        document.getElementById("fifth3").style.display="none";
        document.getElementById("fifth4").style.display="block";
    };
    const newpage13 = () => {
        count=14;
        console.log(count)
        document.getElementById("fifth1").style.display="none";
        document.getElementById("fifth2").style.display="none";
        document.getElementById("fifth3").style.display="none";
        document.getElementById("fifth4").style.display="block";
    };
    const newpage14 = () => {
        count=15;
        console.log(count)
        document.getElementById("fifth1").style.display="none";
        document.getElementById("fifth2").style.display="none";
        document.getElementById("fifth3").style.display="none";
        document.getElementById("fifth4").style.display="block";
    };
    const newpage15 = () => {
        count=16;
        console.log(count)
        document.getElementById("fifth1").style.display="none";
        document.getElementById("fifth2").style.display="none";
        document.getElementById("fifth3").style.display="none";
        document.getElementById("fifth4").style.display="block";
    };
    
  return (
    <div>
      <div className="navigation">
        {/* <div className='sidespace'></div> */}
        <div className="pbutton" id ='oldbutton' >
        <button className='button1' type="button" onClick={refreshPage}>OTC</button>
        <button className='button1' type="button" onClick={refreshPage2}>Delivery/SCM</button>
        <button className='button1' type="button" onClick={refreshPage3}>Sales Support</button>
        <button className='button1' type="button" onClick={refreshPage4}>Procurement</button>
        </div>
        <div className="sbutton" id="newbutton1" >
        <button className='button2' type="button" onClick={newpage}>SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage1}>NON SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage2}>PRODUCTIVITY METRICS</button>
        <button className='button2' type="button" onClick={newpage3}>TRANSFORMATION PROJECT</button>
        </div>
        <div className="sbutton" id="newbutton2" >
        <button className='button2' type="button" onClick={newpage4}>SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage5}>NON SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage6}>PRODUCTIVITY METRICS</button>
        <button className='button2' type="button" onClick={newpage7}>TRANSFORMATION METRICS</button>
        </div>
        <div className="sbutton" id="newbutton3" >
        <button className='button2' type="button" onClick={newpage8}>SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage9}>NON SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage10}>PRODUCTIVITY METRICS</button>
        <button className='button2' type="button" onClick={newpage11}>TRANSFORMATION METRICS</button>
        </div>
        <div className="sbutton" id="newbutton4" >
        <button className='button2' type="button" onClick={newpage12}>SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage13}>NON SLA METRICS</button>
        <button className='button2' type="button" onClick={newpage14}>PRODUCTIVITY METRICS</button>
        <button className='button2' type="button" onClick={newpage15}>TRANSFORMATION METRICS</button>
        </div>
        </div>
        
        <div className='partition' id='first'>
        <div className="sidepannel">
        <div className='sidestyle'>Business Metrics<br />(SLA)</div>
        <hr class="divider"/>
        <div className='sidestyle'>Operational<br />Metrics</div>
        <hr class="divider"/>
        <div className='sidestyle'>Productivity<br />Metrics</div>
        <hr class="divider"/>
        <div className='sidestyle'>Transformation<br />Metrics</div>
        {/* <span style="color:blue">blue</span> */}
        </div>
      <Embedded></Embedded>
    </div>
    
    <div className='partition1' id='second' >
        <div className='partition1' id='second1'><Level1 ></Level1></div>
        <div className='partition1' id='second2'><Level1_11 ></Level1_11></div>
        <div className='partition1' id='second3'><Level1_21 ></Level1_21></div>
        <div className='partition1' id='second4'><Level1_31 ></Level1_31></div>
    </div>
    <div className='partition1' id='third' >
    <div className='partition1' id='third1'><Level1_2 ></Level1_2></div>
        <div className='partition1' id='third2'><Level1_12 ></Level1_12></div>
        <div className='partition1' id='third3'><Level1_22 ></Level1_22></div>
        <div className='partition1' id='third4'><Level1_32 ></Level1_32></div>
    </div>
    <div className='partition1' id='forth' >
    <div className='partition1' id='forth1'><Level1_3 ></Level1_3></div>
        <div className='partition1' id='forth2'><Level1_13 ></Level1_13></div>
        <div className='partition1' id='forth3'><Level1_23 ></Level1_23></div>
        <div className='partition1' id='forth4'><Level1_33 ></Level1_33></div>
    </div>
    <div className='partition1' id='fifth' >
    <div className='partition1' id='fifth1'><Level1_4 ></Level1_4></div>
        <div className='partition1' id='fifth2'><Level1_14 ></Level1_14></div>
        <div className='partition1' id='fifth3'><Level1_24 ></Level1_24></div>
        <div className='partition1' id='fifth4'><Level1_34 ></Level1_34></div>
    </div>
    </div>
  )
}
