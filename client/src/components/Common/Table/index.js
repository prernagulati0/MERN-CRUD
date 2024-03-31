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
        {!!data?.length ? (
          data.map((user, index) => {
            return (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>
                  {user?.firstName} {user?.lastName}
                </td>
                <td>{user?.email}</td>
                <td className="actionButtons">
                  <span onClick={() => deleteHandler(user._id)}>
                  <i className="fa fa-trash-alt"></i>
                  </span>
                  <Link to={`/edit/${user._id}`}>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })
        ) : (
          <p className="no_data_found">No user found</p>
        )}
      </tbody>
    </table>
  );
};

export default Table;
