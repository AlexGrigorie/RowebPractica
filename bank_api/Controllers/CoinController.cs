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
    }
}
