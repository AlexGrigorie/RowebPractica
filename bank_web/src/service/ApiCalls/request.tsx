const api_url = process.env.REACT_APP_API_URL;
const requests = {
  fetchDeposits: `${api_url}/deposit/Get?operationTypeId=1`,
  fetchWithdrawals: `${api_url}/withdrawal/Get?operationTypeId=2`,
  fetchTradeOrder: `${api_url}/tradeorder/Get?operationTypeId=3`,
  fetchOperationTypes: `${api_url}/OperationType/GetAll`,
  fetchAllCoins: `${api_url}/coin/GetAll`,
  deleteCoin: (id: number) => `${api_url}/coin/deletecoin?coinId=${id}`,
};
export default requests;
