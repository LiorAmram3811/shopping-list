namespace shopping_list_backend.Models
{
    // עגלת קניות
    public class ShoppingCart
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public List<ShoppingCartItem> Items { get; set; }
    }
}
