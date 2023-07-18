using Bank.Entities;
using Bank.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Bank.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class CoinController : ControllerBase
    {
        private readonly ILogger<CoinController> _logger;
        private readonly CoinRepository _coinRepository;
        public CoinController(ILogger<CoinController> logger, CoinRepository coinRepository)
        {
            _logger = logger;
            _coinRepository = coinRepository;
        }

        [HttpGet(Name = "GetAllCoins")]
        public IEnumerable<Coin> GetAll() { return _coinRepository.GetAll(); }

        [HttpGet(Name = "GetCoin")]
        public Coin GetById(int coinId) { return _coinRepository.GetCoinById(coinId); }

        [HttpPost(Name = "CreateCoin")]
        public void CreateCoin(Coin coin) { _coinRepository.CreateCoin(coin); }

        [HttpPost(Name = "EditCoin")]
        public Coin EditCoin(Coin coin)
        {
            return _coinRepository.Edit(coin);
        }

        [HttpDelete(Name = "Delete Coin")]
        public void DeleteCoin(int coinId)
        {
            _coinRepository.Delete(coinId);
        }
    }
}
