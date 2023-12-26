import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from 'store/contacts/contactsSlice';
import { selectorFilter } from 'store/contacts/contactsSelectors';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectorFilter);

  const handleFilterChange = event => {
    dispatch(searchContact(event.target.value));
  };

  return (
    <>
      <label className={css.filterContacts}>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search contacts"
        />
      </label>
    </>
  );
};
