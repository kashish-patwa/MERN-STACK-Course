function App(){

  return(
   <div className="container">

      <h1>Task Manager</h1>

      {/* INPUT ROW */}
      <div className="input-row">
        <input 
          type="text" 
          placeholder="Enter your task..." 
          className="task-input"
        />

        <input 
          type="date" 
          className="date-input"
        />

        <button className="add-btn">Add Task</button>
      </div>

      {/* TASK LIST */}
      <div className="task-list">

        <div className="task-row">
          <div className="task-info">
            <span className="task-text">Learn React properly</span>
            <span className="task-date">10 May 2026</span>
          </div>

          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>

        <div className="task-row">
          <div className="task-info">
            <span className="task-text">Build MERN project</span>
            <span className="task-date">12 May 2026</span>
          </div>

          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>

      </div>

    </div>

  )
}
export default App