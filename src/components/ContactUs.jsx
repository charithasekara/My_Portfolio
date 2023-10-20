import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs-com
import { FiSend } from 'react-icons/fi'; // Import the FiSend icon

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6gvcyxm', 'template_nt886ea', form.current, 'C8QiEsAzk0AUMbaHx')
      .then(
        (result) => {
          console.log(result.text);
          // Clear the form fields after a successful email send
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form">
      <div className="form__input-group">
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="form__control"
          />
        </div>
        <div className="form__input-div">
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            className="form__control"
          />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Your Subject"
            name="user_subject"
            className="form__control"
          />
        </div>
      </div>
      <div className="form__input-div">
        <textarea
          placeholder="Your Message"
          name="message"
          className="form__control textarea"
        ></textarea>
      </div>
      <button className="button" type="submit">
        Send Message
        <span className="button__icon contact__button-icon">
          <FiSend />
        </span>
      </button>
    </form>
  );
};
