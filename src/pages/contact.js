import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby";
import '../assets/scss/Contact.scss';
import { post } from 'axios';


const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    const sendEmail = await post(
      "https://formspree.io/xdownpwk",
      {name, email, message},
      {headers: {"Accept": "application/json"}}
    ).catch(function (error) {
      console.log(error);
    });

    const { status } = sendEmail;

    status === 200 ? setResponse(true) : setResponse(false);
  };

  return (
    <Layout location={location} title={siteTitle}>
      <form onSubmit={handleForm} className="form">
        <label for="name">Name:</label>
        <input
          id="name"
          className="form__input"
          type="text"
          name="name"
          value={name}
          onChange={({target: {value}}) => setName(value)}
          required 
        />

        <label for="email">Email:</label>
        <input
          id="email"
          className="form__input"
          type="email"
          name="email"
          value={email}
          onChange={({target: {value}}) => setEmail(value)}
          required
        />

        <label for="message">Message:</label>
        <textarea
          id="message"
          className="form__input form__textarea"
          type="text"
          name="message"
          value={message}
          onChange={({target: {value}}) => setMessage(value)}
          required
        />
        <button className="form__button">Send</button>
      </form>
      
      {
        response && <p>Thanks for sending me a message! I'll send you a response soon.</p>
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
`
