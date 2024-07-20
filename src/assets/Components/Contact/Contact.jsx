import React from 'react'
import './Contact.css'
import msg_icon from '../../../assets/msg-icon.png'
import mail_icon from '../../../assets/mail-icon.png'
import phone_icon from '../../../assets/phone-icon.png'
import location_icon from '../../../assets/location-icon.png'
import white_arrow from '../../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9ec820a8-13eb-4bad-a279-86c650186f50");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3> SEND US A MESSAGE <img src={msg_icon} alt='' /> </h3>
        <p>

Feel free to reach out through our contact form or find 
our contact information below. Your feedback, questions, 
and suggestions are important to us as we strive to provide 
exceptional service through the Educate More Initiative. 
We look forward to hearing from you and working together to create 
a brighter future for all.
        </p>
        <ul>
            <li><img src={mail_icon} alt='mail icon'></img>info@educateusinitiative.org</li>
            <li><img src={phone_icon} alt='phone number icon'></img>+25411955733</li>
            <li><img src={location_icon} alt='location icon'></img>Kakuma 1, Zone 4, Block 4</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' placeholder='Enter your name' required/>
        <label>Phone Number</label>
        <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
        <label>Write your message here</label>
        <textarea name='message' id=''  rows='6' placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn'> Submit Now <img src={white_arrow} alt='arrow'/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
