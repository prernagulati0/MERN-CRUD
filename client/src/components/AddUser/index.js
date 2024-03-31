import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import toast from "react-hot-toast";
import URLS from "../../urls";
const AddUser = () => {
  const users = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitFormHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(URLS.CREATE_USER, user)
      .then((res) => {
        toast.success(res?.data?.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Something went wrong!", { position: "top-right" });
        console.log(error);
      });
  };
  return (
    <div className="addUser">
      <Link to={"/"} className="backButton">
        Back
      </Link>
      <h3> Add New User</h3>
      <form className="addUserForm" onSubmit={submitFormHandler}>
        <div className="inputContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="off"
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="off"
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
