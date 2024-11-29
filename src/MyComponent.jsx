import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(20);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  };
  const updateAgeP = () => {
    setAge(age + 1);
  };
  const updateAgeM = () => {
    setAge(age - 1);
  };
  const updateEmployment = () => {
    setIsEmployed(!isEmployed);
  };


  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={updateName}>Set Name</button>
      <hr />
      <h1>Age: {age}</h1>
      <button onClick={updateAgeP}>Set Age + </button>
      {Array(3).fill('\u00A0').join('')}
      <button onClick={updateAgeM}>Set Age -</button>
      <hr></hr>
      <h1>Is Employed: {isEmployed ? "Yes" : "No"}</h1>
      <button onClick={updateEmployment}>Change status</button>
    </div>
  );
}
export default MyComponent;
