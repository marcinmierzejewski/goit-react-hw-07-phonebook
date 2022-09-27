import { configureStore } from '@reduxjs/toolkit';

import { phoneBookApi } from 'services/phonebookApi';

// import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});