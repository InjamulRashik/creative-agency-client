import React from "react";

const ReviewDetails = () => {
  return (
    <div style={{ marginTop: "83px" }} className="container">
      <form>
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
        />{" "}
        <br />
        <br />
        <button
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
