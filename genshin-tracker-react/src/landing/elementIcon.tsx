import React from "react";
import Anemo from "../assets/Anemo.svg";
import Geo from "../assets/Geo.svg";
import Pyro from "../assets/Pyro.svg";
import Hydro from "../assets/Hydro.svg";
import Electro from "../assets/Electro.svg";
import Cryo from "../assets/Cryo.svg";
import Dendro from "../assets/Dendro.svg";

const pickRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const elementList = [Anemo, Geo, Pyro, Hydro, Electro, Cryo, Dendro];

const ElementIcon = () => {
  let elementIndex = pickRandomNumber(0, 6);
  let selectedElement = elementList[elementIndex];
  return (
    <>
      <div className="bg-fixed">
        <img className="opacity-70" src={selectedElement}></img>
      </div>
    </>
  );
};

export default ElementIcon;
