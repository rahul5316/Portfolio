import {useEffect, useState} from "react";

import PortfolioList from "../portfolioList/PortfolioList";
import "./projects.scss";
import{
  jsProjects,
  javaProjects,
  algoProjects,
}  from "../../data.js";



export default function Projects() {
   
  const [selected, setSelected]= useState("javascript-Apps");

  const [data, setData] = useState([]);
  const list =[

    {
      id:"javascript-Apps",
      title:"Javascript Apps",
      
    },

    {
      id:"java-Apps",
      title:"Java Apps",
    },

    {
      id:"algorithms-Manipulation",
      title:"Algorithms Manipulation",
    },
    
  ];

  useEffect(() =>{

    switch(selected) {
      case "javascript-Apps":
        setData(jsProjects);
        break;
        case "java-Apps":
        setData(javaProjects);
        break;
        case "algorithms-Manipulation":
        setData(algoProjects);
        break;
        default:
          setData(jsProjects);
    }
    
       
  },[selected])

  return (

    

    <div className="projects" id="projects">
            <h1 className="glow">Projects</h1>
               <ul>
                  
                 {list.map((section) =>(
                     <PortfolioList title={section.title} active={selected === section.id}
                     setSelected={setSelected}
                     id = {section.id}
                     />
                 ))}
               </ul>
               <div className="container">
                   
                   {data.map((d)=>(


                   
                 <div className="item" onClick={()=>window.open(d.URL)}>
                   <img src={d.img} 
                   
                   alt=""/>
                   <h3>{d.title}</h3>
                 </div>

                          ))}  
                 
               </div>
               </div>
              
  );
}
