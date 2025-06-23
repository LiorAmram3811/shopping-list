using shopping_list_backend.Models.Dtos;

namespace shopping_list_backend.Services
{
    public interface IShoppingCartService
    {
        Task<int> SaveCartAsync(ShoppingCartDto dto);
    }
}
