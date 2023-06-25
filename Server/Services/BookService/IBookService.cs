using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.BookService
{
    public interface IBookService
    {
        Task<ServiceResponse<List<Book>>> GetAllBooks();
        Task<ServiceResponse<Book>> GetBookById(int id);
        Task<ServiceResponse<List<Book>>> AddBook(Book newBook);
    }
}