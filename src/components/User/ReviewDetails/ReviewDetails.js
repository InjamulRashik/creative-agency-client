import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

const ReviewDetails = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();

  const { handleSubmit } = useForm();
  const [value, setValue] = useState("");
  const [valueCompany, setValueCompany] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeCompany = (e) => {
    setValueCompany(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setValueDescription(e.target.value);
  };
  const onSubmit = () => {
    const reviews = {
      name: value,
      companyName: valueCompany,
      description: valueDescription,
    };
    fetch("https://calm-mesa-41690.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    }).then((res) => res.json());
    window.confirm("Review Given Successfully!");
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
          placeholder="Your name"
          value={value}
          onChange={handleChange}
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
          placeholder="Company’s name, Designation"
          value={valueCompany}
          onChange={handleChangeCompany}
        />{" "}
        <br />
        <input
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 0 70px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name=""
          id=""
          placeholder="Description"
          value={valueDescription}
          onChange={handleChangeDescription}
        />{" "}
        <br />
        <br />
        <button
          type="submit"
          className="btn"
          style={{
            width: "170px",
            backgroundColor: "#111430",
            color: "white",
            padding: "10px 60px 10px 60px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ReviewDetails;
