using Bank.Entities;

namespace Bank.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
