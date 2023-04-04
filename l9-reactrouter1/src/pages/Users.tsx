import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { USERS } from "../constants/common";
import { AppDispatch, RootState } from "../redux/configureStore";
import { fetchUsers } from "../redux/modules/users";
import { UserList } from "../users";

const Users = () => {
  const { loading, error, users } = useSelector((state: RootState) => ({
    loading: state.users.loading,
    error: state.users.error,
    users: state.users.users,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers(""));
  }, [dispatch]);

  return (
    <>
      <Link to="add">Add User</Link>
      {loading ? (
        <h1 style={{ color: "red" }}>User List Loading...🔃🔃🔃🔃🔃🔃🔃🔃🔃</h1>
      ) : (
        <UserList users={users} />
      )}
    </>
  );
};

export default Users;
