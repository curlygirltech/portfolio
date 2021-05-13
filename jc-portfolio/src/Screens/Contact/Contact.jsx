import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      {/* <div className="left"></div> */}
      <div className="right">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
