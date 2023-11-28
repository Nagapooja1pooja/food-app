import React, { useState } from "react";
import axios from 'axios'
const Contact = () => {

    const [email,setEmail]=useState('')
    
 
    function push(){
      axios.post('http://localhost:5000/register',{email})
      .then((response)=>{
               const result=response.data
               if(result){
                alert('sucessful')
                setEmail('')
               }
      })
      .catch(()=>{
        alert('not')
      })
    }
    return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
        <button className="secondary-button" onClick={push}>Submit</button>
    </div>
  );
};

export default Contact;