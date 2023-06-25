using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.BookService
{
    
    public class BookService : IBookService
    {
        private static List<Book> books = new List<Book> {
            new Book { Title = "Artisan Pizza" },
            new Book { Id = 1, Title= "Vegan Pizza" }
        };

        public List<Book> AddBook(Book newBook)
        {
            books.Add(newBook);
            return books;
        }

        public List<Book> GetAllBooks()
        {
            return books;
        }

        public Book GetBookById(int id)
        {
            var book = books.FirstOrDefault(book => book.Id == id);
            if (book is not null)
                return book;
                
            throw new Exception("Book not found");
        }
    }
}