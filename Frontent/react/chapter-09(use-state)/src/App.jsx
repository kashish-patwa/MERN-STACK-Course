import { useState } from "react"
function App(){
let [count,updateCount]=useState(0)
  function incCount()
    {
        
        count=count+1 
        updateCount(count)
        console.log(count)
    }
  return(
    <>
    <h1>count={count}</h1>
    <button onClick={incCount}>increase count</button>

    </>
  )

}




export default App