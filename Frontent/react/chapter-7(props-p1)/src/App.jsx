
 import "./App.css"
function App() {

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

  return (

    <div className="container">

      {/* Header */}

      <header className="header">

        <h1 className="logo">Skill Bridge</h1>

        <nav>

          <a href="#">Home</a>

          <a href="#">Mentors</a>

          <a href="#">Founders</a>

        </nav>

      </header>



      {/* Main */}

      <main>

        {/* Hero Section */}

        <section className="hero">

          <h1>Learn Web Development</h1>

          <p>
            Build your career with MERN Stack and Real Projects
          </p>

          <button>Get Started</button>

        </section>



        {/* Mentor Section */}

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



      
  {/* Founder Section */}

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

      </main>



      {/* Footer */}

      <footer className="footer">

        <h3>
          © 2026 Skill Bridge | All Rights Reserved
        </h3>

      </footer>

    </div>

  )
}

export default App;