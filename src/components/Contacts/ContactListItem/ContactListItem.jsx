import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contacts/contactsThunk';

import css from './ContactLictItem.module.css';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <>
      <li className={css.contactItem}>
        {contact.name}: {contact.number}
        <button
          className={css.contactButton}
          onClick={() => handleDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};
