function Mentor(){
 {/* Mentor Section */}
  // data 

  const mentors = [
    {
      id: 1,
      name: "Shahid",
      skill: "MERN Stack Developer"
    },
    {
      id: 2,
      name: "Ali",
      skill: "React Developer"
    },
    {
      id: 3,
      name: "Sara",
      skill: "Backend Developer"
    }
  ];
  return(

      <section className="mentor-section">

        <h1>Our Mentors</h1>

        <div className="card-container">

          {
            mentors.map((mentor) => (

              <div className="card" key={mentor.id}>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="mentor"
                />

                <h2>{mentor.name}</h2>

                <p>{mentor.skill}</p>

              </div>

            ))
          }

        </div>

      </section>



  )



}
export default Mentor