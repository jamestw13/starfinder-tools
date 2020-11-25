import React, { Fragment } from "react";
import CCard from "./CCard.js";

const CharacterList = ({ cList, setCList, cCurrent, setCCurrent }) => {
  const chars = [];
  for (let c in cList) {
    chars.push( <CCard
            cInfo={cList[c]}
            key={cList[c].id}
            setCList={setCList}
            cList={cList}
            cCurrent={cCurrent}
            setCCurrent={setCCurrent}
          />)
  }
  
  return (
    <Fragment>
      <ul className="charlist">
        {chars}
      </ul>
    </Fragment>
  );
};

export default CharacterList;
