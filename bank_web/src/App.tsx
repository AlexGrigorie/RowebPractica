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

// ======================================
function App() {
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

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <OperationTable
              selectedValue={selectedValue}
              options={options}
              handleSelectDropDown={handleSelectDropDown}
            />
          }
        />
        <Route path="/create-deposit" element={<Create />}></Route>
        <Route path="/edit-deposit" element={<Edit />}></Route>
        <Route path="/delete-deposit" element={<Delete />}></Route>

        <Route path="/coin/create" element={<div>Create Page</div>} />
        <Route path="/coin/edit" element={<div>Edit Page</div>} />
        <Route path="/coin/delete" element={<div>Delete Page</div>} />
        <Route path="/coin/all" element={<CoinsPage />} />
      </Routes>
    </>
  );
}

export default App;
