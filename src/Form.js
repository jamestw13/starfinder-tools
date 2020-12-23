import React from "react";

const Form = ({ cList, setCList, cCurrent, setCCurrent }) => {
  
  // Input field updater
  const inputHandler = (e) => {
    const value = e.target.value;
    setCCurrent({
      ...cCurrent, [e.target.name]: value
    })
  };
  
  // New Button Handler
  const cNewHandler = (e) => {
    e.preventDefault();
    
    // TODO Check if any fields have input
    
    // If fields have input, warn about loss of information
    if (confirm("You will lose your unsaved information. Press Cancel to go back and save your character changes or Okay to clear the form for a new character")) {
      // Prep to create new cCurrent
      setCCurrent({cName:"", cRace:"", id: ""});
    }
  };
  
  // Save As Button Handler
  const cSaveAsHandler = (e) => {
    e.preventDefault();

    // Add cCurrent to cList with new id
    
      cCurrent.id = Math.floor(Math.random() * 100000000)
    
    setCList([
      ...cList,
      {
        cName: cCurrent.cName,
        cRace: cCurrent.cRace,
        id: cCurrent.id
      },
    ]);
  };
  
  // Save Button Handler
  const cSaveHandler = (e) => {
    e.preventDefault();
    
    if (cCurrent.id === "") {
      cSaveAsHandler(e);
    }
    else {
      
      
      // Remove cCurrent character from cList
      cList = cList.filter((c) => c.id !== cCurrent.id);
      
      // Replace cCurrent character on cList
      setCList([
        ...cList,
        {
          cName: cCurrent.cName,
          cRace: cCurrent.cRace,
          id: cCurrent.id,
        },
      ]);
      
    }
  };    
  
  
  
  // FORM rendering
  return (
    <form>
    <button onClick={cNewHandler}>New</button>
    <button onClick={cSaveHandler}>Save</button>
    <button onClick={cSaveAsHandler}>Save As</button>
    
    <br/>
    <br/>
    <input onChange={inputHandler} value={cCurrent.cName} name="cName" type="text" />
    <select onChange={inputHandler} value={cCurrent.cRace} name="cRace">
    <option value=""></option>
    <option value="human">human</option>
    <option value="vesk">Vesk</option>
    </select>
    
    </form>
    );
  };
  
  export default Form;
  