import "./topbar.scss";


export default function topbar({menuOpen,setMenuOpen}) {


  return (
    <div className= {"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
       <div className="left">
          
        <div className="itemContainer">

          <div className="homeContainer">
            <a href="#intro">
            <img src="assets/home.png" alt=""/>
            </a>
          </div>
         
          

          <div className="gitHolder" onClick={()=>window.open("https://github.com/rahul5316")}>
            <img src="assets/git2.png" alt=""/>
          </div>


         
                
                <div className="linkedinHolder" onClick={()=>window.open("https://www.linkedin.com/in/rahulkumarsinha5316/")}>
                  <img src="assets/linked2.png" alt=""/>
                </div>
            {/* <GitHubIcon className ="git" onClick={()=>window.open("https://github.com/rahul5316")}/> */}
            {/* <div className="InstaHolder">
            <InstagramIcon className="insta" onClick={()=>window.open("https://www.instagram.com/rahuls078/?hl=en")}/>
            </div> */}
            <div className="instaHolder" onClick={()=>window.open("https://www.instagram.com/rahuls078/?hl=en")}>
              <img src="assets/ig.png" alt=""/>
            </div>
            

        </div>

        

        

       </div>
       <div className="right">

      
         {/* <button className ="button"onClick={()=>window.open("assets/Rahul's_Resume.pdf")}>
              Resume  */}

          {/* </button> */}

          

          {/* <button className ="button"onClick={()=>window.open("assets/Rahul's_Resume.pdf")}>

            
            Resume
            </button> */}
            {/* <a href="assets/Rahul's_Resume.pdf" className="btn btn4">Resume</a> */}

          
          {/* <a href="assets/Rahul's_Resume.pdf" className="btn btn3"> Resume</a> */}

          <div className="resume-btn">
                  
          <a className="btn btn3" href="assets/Rahul Kumar Sinha Resume.pdf" target="_blank">Resume</a>

          </div>

        
                
              
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
