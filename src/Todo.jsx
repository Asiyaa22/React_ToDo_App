import "./input.css"
import { useState } from "react";

function Todo(){
  const [task, setTask] = useState("");
  const [isVisible, setisVisible] = useState(false);


  function handleChange(event){
    setTask(event.target.value);
  }

  function handleClick(e){
    setTask(task)
    e.preventDefault();
    if(task.trim() !== ""){
      setisVisible(true)
    }
  }
  // function handler(){
  //   document.getElementById("list").setAttribute("style", "visibility: visible");
  //   console.log("Add hogaya")
  // }.....This is what I was trying to do (Jo ke ek real DOM hai) but react use
  // kare apan jahan pe we eork with a virtual DOM ryt....baat toh sahi hai na so
  // apan useState() karte states change karne fyn chalo lets code it  

    return <div className="flex items-center flex-col gap-2.5 w-80 h-2/4 bg-white text-black rounded-xl">
      <h2 className="mt-8">To Do list</h2>
      <form action="" onSubmit={handleClick} className="w-full flex justify-center gap-3">
        <input className="outline-none border-b-2 border-yellow-400" type="text" placeholder="Enter Task" onChange={handleChange} name="task" value={task}/>
        <button className="bg-yellow-400 outline-none w-16 rounded-sm" >Add</button>
      </form>
      <ul id="list">
        <li className={`list-disc ${isVisible ? "visible" : "invisible"} `}>{task}</li>
      </ul>
    </div>
}

export default Todo;