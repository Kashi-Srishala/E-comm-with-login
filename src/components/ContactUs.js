import ContactUsForm from './ContactUsForm';
import React from 'react';

function ContactUs() {

  async function addContactHandler(contactData) {
    const response = await fetch(
      'https://collect-contact-default-rtdb.firebaseio.com/contact.json',
      {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <ContactUsForm onAddContact={addContactHandler} />
      </section>
    </React.Fragment>
  );
}

export default ContactUs;