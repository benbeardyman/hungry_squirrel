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
        private readonly DataContext context;

        public BookService(IMapper mapper, DataContext context)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetBookDto>>> AddBook(AddBookDto newBook)
        {
            var serviceResponse = new ServiceResponse<List<GetBookDto>>();
            var book = mapper.Map<Book>(newBook);

            context.Books.Add(book);
            await context.SaveChangesAsync();

            serviceResponse.Data = 
                await context.Books.Select(book => mapper.Map<GetBookDto>(book)).ToListAsync();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetBookDto>>> GetAllBooks()
        {
            var serviceResponse = new ServiceResponse<List<GetBookDto>>();
            var dbBooks = await context.Books.ToListAsync();
            serviceResponse.Data = dbBooks.Select(book => mapper.Map<GetBookDto>(book)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetBookDto>> GetBookById(int id)
        {
            var serviceResponse = new ServiceResponse<GetBookDto>();
            var dbBook = await context.Books.FirstOrDefaultAsync(book => book.Id == id);
            serviceResponse.Data = mapper.Map<GetBookDto>(dbBook);
            return serviceResponse;
        }
    }
}