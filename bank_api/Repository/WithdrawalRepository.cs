using Microsoft.EntityFrameworkCore;
using Bank.Entities;
using Bank.Interfaces;

namespace Bank.Repository
{
    public class WithdrawalRepository : IWithdrawalRepository
    {
        private readonly ApplicationDbContext _context;
        public WithdrawalRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Withdrawal> GetWithdrawalByOperationTypeId(int id) =>
                                _context.Operations
                                        .Include(w => w.Withdrawal)
                                        .Where(x => x.OperationTypeId == id)
                                        .Select(w => w.Withdrawal)
                                        .ToList();
    }
}
