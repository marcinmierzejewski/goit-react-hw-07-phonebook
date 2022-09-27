import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from 'services/localStorageServices';

const initialState = {
  items: loadFromLocalStorage('LOCALSTORAGE_KEY'),
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
