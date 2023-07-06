using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Bank.Entities;
using Bank.Repository;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("OperationConnection")));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<DepositRepository>();
builder.Services.AddScoped<TradeOrderRepository>();
builder.Services.AddScoped<WithdrawalRepository>();
builder.Services.AddScoped<OperationTypeRepository>();

builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(builder => 
            builder.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowCredentials()
            .AllowAnyMethod());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
