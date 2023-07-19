import React, { useState, useEffect } from "react";
import ApiFetch from "./service/ApiCalls/request";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import NavBar from "./components/Navbar";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import OperationTable from "./components/OperationTable";
import CoinsPage from "./pages/CoinsPage";
import AddCoin from "./pages/AddCoin";
import EditCoin from "./pages/EditCoin";
import Login from "./components/Login";
import Register from "./components/Register";
import Message from "./pages/Message";

// ======================================
function App() {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Deposit");
  const token = localStorage.getItem("userToken");

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

  return (
    <>
      <NavBar />

      <Routes>
        {!token && <Route path="/" element={<Login />} />}
        {token && (
          <Route
            path="/"
            element={
              <>
                <h1 className="text-center mt-5">Welcome back! 😀</h1>
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block"
                    src="https://media.istockphoto.com/id/951412868/photo/bitcoin-on-white-background.jpg?s=170667a&w=0&k=20&c=c2GkxaBHUNiEasYTdyJA6YloVzafGwd5ToyLU2LZUWg="
                    alt="logo"
                  />
                </div>
              </>
            }
          />
        )}
        <Route
          path="/dashboard"
          element={
            <OperationTable
              selectedValue={selectedValue}
              options={options}
              handleSelectDropDown={handleSelectDropDown}
            />
          }
        />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/create-deposit" element={<Create />}></Route>
        <Route path="/edit-deposit" element={<Edit />}></Route>
        <Route path="/delete-deposit" element={<Delete />}></Route>

        <Route path="/coin/create" element={<AddCoin />} />
        <Route path="/coin/edit" element={<EditCoin />} />
        <Route path="/editCoin/:id" element={<EditCoin />} />
        <Route path="/coin/all" element={<CoinsPage />} />
        <Route path="/informative-message" element={<Message />}></Route>
      </Routes>
    </>
  );
}

export default App;
