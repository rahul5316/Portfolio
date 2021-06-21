import "./education.scss"

export default function Education() {


  const data = [


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
  return (
    <div className="education" id ="education">
      
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                

                <img src="assets/ubc.jpeg" alt=""/>
                <h2>Education</h2>
                    
                    <p>3rd year @</p>
                <a href="https://www.ubc.ca/">University Of British Columbia</a>
                
              </div>
            </div>
            
          </div>

          
        </div>
      </div>

      <img src="assets/arrow.png" className="arrow left" alt=""/>

      <img src="assets/arrow.png" className="arrow right" alt=""/>
    </div>
  )
}
