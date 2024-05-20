import { useCatStore } from "../stores/catStore";

const CatBox2 = () => {
  const bigCats = useCatStore((state) => state.cats.bigCats);
  
  return (
    <div className="box">
      <h1>Partial States from catStore</h1>
      <p>big cats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  )
}

export default CatBox2