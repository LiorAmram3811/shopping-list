namespace shopping_list_backend.Models
{
    // A specific item in the shopping cart;
    // meaning: which product, from which cart, and in what quantity.
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
