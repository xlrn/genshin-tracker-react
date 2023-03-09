import React from "react";

interface Domain {
  name: string;
}

const DomainCell = (props: Domain) => {
  return (
    <div className="col-span-1 bg-slate-800">
      <div className="px-3 py-2">{props.name}</div>
    </div>
  );
};

export default DomainCell;
