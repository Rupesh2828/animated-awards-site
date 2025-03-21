import { PersistedStorage } from "../hooks/persistentStorage";

const PersitentCount = () => {
  const [count, setCount] = PersistedStorage("count",0)

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PersitentCount;
