using Microsoft.EntityFrameworkCore;
using Bank.Entities;
using Bank.Interfaces;

namespace Bank.Repository
{
    public class DepositRepository : IDepositRepository
    {
        private readonly ApplicationDbContext _context;
        public DepositRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Deposit> GetDepositByOperationTypeId(int id) => _context.Operations
                                                                            .Include(dep=>dep.Deposit)
                                                                            .Where(x=>x.OperationTypeId == id)
                                                                            .Select(dep=>dep.Deposit)
                                                                            .ToList();
    }
}
