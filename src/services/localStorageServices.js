export const saveToLocalStorage = item => {
  try {
    const saveContacts = JSON.stringify(item);
    localStorage.setItem('LOCALSTORAGE_KEY', saveContacts);
  } catch (error) {
    console.error('Save error: ', error.message);
  }
};

export const loadFromLocalStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error('Load error: ', error.message);
  }
};
