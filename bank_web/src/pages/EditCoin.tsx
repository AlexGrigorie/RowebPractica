import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ApiFetch from "../service/ApiCalls/request";

const EditCoin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiFetch.fetchCoinById(id));
        const json = await response.json();
        setName(json.name);
        setDescription(json.description);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await fetch(ApiFetch.editCoin(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,
        name,
        description,
      }),
    });
    navigate("/coin/all");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ margin: "20px" }}>Edit coin</h1>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            style={{ marginBottom: "20px", maxWidth: "300px", width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            style={{ marginBottom: "20px", maxWidth: "300px", width: "100%" }}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};
export default EditCoin;
