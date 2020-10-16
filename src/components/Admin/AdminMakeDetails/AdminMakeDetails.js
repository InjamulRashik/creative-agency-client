import React from "react";

const AdminMakeDetails = () => {
  return (
    <div style={{ marginTop: "83px" }} className="container">
      <form action="">
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
          placeholder="Enter title"
        />{" "}
        <input
          className=" btn-success"
          style={{
            width: "51px",
            marginBottom: "16px",
            padding: "18px 100px 18px 50px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AdminMakeDetails;
