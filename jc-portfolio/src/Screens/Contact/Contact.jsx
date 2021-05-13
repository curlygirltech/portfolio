import emailjs from "emailjs-com";
import { useState } from "react";
import "./contact.scss";

export default function Contact() {
const [message, setMessage] = useState(false)

  function sendEmail(e) {
    e.preventDefault();
    setMessage(true)
    emailjs
      .sendForm(
        'service_or4ogl7',
        'template_z10czbo',
        e.target,
        'user_ataeFJ8iS0tDvyg6MtIn4'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      {/* <div className="left"></div> */}
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Subject" name="subject" />
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your message!</span> }
        </form>
      </div>
    </div>
  );
}
