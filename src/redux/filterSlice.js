import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, action) =>
      // state.filter = action.payload;
      action.payload,
  },
});

export const { filterContacts } = filterSlice.actions;

export default filterSlice.reducer;
