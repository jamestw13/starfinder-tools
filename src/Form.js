import React from "react";

const Form = ({ cList, setCList, cCurrent, setCCurrent }) => {

  const inputHandler = (e) => {
    const value = e.target.value;
    setCCurrent({
      ...cCurrent, [e.target.name]: value
    })
  };
  const cSaveHandler = (e) => {
    e.preventDefault();
    console.log(cCurrent.id);
    console.log(cList)
  
  for (var i = 0; i < cList.length; i++) {
  if (cList[i].Id === cCurrent.id) {
    cList[i].cName = cCurrent.cName;
    cList[i].cRace = cCurrent.cRace;
    break;
  }
}

    setCList(cList.filter((c) => c.id !== cCurrent.id));
    console.log(cList)
    // setCList([      ...cList,    ]);
  };    
  
  const cSaveAsHandler = (e) => {
    e.preventDefault();
    setCList([
      ...cList,
      {
        cName: cCurrent.cName,
        cRace: cCurrent.cRace,
        id: Math.floor(Math.random() * 100000000),
      },
    ]);
  };
  const cNewHandler = (e) => {
    e.preventDefault();
    setCCurrent({cName:"", cRace:"", id:""});
  };
  return (
    <form>
      <input onChange={inputHandler} value={cCurrent.cName} name="cName" type="text" />
      <select onChange={inputHandler} value={cCurrent.cRace} name="cRace">
        <option value=""></option>
        <option value="human">human</option>
        <option value="vesk">Vesk</option>
      </select>

      <button onClick={cNewHandler}>New</button>
      <button onClick={cSaveHandler}>Save</button>
      <button onClick={cSaveAsHandler}>Save As</button>
    </form>
  );
};

export default Form;
