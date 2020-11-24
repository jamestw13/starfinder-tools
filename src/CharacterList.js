import React, { Fragment } from "react";
import CCard from "./CCard.js";

const CharacterList = ({ cList, setCList, cCurrent, setCCurrent }) => {
  return (
    <Fragment>
      <ul className="charlist">
        {cList.map((cInfo) => (
          <CCard
            cInfo={cInfo}
            key={cInfo.id}
            setCList={setCList}
            cList={cList}
            cCurrent={cCurrent}
            setCCurrent={setCCurrent}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default CharacterList;
