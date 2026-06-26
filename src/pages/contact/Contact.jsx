import React, { useEffect, useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaSnapchat
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import "./contact.css";
import { ColorRing } from 'react-loader-spinner';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/api/v1/user/feedbackUser`, {
        name, email, subject, content
      });
      
      if (response.status === 200) {
        setIsLoading(false);
        setContent("");
        setEmail("");
        setName("");
        setSubject("");
        alert("Thank you for your feedback");
      } else {
        setIsLoading(false);
        alert("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      alert("Something went wrong");
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">🚀 Reach Out and Connect!</h3>
          <p className="contact__description">
            I'm thrilled that you're interested in connecting with me. Whether
            you have a job opportunity, a collaboration idea, or just want to
            say hello, feel free to reach out! I'm always open to new
            opportunities and conversations.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me </span>
                <h4 className="info__desc">saisandeep.koritala@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+1 361-228-8859</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/saisandeep.koritala" className="contact__social-links">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/saisandeep.koritala/" className="contact__social-links">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/koritalasaisandeep/" className="contact__social-links">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" className="contact__social-links">
              <FaTwitter />
            </a>
            <a href="https://whatsapp.com" className="contact__social-links">
              <FaWhatsapp />
            </a>
            <a href="https://snapchat.com" className="contact__social-links">
              <FaSnapchat />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          {isLoading ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          ) : (
            <button className="button" type="submit">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;