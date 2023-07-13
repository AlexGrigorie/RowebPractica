import { Table } from "antd";
import { useEffect, useState } from "react";
import ApiFetch from "../service/ApiCalls/request";
import { ColumnsType } from "antd/es/table";

export enum OperationTabelDropDown {
  Deposit = "Deposit",
  Withdrawal = "Withdrawal",
  TradeOrder = "TradeOrder",
}
interface DataTypeDeposit {
  amount: number;
  fromAddress: string;
}

interface DataTypeWithdrawls {
  amount: number;
  toAddress: string;
  wasApprovedByUser2FA: boolean;
}

interface DataTypeTradeOrder {
  amount: number;
  tradeOrderType: {
    name: string;
  };
}

const columnsDeposit: ColumnsType<DataTypeDeposit> = [
  {
    title: "Amount",
    dataIndex: "amount",
    width: 150,
  },
  {
    title: "From Address",
    dataIndex: "fromAddress",
  },
];

const columnsWithdrawals: ColumnsType<DataTypeWithdrawls> = [
  {
    title: "Amount",
    dataIndex: "amount",
    width: 150,
  },
  {
    title: "ToAddress",
    dataIndex: "toAddress",
  },
  {
    title: "2FA Confirmed",
    dataIndex: "wasApprovedByUser2FA",
    key: "isActive",
    render: (isActive: any) => (isActive ? "True" : "False"),
  },
];

function OperationTable({
  selectedValue,
  options,
  handleSelectDropDown,
}: {
  selectedValue: string;
  options: any[];
  handleSelectDropDown: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const [data, setData] = useState<any>();
  const [sortOrder, setSortOrder] = useState<any>("ascend");
  const handleSortChange = () => {
    if (sortOrder === "ascend") {
      setSortOrder("descend");
    } else {
      setSortOrder("ascend");
    }
  };
  const columnsTradeOrders: ColumnsType<DataTypeTradeOrder> = [
    {
      title: "Amount",
      dataIndex: "amount",
      width: 150,
      sorter: (record1, record2) => record1.amount - record2.amount,
      sortOrder: sortOrder === "ascend" ? "ascend" : "descend",
      onHeaderCell: () => ({
        onClick: handleSortChange,
      }),
      showSorterTooltip: false,
    },
    {
      title: "Trade Order Type",
      dataIndex: ["tradeOrderType", "name"],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";
        switch (selectedValue) {
          case OperationTabelDropDown.Deposit:
            url = ApiFetch.fetchDeposits;
            break;
          case OperationTabelDropDown.Withdrawal:
            url = ApiFetch.fetchWithdrawals;
            break;
          case OperationTabelDropDown.TradeOrder:
            url = ApiFetch.fetchTradeOrder;
            break;
          default:
            url = "";
        }
        if (url) {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedValue]);

  return (
    <>
      <div className="App">
        <h1>Operation table</h1>
        <select value={selectedValue} onChange={handleSelectDropDown}>
          {options.map((option: any) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="Table-grid">
          {selectedValue === OperationTabelDropDown.Deposit ? (
            <Table
              columns={columnsDeposit}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              scroll={{ y: 300 }}
            />
          ) : selectedValue === OperationTabelDropDown.Withdrawal ? (
            <Table
              columns={columnsWithdrawals}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              scroll={{ y: 300 }}
            />
          ) : (
            <Table
              columns={columnsTradeOrders}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              scroll={{ y: 300 }}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default OperationTable;
