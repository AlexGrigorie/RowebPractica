using Bank.Entities;

namespace Bank.Interfaces
{
    public interface ICoinRepository
    {
        void CreateCoin(Coin coin);
        Coin GetCoinById(int id);
        List<Coin> GetAll();
        Coin GetCoinByName(string name);
        Coin Edit(Coin coin);
        void Delete(int id);

    }
}
