import React, { useState } from "react";

const App = () => {
  const [button, setButton] = useState([
    { active: false },
    { active: false },
    { active: false },
    { active: false },
  ]);
  const handleClick = (index) => {
    setButton((prevButton) =>
      prevButton.map((item, i) => ({
        ...item,
        active: i === index ? !item.active : item.active,
      }))
    );
  };
  return (
    <>
      {button.map((item, i) => {
        return (
          <div key={i}>
            <button
              style={{ color: item.active ? "green" : "red" }}
              onClick={() => handleClick(i)}
            >
              {" "}
              Active{" "}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default App;
