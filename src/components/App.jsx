// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { addContact, deleteContact } from '../redux/contactsSlice.js';

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleAddContact = userContacts => {
    if (!userContacts.name) {
      return;
    }

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase()
      )
    ) {
      alert(`${userContacts.name} is already in contacts`);
    } else {
      dispatch(addContact(userContacts));
    }
  };

  //   const handleFilterChange = e => {
  //     setFilter(e.target.value);
  //   };

  //   const getContactFromFilter = () => {
  //  const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  //     return filterContacts;
  //   };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  // localstorage
  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (storedContacts) {
  //     setContacts(storedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter contacts={contacts} />
      <ContactsList contacts={contacts} handleDelete={handleDelete} />
    </div>
  );
};
