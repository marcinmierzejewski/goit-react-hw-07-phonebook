import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';
import styles from './ContactItem.module.css'

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { contactItem, contactName, contactWrapper, btn } = styles
  return (
    <li className={contactItem}>
      <div className={contactWrapper}>
      
        <div className={contactWrapper}>
          <span className={contactName}>{name}: {number}</span>{' '}
            <a href={`tel:${number}`}><button className={btn}>Call</button></a>
        </div>
        
        <button type="button" className={btn} onClick={() => {
            dispatch(deleteContact(id))}}>
            Delete
          </button>
      </div>
        
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};