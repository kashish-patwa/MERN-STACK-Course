function App()
{
    // statment

    let foodItems=["daal","chini","kadi pakora","chini","chai","sahi paneer","altams"]
    let listItem=[]
    for(let foodItem of foodItems)
    {
        listItem.push(<li>{foodItem}</li>)
    }
    return(
      <>
      <h1>our food items</h1>
       <ul>
             {listItem} 
        </ul>

      </>
    )
}



export default App