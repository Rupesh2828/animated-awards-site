import { useRef, useState } from "react";

interface DemoProps {}

const Demo=({}: DemoProps) => {
  const [count, setCount] = useState(0);
  const useREF = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    useREF.current++;

    console.log("State:", count);
    console.log("useREF:", useREF.current);
  };

  return (
    <div className="tut">
      count : {count}
      <button onClick={handleIncrement}>Incremnt</button>
    </div>
  );
}

export default Demo;