import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore"
import { useFoodStore } from "../stores/foodStore";

const BearBox = () => {
  // const bears = useBearStore((state) => state.bears)
  // const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const removeAllBears = useBearStore((state) => state.removeAllBears);
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  //const fish = useFoodStore((state) => state.fish);

  const [bgColor, setBgColor] = useState<"lightgreen"|"lightpink">("lightpink");

  useEffect(()=>{
    const unsub = useFoodStore.subscribe((state, prevState) => {
      if (prevState.fish <= 5 && state.fish > 5){
        setBgColor("lightgreen");
      } else if (prevState.fish > 5 && state.fish <= 5) {
        setBgColor("lightpink");
      }
    })

    return unsub;
  },[])

  return (
    <div className="box" 
    style={{backgroundColor: bgColor}}
    >
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>Add bear</button>
        <button onClick={removeAllBears}>Remove all bears</button>
        <button onClick={useBearStore.persist.clearStorage}>Clear storage</button>
      </div>
    </div>
  )
}

export default BearBox