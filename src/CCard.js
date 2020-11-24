import React, { Fragment } from "react";

const CCard = ({ cInfo, cList, setCList, cCurrent, setCCurrent }) => {
  const deleteHandler = () => {
    setCList(cList.filter((c) => c.id !== cInfo.id));
  };
  const editHandler = () => {
    setCCurrent(cList.filter((c) => c.id === cInfo.id));
    console.log(cCurrent.cName);
  };
  return (
    <Fragment>
      <li className="c-card">
        <h5>{cInfo.cName}</h5>
        <h6>{cInfo.cRace}</h6>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </li>
    </Fragment>
  );
};

export default CCard;
