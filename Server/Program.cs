global using Microsoft.EntityFrameworkCore;
global using server.Data;
global using Microsoft.AspNetCore.Mvc;
global using server.Models;
global using server.Services.BookService;
global using server.Dtos.Book;
global using AutoMapper;

var policyName = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
                    builder =>
                    {
                        builder
                            .WithOrigins("http://localhost:3000") // specifying the allowed origin
                            // .WithMethods("GET") // defining the allowed HTTP method
                            .AllowAnyMethod()
                            .AllowAnyHeader(); // allowing any header to be sent
                    });
});

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddScoped<IBookService, BookService>();
builder.Services.AddEntityFrameworkNpgsql()
            .AddDbContext<DataContext>(opt => 
            opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(policyName);

app.UseAuthorization();

app.MapControllers();

app.Run();
