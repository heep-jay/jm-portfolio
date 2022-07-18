import React, { useState } from 'react'
import './Footer.scss'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import { client } from '../../client';

const Footer = () => {

  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({ ...formData, [name]: value})
  }

 const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <h2 className="head-text">Take a coffee & Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jubrilmuritala69@gmail.com" className="p-text">Jubrilmuritala69@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile-wwhatsapp" />
          <a href="tel: +234 (902) 201-8729" className="p-text">+234 (902) 201-8729</a>
        </div>
      </div>

      {!isFormSubmitted ?(
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
        </div>

        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your E-mail" name="email" value={email} onChange={handleChangeInput}/>
        </div>

        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={handleChangeInput}/>
        </div>

        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending': 'Send Message'}</button>
      </div>
      )
      : (
      <div>
        <h3 className="head-text"> Thanks for getting in touch!!</h3>
      </div>
      )
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,"app__footer"),
  "contact",
  "app__whitebg"
) 