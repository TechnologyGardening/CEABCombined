import * as React from "react";
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ x: "Rku Student", y: 1 });
    }, 5000);
  });
}
function ApiSimulation() {
  const [name, setName] = React.useState("loading....");
  const [id, setId] = React.useState("loading...");
  const [x, setX] = React.useState(300);
  const [mm, setMM] = React.useState(0);
  const [ss, setSss] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  const [src1, setSrc1] = React.useState("");
  const paths = ["p1", "p2", "p3", "p4"];
  React.useEffect(() => {
    fetchUserData().then((abc) => {
      setName(abc.x);
      setId(abc.y);
    });
    setInterval(() => {
      setX(x - 1);
      if (x === 0) setX(300);
      setMM(Math.trunc(x / 60));
      setSss(x % 60);
    }, 1000);
    setInterval(() => {
      setCounter(counter + 1);
      setSrc1(paths[counter % 4]);
    }, 4000);
  });
  return (
    <div>
      User: {name} <br />
      Id : {id} <br />
      {mm} : {ss}
    </div>
  );
}
export default ApiSimulation;
// 1. Implement Countdown Timer with useeffect
//    MM:SS  05:00 04:59 04:00 03:59
// 2. Pass array of strings as arguments
//    convert array to unordered list
// 3. Implement image changer with useeffect
//    create a list of 4 images. Chnage images at interval of 4 seconds
