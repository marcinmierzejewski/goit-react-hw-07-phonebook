import styles from './PhoneBook.module.css';
import { nanoid } from 'nanoid';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/contactsApi';

export const PhoneBook = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const valueSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;

    console.log(name, phone);
    console.log(contacts);

    if (contacts.find(cont => cont.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      try {
        await addContact({
          id: nanoid(),
          name,
          phone,
        });
      } catch (error) {
        alert(`Failed! Save error`);
      }

      form.reset();
    }
  };

  const { form, label, input, addBtn } = styles;

  return (
    <form className={form} onSubmit={valueSubmit}>
      <label className={label}>
        Name
        <input
          className={input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={label}>
        Number
        <input
          className={input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
