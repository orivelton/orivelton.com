import React, { useState } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import ReCAPTCHA from 'react-google-recaptcha'
import { post } from 'axios';
import '../assets/scss/Contact.scss';

import config from '../../configs/config';
import SuccessForm from '../components/SuccessForm';
const { urlEmail } = config;

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    submit: false,
    showForm: true
  });

  const handleForm = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    const sendEmail = await post(
      urlEmail,
      { name, email, message },
      { headers: {"Accept": "application/json"} }
    ).catch(function (error) {
      console.log(error);
    });
    
    sendEmail.status === 200 && setForm({...form, showForm: false });
  };

  const handleReCaptcha = resp => {
    setForm({...form, submit: !!resp});
  }

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="title-page">Get In Touch</h1>
      {
        form.showForm ? (
          <form onSubmit={handleForm} className="form">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="form__input"
              type="text"
              name="name"
              value={form.name}
              onChange={updateField}
              required 
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="form__input"
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="form__input form__textarea"
              type="text"
              name="message"
              value={form.message}
              onChange={updateField}
              required
            />
            <ReCAPTCHA
              sitekey="6LfEW6YZAAAAAD_uRZm_zBZWdyvjQ-WW6XeLiBr1"
              onChange={handleReCaptcha}
            />
            {
              form.submit && <button className="form__button">Send</button>
            }
          </form>
        ) : (
          <SuccessForm />
        )
      }
    </Layout>
  )
}

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
