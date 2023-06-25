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

        public async Task<ServiceResponse<List<Book>>> AddBook(Book newBook)
        {
            var serviceResponse = new ServiceResponse<List<Book>>();
            books.Add(newBook);
            serviceResponse.Data = books;
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Book>>> GetAllBooks()
        {
            var serviceResponse = new ServiceResponse<List<Book>>();
            serviceResponse.Data = books;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Book>> GetBookById(int id)
        {
            var serviceResponse = new ServiceResponse<Book>();
            var book = books.FirstOrDefault(book => book.Id == id);
            serviceResponse.Data = book;
            return serviceResponse;
        }
    }
}