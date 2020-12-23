import React, { Fragment } from "react";

const CCard = ({ cInfo, cList, setCList, cCurrent, setCCurrent }) => {
  
  // Delete Button Handler
  const deleteHandler = (e) => {
    // TODO filter object out of cList based on e.target.value
    console.log(e.target.value)
    setCList([]);
  };
  
  // Edit Button Handler
  const editHandler = (e) => {
    // TODO set cCurrent to cList.id === e.target.value
    console.log(cList)
    console.log(e.target.value)
    console.log(cList[1].id)
    cList.forEach((c) => console.log(c.id))

  };
  
  //Render
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
  