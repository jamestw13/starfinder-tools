import React, { useState } from "react";

const Form = ({ cList, setCList, cCurrent, setCCurrent }) => {
  const [cName, setCName] = useState("");
  const [cRace, setCRace] = useState("");
  const cNameHandler = (e) => {
    setCName(e.target.value);
  };
  const cRaceHandler = (e) => {
    setCRace(e.target.value);
  };
  const cSaveHandler = (e) => {
    e.preventDefault();
    setCList([
      ...cList,
      {
        cName: cName,
        cRace: cRace,
        id: Math.floor(Math.random() * 100000000),
      },
    ]);
  };
  const cNewHandler = (e) => {
    e.preventDefault();
    setCName("");
    setCRace("");
  };
  return (
    <form>
      <input onChange={cNameHandler} value={cCurrent.cName} type="text" />

      <select onChange={cRaceHandler} value={cCurrent.cRace} name="">
        <option value=""></option>
        <option value="human">human</option>
        <option value="vesk">Vesk</option>
      </select>

      <button onClick={cNewHandler}>New</button>
      <button onClick={cSaveHandler}>Save</button>
    </form>
  );
};

export default Form;
