import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Bringing quality products to your doorstep</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Who We Are</h2>
          <p>
            We are an online e-commerce platform dedicated to delivering the
            best quality products at affordable prices. From fashion and
            electronics to home essentials and more, our goal is to make
            shopping seamless, secure, and enjoyable.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            To empower customers by providing access to diverse and high-quality
            products while delivering a smooth shopping experience.
          </p>
        </section>

        <section>
          <h2>What Sets Us Apart</h2>
          <ul>
            <li>Wide range of handpicked products</li>
            <li>Top-notch customer service</li>
            <li>Fast and reliable delivery</li>
            <li>Secure payments and easy returns</li>
          </ul>
        </section>

        <section>
          <h2>Meet Our Team</h2>
          <p>
            Our passionate team works around the clock to keep your shopping
            experience smooth and exciting. From developers and designers to
            customer support and logistics — we’re all focused on one thing:
            **you**.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
