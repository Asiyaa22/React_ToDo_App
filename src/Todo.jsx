import "./input.css"

function Todo(){
    return <div>
      <p className="text-3xl font-bold mb-4 underline">Todo with tailwind css</p>
      <h2>To Do list</h2>
      <form action="">
        <input type="text" placeholder="Enter Task" name="task" value="tasky"/>
        <button>Add</button>
      </form>
    </div>
}

export default Todo;