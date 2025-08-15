// src/pages/Contact.jsx
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  /* simple submit handler */
  const [status, setStatus] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    setStatus("Thanks! We’ll get back to you within 24 h.");
    e.target.reset();             // clear the form
  };

  return (
    <main className="contact-page container">
      <h1>Contact Us</h1>

      <div className="grid">
        {/* -------- LEFT: contact info cards -------- */}
        <aside className="info-cards">
          <article className="info">
            <span className="icon">📍</span>
            <div>
              <h3>Office</h3>
              <p>151 King St N — Kitchener, ON</p>
            </div>
          </article>

          <article className="info">
            <span className="icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>hello@myspa.dev</p>
            </div>
          </article>

          <article className="info">
            <span className="icon">☎️</span>
            <div>
              <h3>Phone</h3>
              <p>+1 (519) 555-0134</p>
            </div>
          </article>
        </aside>

        {/* -------- RIGHT: form -------- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <input id="name" required placeholder=" " />
            <label htmlFor="name">Name</label>
          </div>

          <div className="field">
            <input id="email" type="email" required placeholder=" " />
            <label htmlFor="email">Email</label>
          </div>

          <div className="field">
            <textarea
              id="msg"
              rows="5"
              required
              placeholder=" "
            ></textarea>
            <label htmlFor="msg">Message</label>
          </div>

          <button type="submit" className="btn-primary">Send Message</button>

          {status && <p className="success">{status}</p>}
        </form>
      </div>
    </main>
  );
}
