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
        public ActionResult<List<Book>> Get() 
        {
            return Ok(bookService.GetAllBooks);
        }

        [HttpGet("{id}")]
        public ActionResult<Book> GetBookById(int id) 
        {
            return Ok(bookService.GetBookById(id));
        }

        [HttpPost]
        public ActionResult<List<Book>> AddBook(Book newBook)
        {
            return Ok(bookService.AddBook(newBook));
        }
    }
}