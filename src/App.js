import React, { Fragment, useState } from "react";
import Form from "./Form.js";
import CharacterList from "./CharacterList.js";
import "./App.css";

const App = () => {
  
  // Character List: array that holds all character objects information
  const [cList, setCList] = useState([
    { cName: "Jeff", cRace: "vesk", id: 25 },
    { cName: "Keljenkur", cRace: "human", id: 1 }
  ]);

  // Current Character: the character object currently being worked on
  const [cCurrent, setCCurrent] = useState(cList[0]);

  // Render
  return (

    // The react fragment being sent back to index.html
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
