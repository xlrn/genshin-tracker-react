import React from "react";
import DomainCell from "./table/domainCell";
import MaterialCell from "./table/materialCell";
import UsersCell from "./table/usersCell";

const Content = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const domains = [
    "Cecilia Garden",
    "Hidden Palace of Lianshan Formula",
    "Court of Flowing Sand",
    "Tower of Abject Pride",
  ];

  const mondstadtMats = ["Tile", "Fang", "Shackle", "All"];
  const liyueMats = ["Stick", "Ball", "Puzzle Piece", "All"];
  const inazumaMats = ["Coral", "Magatama", "Oni Skull", "All"];
  const sumeruMats = ["Talisman", "Plate", "Beetle", "All"];

  const dummy = ["I'll figure this out later"];

  let matIndex = 0;

  // sunday0 monday1 tuesday2 wednesday3 thursday4 friday5 saturday6
  switch (dayOfWeek) {
    case 1 || 4:
      matIndex = 0;
      break;
    case 2 || 5:
      matIndex = 1;
      break;
    case 3 || 6:
      matIndex = 2;
      break;
    default:
      matIndex = 4;
      break;
  }

  return (
    <div className="text-white py-4 my-8 px-4 w-4/6 bg-sky-900">
      <div className="grid grid-cols-5 gap-2">
        {/* Mondstadt*/}
        <DomainCell name={domains[0]} />
        <MaterialCell name={mondstadtMats[matIndex]} />
        <UsersCell users={dummy} />
        {/* Liyue */}
        <DomainCell name={domains[1]} />
        <MaterialCell name={liyueMats[matIndex]} />
        <UsersCell users={dummy} />
        {/* Inazuma */}
        <DomainCell name={domains[2]} />
        <MaterialCell name={inazumaMats[matIndex]} />
        <UsersCell users={dummy} />
        {/* Sumeru */}
        <DomainCell name={domains[3]} />
        <MaterialCell name={sumeruMats[matIndex]} />
        <UsersCell users={dummy} />
      </div>
    </div>
  );
};

export default Content;
