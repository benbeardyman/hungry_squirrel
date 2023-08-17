interface Book {
  title: string;
  description: string;
  pages: number;
  imageUrl: string;
  url: string;
}

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

export const addBook = async function (book: Book) {
  try {
    const res = await fetch('http://localhost:5172/api/Book', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        Accept: 'application/json',
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
