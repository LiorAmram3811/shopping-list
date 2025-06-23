using Microsoft.EntityFrameworkCore;
using shopping_list_backend.Data;
using shopping_list_backend.Models;
using shopping_list_backend.Models.Dtos;

namespace shopping_list_backend.Services
{
    public class ShoppingCartService : IShoppingCartService
    {
        private readonly ShoppingDbContext _context;

        public ShoppingCartService(ShoppingDbContext context)
        {
            _context = context;
        }

        public async Task<int> SaveCartAsync(ShoppingCartDto dto)
        {
            var cart = new ShoppingCart
            {
                Items = new List<ShoppingCartItem>()
            };

            foreach (var itemDto in dto.Items)
            {
                var existingItem = await _context.ShoppingItems
                    .FirstOrDefaultAsync(i => i.Name == itemDto.Name && i.CategoryId == itemDto.CategoryId);

                // If not exist we will create a new item
                if (existingItem == null)
                {
                    existingItem = new ShoppingItem
                    {
                        Name = itemDto.Name,
                        CategoryId = itemDto.CategoryId,
                        Quantity = itemDto.Quantity
                    };

                    _context.ShoppingItems.Add(existingItem);
                    await _context.SaveChangesAsync();
                }
                // If exists, we will update the quantity
                else
                {
                    existingItem.Quantity += itemDto.Quantity;

                    _context.ShoppingItems.Update(existingItem);
                    await _context.SaveChangesAsync();
                }

                cart.Items.Add(new ShoppingCartItem
                {
                    ItemId = existingItem.Id,
                    Quantity = itemDto.Quantity
                });
            }

            _context.ShoppingCarts.Add(cart);
            await _context.SaveChangesAsync();

            return cart.Id;
        }
    }
}
