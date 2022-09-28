import { ContactItem } from 'components/contactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'services/phonebookApi';
import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const {
    data: contacts = [],
    // isLoading,
    // isSuccess,
    // isError,
    // error,
  } = useGetContactsQuery();
  
  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const viewContacts = contacts
    .filter(cont => cont.name.toLowerCase().includes(filter))
    .sort((first, second) => first.name.localeCompare(second.name));

  const { contactsList } = styles;

  return (
    <div>
      {contacts?.length > 0 ? (
        <ul className={contactsList}>
          {viewContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      ) : (
        <p className={contactsList}> No contacts available </p>
      )}
    </div>
  );
};
