import React, {useState, useEffect} from 'react'
import './contact.css'
import {MdOutlineEmail, MdMarkEmailRead} from "react-icons/md"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {IoIosSend} from "react-icons/io"
import {useRef} from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const [emailSent, setEmailSent] = useState(false); // State to track email sending

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_sx5mag8',
        'template_ayddwmj',
        form.current,
        'JFK9PTvD4QxplsBLV'
      );

      setEmailSent(true); // Update the state to indicate email sent

      e.target.reset();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };



  useEffect(() => {
    // Reset the emailSent state after 1.5s
    if (emailSent) {
      const timer = setTimeout(() => {
        setEmailSent(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  return (
    <section id = 'contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>
<div className="container contact__container">
<div className="contact contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option-icon'/>
  <h4>Email</h4>
  <h5>pateldhruvin2503@gmail.com</h5>
  <a href = "mailto:pateldhruvin2503@gmail.com" target='blank'>Send An Email</a>
</article>
<article className='contact__option'>
<BsInstagram className='contact__option-icon'/>
  <h4>Instagram</h4>
  <h5>dhruv_in_25</h5>
  <a href = "https://instagram.com/dhruv_in_25/" target='blank'>Follow Me</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option-icon'/>
  <h4>WhatsApp</h4>
  <h5>+123456789</h5>
  <a href = "https://api.whatsapp.com/send?phone=+16473444827" target='blank'>Send A Message</a>
</article>
</div>
<form ref = {form} onSubmit={sendEmail}>
<input type = 'text' name = 'name' placeholder='Full Name' required></input>
<input type = 'email' name = 'email' placeholder='Email' required></input>
<textarea name="message" rows="7" placeholder='Message' required></textarea>
<button type = 'submit' className='btn btn-primary'>Send <IoIosSend/></button>
{emailSent && (
          <MdMarkEmailRead/>
        )}
</form>
</div>
    </section>
  )
}

export default Contact