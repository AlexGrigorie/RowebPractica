using Bank.Entities;

namespace Bank.Interfaces
{
    public interface IDepositRepository
    {
        List<Deposit> GetDepositByOperationTypeId(int id);
    }
}
