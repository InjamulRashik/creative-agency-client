import React, { useState } from "react";

const AdminAddServiceDetails = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("description", info.description);

    fetch("http://localhost:5000/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
    window.confirm("Service Added Successfully!");
  };
  return (
    <div style={{ marginTop: "83px" }} className="container">
      <form onSubmit={handleSubmit}>
        <h6>Service Title</h6>
        <input
          onBlur={handleBlur}
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 300px 18px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name="name"
          id=""
          placeholder="Enter title"
        />{" "}
        <h6>Icon</h6>
        <input
          onChange={handleFileChange}
          type="file"
          name="file"
        /> <br /> <br />
        <h6>Description</h6>
        <input
          onBlur={handleBlur}
          style={{
            width: "570px",
            marginBottom: "16px",
            padding: "18px 300px 90px 18px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="text"
          name="description"
          id=""
          placeholder="Enter Designation"
          required
        />{" "}
        <br />
        <button
          className=" btn btn-success"
          style={{
            width: "51px",
            marginBottom: "16px",
            padding: "18px 100px 18px 50px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminAddServiceDetails;
