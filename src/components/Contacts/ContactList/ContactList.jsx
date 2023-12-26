import React, { useEffect } from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorContacts,
  selectorFilter,
} from 'store/contacts/contactsSelectors';
import { fetchContactsThunk } from 'store/contacts/contactsThunk';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectorFilter);
  const contacts = useSelector(selectorContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  return (
    <ul className={css.contactList}>
      {getFilteredContacts().map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
