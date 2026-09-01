import { useState } from "react"

function App()
{
  let [name,updatename]   = useState("kashish")
   
  function changename(){
          name="dimple"
          updatename(name)
          console.log(name)

  }
  return(<>
    
<h1>student details </h1>
    <p>Name: {name}</p>
  <button onClick={changename}>change name</button>
  </>)
}

export default App