import { useSelector } from 'react-redux';

import { ContactForm } from 'components/Contacts/ContactForm/ContactForm';
import { ContactList } from 'components/Contacts/ContactList/ContactList';
import { Filter } from 'components/Contacts/Filter/Filter';
import { selectError, selectLoading } from 'store/contacts/contactsSelectors';

import css from '../components/pages.css/Contacts.module.css';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.div}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1 className={css.title}>Phonebook</h1> <br />
      <ContactForm />
      <div>
        <h2 className={css.title}>Contacts</h2> <br />
        <Filter />
        <ContactList />
      </div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Contacts;
