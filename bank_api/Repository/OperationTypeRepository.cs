using Bank.Entities;
using Bank.Interfaces;

namespace Bank.Repository
{
    public class OperationTypeRepository : IOperationTypeRepository
    {
        private readonly ApplicationDbContext _context;
        public OperationTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<OperationType> GetAll() => _context.OperationTypes.ToList(); 
    }
}
