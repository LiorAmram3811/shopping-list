namespace shopping_list_backend.Models
{
    // קטגוריה של פריטים ברשימת קניות
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ShoppingItem> Items { get; set; }
    }
}
