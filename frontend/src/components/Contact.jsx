import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "917066378525";
    const text = encodeURIComponent(
      `Hello, I am ${form.name} (${form.email}).\n${form.message}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-info-card">
        <strong>Email:</strong> swamikrupatraders8841@gmail.com
        <br />
        <strong>Phone:</strong> +91 7066378525
        <br />
        <strong>LinkedIn:</strong> Swamikrupa Traders
      </div>
      {/* Centered Social Icons */}
      <div className="contact-socials">
        <a
          href="https://wa.me/917066378525"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          style={{ color: "#25D366", fontSize: "2rem" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/swamikrupa-traders-5ba046363/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          style={{ color: "#0077b5", fontSize: "2rem" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61574741791675"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          style={{ color: "#1877f3", fontSize: "2rem" }}
        >
          <FaFacebook />
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={form.message}
          onChange={handleChange}
          className="contact-textarea"
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
