import "./contact.scss";

import {useState} from "react";


export default function Contact() {

  const[message, setMessage] = useState(false)

  const handleSubmit =(e) =>{
    e.preventDefault() 
    setMessage(true)
  }
  return (



        
    <div className="contact" id="contact">
          
          
          <div className="right">

                 
                    
                    <h1 className="glow">Contact</h1>
                            <form action="https://formsubmit.co/rahulkumarsinha5316@gmail.com" method="POST">
                       <input type="First-name" name="First-name" placeholder="First Name" required/>
                       <input type="Last-name" name="Last-name" placeholder="Last Name" required/>
                      <input type="email" name="email" placeholder="Email Address" required/>
                       <input type="hidden" name="_captcha" value="false"></input>
               
          
              {/* <input type="text" name="message" placeholder ="Please write your message here"required/> */}
              <textarea type="text" name="message" placeholder="Please write your message here" required/>
             <button type="submit">Send</button>
             {message && <span>Thanks for contacting me. I'll reply ASAP :)</span>}
            </form> 
           
          </div>
    </div>
    
  )
}
