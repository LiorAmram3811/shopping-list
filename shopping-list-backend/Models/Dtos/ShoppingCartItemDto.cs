using System.ComponentModel.DataAnnotations;

namespace shopping_list_backend.Models.Dtos
{
    /// <summary>
    /// Data Transfer Object for shopping cart items.
    /// Used to receive and send product data between the backend API and the frontend.
    /// </summary>
    public class ShoppingCartItemDto
    {
        [Required]
        [MinLength(2)]
        public string Name { get; set; } = string.Empty;
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be at least 1")]
        public int CategoryId { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
