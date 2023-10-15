import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState([
    { name: "Gagan", age: 24 },
    { name: "john", age: 45 },
    { name: "alice", age: 54 },
    { name: "matt", age: 25 },
  ]);
  const handleClick = (index) => {
    const updatedValue = [...value];
    updatedValue[index] = { ...updatedValue[index], age: 34 };
    setValue(updatedValue);
  };
  return (
    <>
      {value.map((item, i) => {
        return (
          <div key={i}>
            <h2> Name : {item.name} </h2>
            <h2> Age : {item.age} </h2>
            <button onClick={() => handleClick(i)}> Change The Age </button>
          </div>
        );
      })}
    </>
  );
};

export default App;
