import React from "react";

interface Users {
  users: string[];
}

const UsersCell = (props: Users) => {
  return (
    <div className="col-span-2 bg-slate-800">
      <div className="px-3 py-2">{props.users}</div>
    </div>
  );
};

export default UsersCell;
