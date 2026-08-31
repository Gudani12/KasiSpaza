var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/health", () => Results.Ok(new
{
    status = "Healthy",
    service = "KasiSpaza API",
    timestamp = DateTime.UtcNow
}));

app.MapGet("/", () => Results.Ok(new
{
    message = "Welcome to KasiSpaza API",
    status = "Running"
}));

app.Run();

