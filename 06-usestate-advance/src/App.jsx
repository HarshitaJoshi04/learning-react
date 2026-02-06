import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState([10, 20, 30]);

  const btnClicked = () => {
    const newArr = [...num]; //React checks state by reference, not byvalue.So we create a new array using spread operator to generate a new reference.This ensures React detects a change and re-renders the component.
    console.log(newArr);
    newArr[0] = 30;
    setNum(newArr);

    console.log(newArr);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
