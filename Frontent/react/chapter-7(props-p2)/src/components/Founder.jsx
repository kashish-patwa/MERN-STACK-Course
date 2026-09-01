function Founder(){
    const founders = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder"
    },
    {
      id: 2,
      name: "Emma Watson",
      role: "Co-Founder"
    }
  ];


  return(

      <section className="founder-section">
    
        <h1>Founders</h1>
    
        <div className="card-container">
    
          {
            founders.map((founder) => (
    
              <div className="card" key={founder.id}>
    
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  alt="founder"
                />
                <h2>{founder.name}</h2>
    
                <p>{founder.role}</p>
    
              </div>
    
            ))
          }
    
        </div>
    
      </section>

  )    


      
}
export default Founder