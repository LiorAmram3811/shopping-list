namespace shopping_list_backend.Models.Dtos
{
    public class ShoppingCartItemDto
    {
        public string Name { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public int Quantity { get; set; }
    }
}
