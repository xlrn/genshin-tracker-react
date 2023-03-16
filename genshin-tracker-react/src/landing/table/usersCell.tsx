import React from "react";

interface Users {
  users: string[];
}

const UsersCell = (props: Users) => {
  const userString = props.users.join(", ");

  return (
    <div className="col-span-2 bg-slate-800">
      <div className="px-3 py-2">{userString}</div>
    </div>
  );
};

export default UsersCell;
