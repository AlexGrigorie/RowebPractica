using Bank.Entities;

namespace Bank.Interfaces
{
    public interface IOperationTypeRepository
    {
        List<OperationType> GetAll();

    }
}
