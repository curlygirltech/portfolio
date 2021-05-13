import emailjs from "./emailjs-com"
import "./contact.scss";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact" id="contact">
      {/* <div className="left"></div> */}
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Subject" name="subject" />
          <input type="text" placeholder="Name" name="name"/>
          <input type="text" placeholder="Email" name="email"/>
          <textarea placeholder="Message"name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
