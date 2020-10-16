import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

const OrderDetails = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();

  const { handleSubmit } = useForm();
  const [value, setValue] = useState("");
  const [valueDetails, setValueDetails] = useState("");
  const [valuePrice, setValuePrice] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeDetails = (e) => {
    setValueDetails(e.target.value);
  };
  const handleChangePrice = (e) => {
    setValuePrice(e.target.value);
  };
  const onSubmit = () => {
    const orders = {
      name: loggedInUser.name,
      email: loggedInUser.email,
      serviceName: value,
      details: valueDetails,
      price: valuePrice,
      status: "Pending",
    };
    fetch("https://calm-mesa-41690.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    }).then((res) => res.json());
    window.confirm("Order Placed Successfully!");
  };

  return (
    <div style={{ marginTop: "83px" }} className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 300px 18px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name=""
          id=""
          value={loggedInUser.name}
          placeholder="Your name / company’s name"
        />{" "}
        <br />
        <input
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 300px 18px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name=""
          id=""
          value={loggedInUser.email}
          placeholder="Your email address"
        />{" "}
        <br />
        <input
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 300px 18px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name=""
          id=""
          placeholder="Graphic Design"
          value={value}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <input
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 300px 18px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name=""
          id=""
          placeholder="Project Details"
          value={valueDetails}
          onChange={handleChangeDetails}
          required
        />{" "}
        <br />
        <input
          style={{
            marginBottom: "16px",
            padding: "18px 0 18px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name=""
          id=""
          placeholder="Price"
          value={valuePrice}
          onChange={handleChangePrice}
          required
        />
        <br />
        <button
          className="btn"
          style={{
            marginTop: "10px",
            width: "170px",
            backgroundColor: "#111430",
            color: "white",
            padding: "20px 67px 21px 67px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default OrderDetails;
