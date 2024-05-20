import { useBearStore } from "../stores/bearStore"

const BearBox = () => {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <div className="box">
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>Add bear</button>
        <button onClick={removeAllBears}>Remove all bears</button>
      </div>
    </div>
  )
}

export default BearBox