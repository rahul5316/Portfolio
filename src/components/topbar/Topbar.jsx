import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"


export default function topbar({menuOpen,setMenuOpen}) {
  return (
    <div className= {"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
       <div className="left">
        <a href="#intro" className="logo">Rahul</a>
        <div className="itemContainer">
          <Person className="icon"/>
          <span>+1-(236)-8853406</span>


        </div>

        <div className="itemContainer">
          <Mail className="icon"/>
          <span>rahulkumarsinha5316@gmail.com</span>
        </div>

        <div className="toggle">
               
               <label>

                 <input type="checkbox"/>
                 <span className="check"></span>
               </label>
        </div>

       </div>
       <div className="right">
         <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
           <span className="line1"></span>
           <span className="line2"></span>
           <span className="line3"></span>
         </div>
       </div>
      </div>
    </div>
  )
}
