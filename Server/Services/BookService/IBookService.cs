using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.BookService
{
    public interface IBookService
    {
        List<Book> GetAllBooks();
        Book GetBookById(int id);
        List<Book> AddBook(Book newBook);
    }
}