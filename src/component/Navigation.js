import React from 'react'
import Mainframe from './Mainframe';

export default function Navigation() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
      };
    const refreshPage = () => {
        // document.getElementById("liveScore").innerHTML.reload;
        console.log("start")
        document.getElementById("oldbutton").style.display="none";
        document.getElementById("newbutton").style.display="block";
        // console.log(myText)  
        // document.getElementById('newbutton').innerHTML = myText;
        console.log("end")
    };
  return (
    <div>
        <div id ='oldbutton' >
        <button type="button" onClick={handleClick}>Click Me</button>
        <button type="button" onClick={refreshPage}>Click Me 2</button>
        <button type="button">Click Me 3</button>
        <button type="button">Click Me 4</button>
        {count}
        </div>
        <div id="newbutton" >
        <button type="button" onClick={handleClick}>Click Me5</button>
        <button type="button" onClick={refreshPage}>Click Me 6</button>
        <button type="button">Click Me 7</button>
        <button type="button">Click Me 8</button>
        </div>
        {count}
    </div>
  )
}
