import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import URLS from "../../urls";

const EditUser = () => {
  const users = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const { id } = useParams();
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URLS.GET_USER}/${id}`);
        setUser(response.data);
      } catch (error) {
        toast.error("Something went wrong!", { position: "top-right" });
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .put(`${URLS.EDIT_USER}/${id}`, user)
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
      <h3>Edit User</h3>
      <form className="addUserForm" onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={inputHandler}
          />
        </div>
        <div className="inputContainer">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
