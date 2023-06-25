using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.BookService
{
    public interface IBookService
    {
        Task<ServiceResponse<List<GetBookDto>>> GetAllBooks();
        Task<ServiceResponse<GetBookDto>> GetBookById(int id);
        Task<ServiceResponse<List<GetBookDto>>> AddBook(AddBookDto newBook);
    }
}