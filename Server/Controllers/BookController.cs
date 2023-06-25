using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly IBookService bookService;

        public BookController(IBookService bookService)
        {
            this.bookService = bookService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<Book>>>> Get() 
        {
            return Ok(await bookService.GetAllBooks());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<Book>>> GetBookById(int id) 
        {
            return Ok(await bookService.GetBookById(id));
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<Book>>>> AddBook(Book newBook)
        {
            return Ok(await bookService.AddBook(newBook));
        }
    }
}