import React, { useEffect, useState } from "react";
import ApiFetch from "../service/ApiCalls/request";

const CoinsPage = () => {
  const [data, setData] = useState<any>();

  const formatDate = (gotDate: string) => {
    const date = new Date(gotDate);
    return date.toLocaleDateString("en-GB");
  };

  const handleDelete = async (id: number) => {
    try {
      const url = ApiFetch.deleteCoin(id);
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedData = data.filter((coin: any) => coin.id !== id);
        setData(updatedData);
      } else {
        console.error("Something went wrong...");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = ApiFetch.fetchAllCoins;
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
  }, []);
  console.log(data);
  return (
    <div className="coin-page">
      <div className="coin-container">
        <h1>Coins Page</h1>
        <table className="coin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>When</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((coin: any) => (
                <tr key={coin.id}>
                  <td>{coin.name}</td>
                  <td>{coin.description}</td>
                  <td>{formatDate(coin.when)}</td>
                  <td className="coin-table-cell">
                    {coin.updated === "0001-01-01T00:00:00"
                      ? "-"
                      : formatDate(coin.updated)}
                  </td>
                  <td>
                    <button
                      className="coin-delete-button"
                      onClick={() => handleDelete(coin.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinsPage;
