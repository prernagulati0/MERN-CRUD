import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
  const { data, headers, deleteHandler } = props;
  return (
    <table border={1} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          {headers.map((header) => {
            return <th key={header?.key}>{header?.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => {
          return (
            <tr key={user?._id}>
              <td>{index + 1}</td>
              <td>
                {user?.firstName} {user?.lastName}
              </td>
              <td>{user?.email}</td>
              <td className="actionButtons">
                <button onClick={() => deleteHandler(user._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link to={`/edit/${user._id}`}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
