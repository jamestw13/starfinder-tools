import React, { Fragment, useState } from "react";
import Form from "./Form.js";
import CharacterList from "./CharacterList.js";
import "./App.css";

const App = () => {
  const [cList, setCList] = useState([
    { cName: "Jeff", cRace: "Vesk", id: 25 },
    { cName: "Keljenkur", cRace: "Human", id: 1 },
  ]);
  const [cCurrent, setCCurrent] = useState({});
  return (
    <Fragment>
      <h1>Character Tracker</h1>
      <div className="main-container">
        <CharacterList
          cList={cList}
          setCList={setCList}
          cCurrent={cCurrent}
          setCCurrent={setCCurrent}
        />
        <Form
          cList={cList}
          setCList={setCList}
          cCurrent={cCurrent}
          setCCurrent={setCCurrent}
        />
      </div>
    </Fragment>
  );
};

export default App;
