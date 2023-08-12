import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ContainerStyled, MainTitle, Title } from './MainStyles';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const isContactExists = contacts.some(contact => contact.name === name);
    if (isContactExists) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = name => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.name !== name)
    );
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);

    if (parsedContacts && parsedContacts.length > 0) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <ContainerStyled>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={addContact} />

      <Title>Contacts</Title>
      <Filter filterValue={filter} onFilterChange={handleFilter} />
      <ContactList
        visibleContacts={visibleContacts}
        onBtnClick={handleDeleteContact}
      />
    </ContainerStyled>
  );
};

export default App;
