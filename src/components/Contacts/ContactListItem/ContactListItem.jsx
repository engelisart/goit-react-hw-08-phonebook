import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contacts/contactsThunk';

import css from './ContactLictItem.module.css';
import { toast } from 'react-toastify';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId))
      .unwrap()
      .then(data => {
        toast.warning(`Contact removed!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
      });
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
