import { useState } from "react";
function StateExample2() {
  const [name, setName] = useState("rku");
  const [age, setAge] = useState(45);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <h1>{age}</h1>
    </div>
  );
}
export default StateExample2;
