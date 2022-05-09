namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        // We've chosen long (as opposed to double) for two reasons:
        // 1) 3rd party payment processor Stripe uses long
        // 2) DBServer (SQLite) doesn't understand what a decimal is
        public long Price { get; set; }
        public string PictureUrl { get; set; }

        // type of product
        public string Type { get; set; }
        public string Brand { get; set; }
        public int QuantityInStock { get; set; }
    }
}