import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PhoneBook.module.css';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { saveToLocalStorage } from 'services/localStorageServices';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    saveToLocalStorage(contacts);
  }, [contacts]);

  const valueSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    console.log(name, number);
    console.log(contacts);

    if (contacts.find(cont => cont.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number, id: nanoid() }));
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
          name="number"
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
