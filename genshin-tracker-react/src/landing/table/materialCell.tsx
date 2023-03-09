import React from "react";

interface Material {
  name: string;
}

const MaterialCell = (props: Material) => {
  return (
    <div className="col-span-2 bg-slate-800">
      <div className="px-3 py-2">{props.name}</div>
    </div>
  );
};

export default MaterialCell;
