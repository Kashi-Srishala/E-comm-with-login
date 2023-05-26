import React, { useRef } from 'react';
import classes from './ContactUsForm.module.css';
import './Button.css';
import './ProductsScreen.css';

function ContactUsForm(props) {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    props.onAddContact(contactData);

    nameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
  }

  return (
    
    <div className={classes.container}>
        <h1 className='h1-label'>Contact Us</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'>Phone Number</label>
          <input type='text' id='phone' ref={phoneRef} />
        </div>
        <button className='button'>Submit</button>
      </form>
    </div>
  );
}

export default ContactUsForm;
