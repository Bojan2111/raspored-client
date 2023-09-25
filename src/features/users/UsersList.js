import React from "react";
import { useGetUserQuery } from "./usersApiSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = (
      <section className="users">
        <h1>Users List</h1>
        <ul>
          {users.map((user, i) => {
            return <li key={i}>{user.username}</li>;
          })}
        </ul>
        <Link to="/Welcome">Back to welcome</Link>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }
  return content;
};

export default UsersList;
