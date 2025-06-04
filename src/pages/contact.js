import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',        // 🔁 replace with your EmailJS service ID
      'your_template_id',       // 🔁 replace with your EmailJS template ID
      formRef.current,
      'your_public_key'         // 🔁 replace with your EmailJS public key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        alert("Message failed to send.");
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form' ref={formRef} onSubmit={sendEmail}>
          <Row>
            <Col sm={4}>
              <Form.Control name="name" type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control name="email" type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control name="contact" type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control name="message" as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ada surveying services&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              agustiniamar.adasurveying@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              Mobile: 0995-994-4019
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Zulueta St, Silay City, 6116 Negros Occidental
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
