import React from "react";

const AdminAddServiceDetails = () => {
  return (
    <div style={{ marginTop: "83px" }} className="container">
      <form>
        <h6>Service Title</h6>
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
        <h6>Icon</h6>
        <input type="file" /> <br /> <br />
        <h6>Description</h6>
        <input
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 300px 90px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name=""
          id=""
          placeholder="Enter Designation"
          required
        />{" "}
        <br />
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

export default AdminAddServiceDetails;
