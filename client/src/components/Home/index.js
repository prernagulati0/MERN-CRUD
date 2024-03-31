import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import toast from "react-hot-toast";
import Table from "../Common/Table";
import { tableHeaders } from "../utils";
import URLS from "../../urls";
import Loader from "../Common/Loader";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const getUserData = await axios.get(URLS.GET_ALL_USER);
      setUsers(getUserData?.data);
      setLoading(false);
    } catch {
      setLoading(false);
      toast.error("Something went wrong!", { position: "top-right" });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteHandler = async (userId) => {
    try {
      const data = await axios.delete(`${URLS.DELETE_USER}/${userId}`);
      setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
      toast.success(data?.data?.msg, { position: "top-right" });
    } catch (e) {
      toast.error("Something went wrong!", { position: "top-right" });
    }
  };
  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        Add User
      </Link>
      <div className="relative">
        {" "}
        {loading ? (
          <Loader />
        ) : (
          <Table
            data={users}
            headers={tableHeaders}
            deleteHandler={deleteHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
