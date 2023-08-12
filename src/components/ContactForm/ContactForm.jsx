import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  Label,
  Span,
  Input,
  SubmitButton,
} from './ContactFormStyles';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addName = evt => {
    return setName(evt.currentTarget.value);
  };

  const addNumber = evt => {
    return setNumber(evt.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        <Span> Name</Span>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={addName}
          required
        />
      </Label>
      <Label>
        <Span> Number</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={addNumber}
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
