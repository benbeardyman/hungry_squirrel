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

        public async Task<ServiceResponse<List<GetBookDto>>> AddBook(AddBookDto newBook)
        {
            var serviceResponse = new ServiceResponse<List<GetBookDto>>();
            books.Add(newBook);
            serviceResponse.Data = books;
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetBookDto>>> GetAllBooks()
        {
            var serviceResponse = new ServiceResponse<List<GetBookDto>>();
            serviceResponse.Data = books;
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetBookDto>> GetBookById(int id)
        {
            var serviceResponse = new ServiceResponse<GetBookDto>();
            var book = books.FirstOrDefault(book => book.Id == id);
            serviceResponse.Data = book;
            return serviceResponse;
        }
    }
}