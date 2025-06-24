using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using shopping_list_backend.Models.Dtos;
using shopping_list_backend.Services;

namespace shopping_list_backend.Controllers
{
    /// <summary>
    /// Handles submit shopping cart items.
    /// Saves the cart items to the database.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly IShoppingCartService _service;

        public CartController(IShoppingCartService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> SaveCart([FromBody] ShoppingCartDto dto)
        {
            if (dto.Items == null || !dto.Items.Any())
                return BadRequest("Cart is empty.");

            int cartId = await _service.SaveCartAsync(dto);

            return Ok(new
            {
                message = "Cart saved successfully",
                cartId
            });
        }

    }
}
