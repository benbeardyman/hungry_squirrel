using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string ImageUrl { get; set; } = "";
        public string Url { get; set; } = "";
        public List<Book>? Books { get; set; }
    }
}