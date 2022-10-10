import { useRef, useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const inputRef = useRef(null);
  const countRef = useRef(0);

  const handleOnChange = (event) => {
    // console.log(inputRef.current.value);
    console.log("ehllo");
    //setUsername(event.target.value);
  };

  console.count("render");

  return (
    <div className="App">
      <input ref={inputRef} type="text" onChange={handleOnChange} />
      <br />
      <button onClick={() => (countRef.current += 1)}>Add one</button>
      <br />
      <button onClick={() => setRefresh(!refresh)}>Click me</button>
      {countRef.current}
      <Child counter={countRef.current} handleOnChange={handleOnChange} />
    </div>
  );
}
