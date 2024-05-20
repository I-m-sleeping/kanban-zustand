import { useCatStore } from "../stores/catStore"

const CatBox = () => {
  const { 
    cats: { bigCats, smallCats },
    increaseBigCats,
    increaseSmallCats,
  } = useCatStore();

  return (
    <div className="box">
      <h1>Cat Box</h1>
      <p>big cats: {bigCats}</p>
      <p>small cats: {smallCats}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  )
}

export default CatBox