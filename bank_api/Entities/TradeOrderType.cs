namespace Bank.Entities
{
    public class TradeOrderType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<TradeOrder> TradeOrders { get; set; }
    }
}
