import React from "react";
import { IUser } from "../interfaces/users";
import UserListRow from "./UserListRow";

const UserListItem = (props: propsType) => {
  const { user } = props;
  return (
    <tr>
      {/* <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.desc}</td> */}
      {<UserListRow value={user.id} />}&nbsp;
      {<UserListRow value={user.name} />}&nbsp;&nbsp;
      {<UserListRow value={user.age} />}&nbsp;
      {<UserListRow value={user.email} />}
    </tr>
  );
};

export default UserListItem;

interface propsType {
  user: IUser;
}
