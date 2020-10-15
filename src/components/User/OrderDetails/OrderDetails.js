import React from "react";

const OrderDetails = () => {
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
