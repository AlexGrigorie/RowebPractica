namespace Bank.Entities
{
    public class Withdrawal
    {
        public int Id { get; set; }
        public int OperationId { get; set; }
        public double Amount { get; set; }
        public bool WasApprovedByUser2FA { get; set; }
        public string ToAddress { get; set; }

        public Operation Operation { get; set; }
    }
}
