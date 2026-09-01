//empliment mouse events 

function print(){

  console.log("you have trigger a onclick event")
}

function dbclickevent(){

  console.log("you have trrigered dbclickevent")

}

function App(){

       return(
        <>
        
        
        <button onClick={print} >clicked me</button>
        <button  onDoubleClick={dbclickevent}>click me two times</button>

        
        </>  

       )
}

export default App