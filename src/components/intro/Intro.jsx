import "./intro.scss";
import {init} from 'ityped';
import { useEffect, useRef} from "react";
import x from "../../config/animation";
import Particles from "react-particles-js"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
  
    init(textRef.current, { 
      backDelay: 1000,
      backSpeed:75,
      showCursor:true,
      strings: ["Developer.", "Gamer!"] });

  }, [])
  return (


       <div className="animated-background">

        <Particles params={x}/>

    <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="assets/profile.png" alt=""/>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Rahul.</h1>
        <h3><span ref ={textRef}></span></h3>
      </div>
      <a href="#Education">

        <div className="arrowContainer">
          <img src="assets/download.png" alt=""/>
          </div>
      </a>
    </div>
    </div>
    </div>
  )
}
