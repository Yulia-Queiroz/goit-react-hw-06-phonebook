
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ContainerStyled, MainTitle, Title } from './MainStyles';

const App = () => {
  return (
    <ContainerStyled>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </ContainerStyled>
  );
};

export default App;
