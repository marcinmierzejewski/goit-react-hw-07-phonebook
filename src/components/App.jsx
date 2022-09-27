import { PhoneBook } from './phoneBook/PhoneBook';
import { ContactsList } from './contactsList/ContactsList';
import { SearchFilter } from './searchFilter/SearchFilter';
import { Section } from './section/Section';
import styles from './App.module.css';

export const App = () => {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <SearchFilter />
        <ContactsList />
      </Section>
    </div>
  );
};
