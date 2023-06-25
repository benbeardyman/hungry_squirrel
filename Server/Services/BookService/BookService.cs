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
        private readonly IMapper mapper;

        public BookService(IMapper mapper)
        {
            this.mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetBookDto>>> AddBook(AddBookDto newBook)
        {
            var serviceResponse = new ServiceResponse<List<GetBookDto>>();
            var book = mapper.Map<Book>(newBook);
            book.Id = books.Max(book => book.Id) + 1;
            books.Add(book);
            serviceResponse.Data = books.Select(book => mapper.Map<GetBookDto>(book)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetBookDto>>> GetAllBooks()
        {
            var serviceResponse = new ServiceResponse<List<GetBookDto>>();
            serviceResponse.Data = books.Select(book => mapper.Map<GetBookDto>(book)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetBookDto>> GetBookById(int id)
        {
            var serviceResponse = new ServiceResponse<GetBookDto>();
            var book = books.FirstOrDefault(book => book.Id == id);
            serviceResponse.Data = mapper.Map<GetBookDto>(book);
            return serviceResponse;
        }
    }
}