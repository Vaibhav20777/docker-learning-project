import React ,{useState,useEffect} from "react";
import './App.css';
function App(){
    const[tasks,setTasks] = useState([]);
    const[input,setInput] = useState('');
    const[loading,setLoading] = useState(false);
useEffect(()=>{fetchTasks();},[]);

const fetchTasks = async() =>{
    try{
    const response = await fetch('http://localhost:8000/tasks');
    const data = await response.json();
    setTasks(data.tasks);
    }catch(error){
        console.error('Error fetching tasks: ',error);
    }

};
const handleAddTask = async(e) =>{
    e.preventDefault();
    if(!(input.trim)){
        return;
    }
    setLoading(true);
    try{
        const response =  await fetch(`http://localhost:8000/tasks?title=${encodeURIComponent(input)}`, {
        method: 'POST',
      });
      const newTask = await response.json();
      setTasks([...tasks,newTask]);
      setInput('');
    }
    catch(error){
        console.error('Error loading task',error);
    }
    finally{
        setLoading(false);
    }
};
return(
     <div className="App">
      <h1>Task Manager</h1>

      <form onSubmit={handleAddTask}>
       <input 
       type ="text"
       value = {input}
       onChange={(e) => setInput(e.target.value)}
       placeholder="Add a new task ..."
       />
       <button type = "submit" disabled = {loading}>
        {loading ? 'Adding...':'Add Task'}

       </button>

      </form>
      <ul>
        {tasks.map((task)=>(
            <li key = {task.id}>
                {task.title}
            </li>
        ))}
      </ul>

     </div>


);

}

export default App;



