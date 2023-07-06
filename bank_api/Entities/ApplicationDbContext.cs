using Microsoft.EntityFrameworkCore;

namespace Bank.Entities
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Operation> Operations { get; set; }
        public DbSet<OperationType> OperationTypes { get; set; }
        public DbSet<Deposit> Deposits { get; set; }
        public DbSet<TradeOrder> TradeOrders { get; set; }
        public DbSet<TradeOrderType> TradeOrderTypes { get; set; }
        public DbSet<Withdrawal> Withdrawals { get; set; }
    }
}
