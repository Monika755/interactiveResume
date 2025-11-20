import React, { useState } from "react";
import "../App.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xyznojbq", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you’d like to get in touch, just fill out the form below 👇</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Your Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            rows="5"
            required
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); 
                e.target.form.requestSubmit(); 
              }
            }}
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      {status === "SUCCESS" && (
        <p className="success-msg">✅ Message sent successfully!</p>
      )}
      {status === "ERROR" && (
        <p className="error-msg">❌ Something went wrong. Please try again.</p>
      )}
    </section>
  );
}

export default Contact;
