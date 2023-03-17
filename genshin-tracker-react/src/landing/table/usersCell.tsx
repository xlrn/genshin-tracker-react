import React from "react";

interface Users {
  users: string[];
}

const UsersCell = (props: Users) => {
  const gridItems = [];

  for (const user of props.users) {
    gridItems.push(
      <div key={"key-" + user} className="col-span-2">{`• ${user}`}</div>
    );
  }

  return (
    <div className="col-span-3 bg-slate-800">
      <div className="px-3 py-2 grid grid-cols-4">{gridItems}</div>
    </div>
  );
};

export default UsersCell;
