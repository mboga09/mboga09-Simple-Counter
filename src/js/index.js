//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";
//import Card from './component/Card.jsx'

//funcion setInterval(()=>{},1000)

//render your react application
let contador = 0
setInterval(()=>{

    ReactDOM.render(<SecondsCounter seconds={contador} />, document.querySelector("#app"));
    contador = contador+1

},1000)

//ReactDOM.render(<Card />, document.querySelector('#root'));

