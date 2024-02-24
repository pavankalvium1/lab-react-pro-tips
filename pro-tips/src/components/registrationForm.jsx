import React ,{ useState } from 'react'
import './Form.css'

function registrationForm() {
  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [Email , setEmail] = useState('')
  const [phoneNumber , setPhoneNumber] = useState('')
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneReg = /^[0-9]{10}$/;
  const Submit = (e) => {
    const errorElement = document.getElementsByClassName('error')[0];
    if (firstName===""||lastName===""||Email===""||phoneNumber==="") {
      errorElement.textContent = "Enter all the fields.";
    } else if (!emailReg.test(Email)) {
      errorElement.textContent = "Enter a valid Email.";
    } else if (!phoneReg.test(phoneNumber)) {
      errorElement.textContent = "Enter a valid 10-digit number.";
    } else {
      e.preventDefault();
      alert('FORM SUBMITTED');
      errorElement.textContent = ""
    }
  };
  return (
    <div className="App">
      <div className="formBox">
        <div className='inputBoxes'>
          <input type="text" className='inputBox' placeholder='First Name' onChange={(e)=>{setFirstName(e.target.value)}}/><br />
          <input type="text" className='inputBox' placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/><br />
          <input type="text" className='inputBox' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/><br />
          <input type="number" className='inputBox' placeholder='Phone Number' onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        </div><br />
        <p className='error' style={{fontSize:'20px'}}></p>
        <button className='resigterButton' onClick={Submit}>Register</button>
        <br /><br /><br />  
      </div>
    </div>
  )
}

export default registrationForm;