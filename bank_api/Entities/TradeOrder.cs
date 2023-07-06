namespace Bank.Entities
{
    public class TradeOrder
    {
        public int Id { get; set; }
        public int OperationId { get; set; }
        public int TradeOrderTypeId { get; set; }
        public double Amount { get; set; }

        public TradeOrderType TradeOrderType { get; set; }
        public Operation Operation { get; set; }
    }
}
