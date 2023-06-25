using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dtos.Book
{
    public class AddBookDto
    {
        public string Title { get; set; } = "";
        public string Desctiption { get; set; } = "";
        public int Pages { get; set; }
        public string ImageUrl { get; set; } = "";
        public string Url { get; set; } = "";
    }
}