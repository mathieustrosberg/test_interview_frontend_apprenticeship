import React from "react";

const names = ["Alice", "Bob", "Charlie", "David"];

const NameList = () => {
  return (
    <div className="container">
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
