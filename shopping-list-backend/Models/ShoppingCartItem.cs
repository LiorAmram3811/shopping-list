namespace shopping_list_backend.Models
{
    // פריט מסוים בסל קניות. כלומר: איזה מוצר, מאיזה סל, ובאיזו כמות .
    public class ShoppingCartItem
    {
        public int Id { get; set; }
        public int CartId { get; set; }
        public ShoppingCart Cart { get; set; }
        public int ItemId { get; set; }
        public ShoppingItem Item { get; set; }
        public int Quantity { get; set; }
    }
}
