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
        private static List<Book> books = new List<Book> {
            new Book { Title = "Artisan Pizza" },
            new Book { Id = 1, Title= "Vegan Pizza" }
        };

        [HttpGet("GetAll")]
        public ActionResult<List<Book>> Get() 
        {
            return Ok(books);
        }

        [HttpGet("{id}")]
        public ActionResult<Book> GetBookById(int id) 
        {
            return Ok(books.FirstOrDefault(book => book.Id == id));
        }
    }
}