using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string Desctiption { get; set; } = "";
        public int Pages { get; set; }
        public string ImageUrl { get; set; } = "";
        public string Url { get; set; } = "";
    }
}