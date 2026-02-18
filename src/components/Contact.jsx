import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs.send(
      "service_lourine",   // <- your Gmail service ID from EmailJS
      "feedback_request",  // <- pre-built template name
      templateParams,
      "YOUR_PUBLIC_KEY"    // <- your public key from EmailJS
    )
    .then(() => {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((err) => {
      alert("Failed to send message. Check console.");
      console.log(err);
    });
  };
  return (
  <section id="contact" className="contact-section">
    <div className="contact-container">

      {/* LEFT SIDE - Keep in Touch */}
      <div className="keep-in-touch">
        <h2>Keep In Touch</h2>
        <p>
          Feel free to reach out for collaborations, freelance work,
          internships. I am open to exciting opportunities and would love to connect!
        </p>

        <div className="contact-details">
          <p><strong>Email:</strong> lourineachieng55@gmail.com</p>
          <p><strong>Phone:</strong> +254 705 745 688</p>
          <p><strong>Location:</strong> Kakamega, Kenya</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/lourineotieno" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <br />
          <a href="https://www.linkedin.com/in/lourine-otieno-5ab094330" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - Contact Form */}
      <div className="form-section">
        <h2>Contact Me</h2>

        <form onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  </section>
);

}

export default Contact;
