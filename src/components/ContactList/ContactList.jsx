import React from 'react';
import {
  ContactListStyled,
  ContactListItem,
  ContactName,
  DeleteButton,
} from './ContactListStyles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = name => {
    dispatch(deleteContact(name));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactListStyled>
      {visibleContacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            <span>
              <ContactName>{contact.name}</ContactName>: {contact.number}
            </span>
            <DeleteButton
              type="button"
              onClick={() => handleDeleteContact(contact.name)}
            >
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
