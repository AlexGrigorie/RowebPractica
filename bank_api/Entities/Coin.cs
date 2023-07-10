namespace Bank.Entities
{
    public class Coin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Deleted { get; set; }
        public DateTime When { get; set; }
        public DateTime Updated { get; set; }
    }
}
