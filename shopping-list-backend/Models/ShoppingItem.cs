namespace shopping_list_backend.Models
{
    // A single item in the shopping list
    public class ShoppingItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
