export const getBooks = async function () {
  try {
    const res = await fetch('http://localhost:5172/api/Book/GetAll');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const addBook = async function () {
  try {
    const res = await fetch('http://localhost:5172/api/Book/GetAll', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        Accept: 'applicastion/json',
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error('Error adding book: ', error);
    throw error;
  }
};
