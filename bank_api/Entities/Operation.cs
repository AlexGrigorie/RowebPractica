using Microsoft.OpenApi.Models;
using System.ComponentModel.DataAnnotations;

namespace Bank.Entities
{
    public class Operation
    {
        [Key]
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public int OperationTypeId { get; set; }

        public OperationType OperationType { get; set; }
        public TradeOrder TradeOrder { get; set; }
        public Withdrawal Withdrawal { get; set; }
        public Deposit Deposit { get; set; }
    }
}
