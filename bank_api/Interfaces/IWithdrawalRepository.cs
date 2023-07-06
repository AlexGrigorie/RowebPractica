using Bank.Entities;

namespace Bank.Interfaces
{
    public interface IWithdrawalRepository
    {
        List<Withdrawal> GetWithdrawalByOperationTypeId(int id);

    }
}
