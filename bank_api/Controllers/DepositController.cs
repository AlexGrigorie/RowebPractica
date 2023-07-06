using Microsoft.AspNetCore.Mvc;
using Bank.Entities;
using Bank.Repository;

namespace Bank.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class DepositController : ControllerBase
    {
        private readonly ILogger<DepositController> _logger;
        private readonly DepositRepository _depositRepository;

        public DepositController(ILogger<DepositController> logger, DepositRepository depositRepository)
        {
            _logger = logger;
            _depositRepository = depositRepository;
        }

        [HttpGet(Name = "GetDeposit")]
        public IEnumerable<Deposit> Get(int operationTypeId) => _depositRepository
                                                                .GetDepositByOperationTypeId(operationTypeId);
        
    }
}