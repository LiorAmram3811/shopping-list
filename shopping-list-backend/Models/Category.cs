namespace shopping_list_backend.Models
{
    // A category of items in the shopping list.
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ShoppingItem> Items { get; set; }
    }
}
