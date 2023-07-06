import React, { useState, useEffect } from "react";
import ApiFetch from "./service/ApiCalls/request";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import logo from "./logo.svg";
import "./App.css";
import { appendFile } from "fs";

export enum OperationTabelDropDown {
  Deposit = 'Deposit',
  Withdrawal = 'Withdrawal',
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

const columnsTradeOrders: ColumnsType<DataTypeTradeOrder> = [
  {
    title: "Amount",
    dataIndex: "amount",
    width: 150,
  },
  {
    title: "Trade Order Type",
    dataIndex: ["tradeOrderType", "name"],
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
    render: (isActive:any) => (isActive ? "True" : "False"),
  },
];
// ======================================
function App() {
  const [data, setData] = useState<any>();
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Deposit");

  const handleSelectDropDown = (event: any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchDropDown = async () => {
      try {
        const response = await fetch(ApiFetch.fetchOperationTypes);
        const data = await response.json();
        const newOptions = data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setOptions(newOptions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDropDown();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";
        switch (selectedValue) {
          case "Deposit":
            url = ApiFetch.fetchDeposits;
            break;
          case "Withdrawal":
            url = ApiFetch.fetchWithdrawals;
            break;
          case "TradeOrder":
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

  console.log("FETCH: ", data);
  console.log("dp value is: ", selectedValue);
  return (
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
  );
}

export default App;
