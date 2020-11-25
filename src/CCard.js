import React, { Fragment } from "react";

const CCard = ({ cInfo, cList, setCList, cCurrent, setCCurrent }) => {
  const deleteHandler = (e) => {
    console.log(e.target.value)
    cList = delete cList[e.target.value];
    setCList(cList);
  };
  const editHandler = (e) => {
    console.log(e.target.value)
    setCCurrent(cList[e.target.value]);
  };
  return (
    <Fragment>
      <li className="c-card">
        <h5>{cInfo.cName}</h5>
        <h6>{cInfo.cRace}</h6>
        <button onClick={editHandler} value={cInfo.id}>Edit</button>
        <button onClick={deleteHandler} value={cInfo.id}>Delete</button>
      </li>
    </Fragment>
  );
};

export default CCard;
