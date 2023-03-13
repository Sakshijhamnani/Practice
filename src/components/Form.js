
import React  from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Form({input,setInput,todos,setTodos,count,setCount}){

    function onInputChange(event){
        
        setInput(event.target.value);
    }
    function onFormSubmit(event){
        setCount(count+1);
        event.preventDefault();
        setTodos([...todos , {id: uuidv4() ,title : input ,completed:false}])
        setInput("")
    }

    

    return(
       <form onSubmit={onFormSubmit}>
        <input type="text" 
        className='task-input' 
        placeholder='Add a new task'
        value={input} required 
        onChange={onInputChange}/>
        <button className='button-add' type='submit'>Submit</button>
       </form>
    )
}