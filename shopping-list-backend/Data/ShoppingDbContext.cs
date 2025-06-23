using Microsoft.EntityFrameworkCore;
using shopping_list_backend.Models;
using System;

namespace shopping_list_backend.Data
{
    public class ShoppingDbContext : DbContext
    {
        public ShoppingDbContext(DbContextOptions<ShoppingDbContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<ShoppingItem> ShoppingItems { get; set; }
        public DbSet<ShoppingCart> ShoppingCarts { get; set; }
        public DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed categories
            modelBuilder.Entity<Category>().HasData(
            new Category { Id = 1, Name = "Cleaning Products" },
            new Category { Id = 2, Name = "Cheeses" },
            new Category { Id = 3, Name = "Fruits and Vegetables" },
            new Category { Id = 4, Name = "Meat and Fish" },
            new Category { Id = 5, Name = "Baked Goods" }
            );
        }
    }
}
