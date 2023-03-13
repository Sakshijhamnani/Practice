import React from "react";


export default function TodoList({todos,setTodos,count,setCount}){
    
    const handleComplete =(todo)=>{
        setCount(count-1);
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                   return{...item,completed:!item.completed};
                }
               return item; 
            })
        )
    } 

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=> todo.id!==id));
    };
    return(
    <div>
        {
            todos.map((todo) =>  (
               <li className="list-item" key={todo.id}>
                 <input type="text" 
                 value={todo.title} 
                 className={`list ${todo.completed ? "complete" : ""}`}
                 onChange={(event)=>event.preventDefault()} />

            <div>
            <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>
               
                Complete
            </button>
            <button className="button-delete task-button" onClick={()=> handleDelete(todo)}>
                Delete 
            </button>
             </div>
            </li> 
            )
            )
            
        }
        
    </div>
    )
}