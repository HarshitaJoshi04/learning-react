import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  function increaseNum() {
    setnum(num + 1);
  }
  function decreaseNum() {
    setnum(num - 1);
  }
    function jump() {
    setnum(num+5);
  }
  return (
    <>
      <h2
        style={{
          backgroundColor: "#bababa",
          textAlign: "center",
          padding: "12px",
          borderRadius: "12px",
        }}
      >
        Counter
      </h2>
      <div className="box">
        <h1>{num}</h1>
        <div className="btn">
          {" "}
          <button onClick={increaseNum}>increace</button>
          <button onClick={decreaseNum}>decrease</button>
           <button onClick={jump}>jump by 5</button>
        </div>
      </div>
    </>
  );
};

export default App;
