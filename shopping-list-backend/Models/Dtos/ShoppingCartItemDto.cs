using System.ComponentModel.DataAnnotations;

namespace shopping_list_backend.Models.Dtos
{
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
