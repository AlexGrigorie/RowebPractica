using Bank.Entities;

namespace Bank.Interfaces
{
    public interface ITradeOrderRepository
    {
        List<TradeOrder> GetTradeOrderByOperationTypeId(int id);
    }
}
