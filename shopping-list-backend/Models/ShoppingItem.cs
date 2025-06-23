namespace shopping_list_backend.Models
{
    // פריט בודד ברשימת הקניות
    public class ShoppingItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
