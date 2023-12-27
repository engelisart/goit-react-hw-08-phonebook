import React, { useState } from 'react';
import { addContactThunk } from 'store/contacts/contactsThunk';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'store/contacts/contactsSelectors';

import css from './ContactForm.module.css';
import { toast } from 'react-toastify';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectorContacts);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    setName('');
    setNumber('');

    const newContact = {
      name: name,
      number: number,
    };

    const copyContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (copyContact) {
      toast.error(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk(newContact))
      .unwrap()
      .then(data => {
        toast.success(`Contact added!`);
      })
      .catch(() => {
        toast.error('Contact failed!');
      });
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactLabel}>
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label className={css.contactLabel}>
        Number
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={css.contactButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};
