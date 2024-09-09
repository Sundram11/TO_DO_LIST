import React, {useState} from "react"
import './index.css'


function Todo(){

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    const [tasks, setTask] = useState([]);
    const [NewTask,setNewTask] = useState("");

    function handelInputChanges(event){
        setNewTask(event.target.value);
    }

      function AddTask(){
        if(NewTask.trim() !== ""){
          setTask(t => [...t,NewTask])
          setNewTask("")
        }
          
      }

    function DeleteTask(index){
          const updatelist = tasks.filter((_,i)=> i !== index )
          setTask(updatelist)
    }

    function TaskUp(index){
      const updatelist = [...tasks];
      if(index > 0){
        [updatelist[index],updatelist[index-1]] = [updatelist[index-1],updatelist[index]];
        setTask(updatelist)
      } 
    }

    function TaskDown(index){
      const updatelist = [...tasks];
      if(index >= 0 && index < tasks.length - 1){
        [updatelist[index+1],updatelist[index]] = [updatelist[index],updatelist[index+1]];
        setTask(updatelist)
      } 
    }


  return(
    <div >
      <div className="w-full md:flex justify-between items-center mb-4 py-2 bg-slate-700">
          <h1 className="my-4 text-5xl md:text-6xl font-extrabold font-sans text-yellow-500 ml-6">TO-DO-LIST</h1>
          <div class="ml-6 md:inline-block font-extrabold text-yellow-500 text-4xl p-2 mr-6">Date: {currentDate}</div>
      </div>
        
      <div className="px-10 m-0">

        <div className="flex px-2 md:flex justify-around my-10 py-4">
          <input className="m-2 flex text-xl md:flex-1 border-2 border-white text-md p-2 rounded-md text-black font-sans font-bold mx-2" type="text" value={NewTask} placeholder="Enter tasks..." onChange={handelInputChanges}/>
          <button className="my-2 mr-2  px-4 md:px-12 py-3 bg-green-500 text-3xl font-bold text-white rounded-md"  onClick={()=>AddTask(NewTask)}>Add</button>
        </div>
          
      <ol>
        {tasks.map((task,index) => 
                        <li key = {index} className="flex-col ml-2 md:text-4xl text-white flex-1">
                          <div className="w-auto :flex-1 font-bold font-sans">{index+1}. {task}</div> 
                          <div className="">
                            <button className= "bg-red-500 p-2 m-3 font-sans font-bold rounded-md hover:bg-red-800" onClick={() => DeleteTask(index)}>Delete</button>
                            <button className="bg-blue-500 p-2 m-3 font-sans font-bold rounded-md hover:bg-blue-800" onClick={() => TaskUp (index)}>⬆</button>
                            <button className="bg-blue-500 p-2 m-3 font-sans font-bold rounded-md hover:bg-blue-800" onClick={() => TaskDown(index)}>⬇</button>
                            <hr/>
                          </div>
                           
                        </li>
                     )}
        </ol>
      </div>
      
     
      
    </div>
  )
}

export default Todo