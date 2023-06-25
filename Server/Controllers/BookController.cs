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
            new Book { Title= "Artisan Pizza"},
            new Book { Title= "Vegan Pizza"}
        };

        [HttpGet("GetAll")]
        public ActionResult<List<Book>> Get() 
        {
            return Ok(books);
        }

        [HttpGet]
        public ActionResult<Book> GetSingleBook() 
        {
            return Ok(books[0]);
        }
    }
}