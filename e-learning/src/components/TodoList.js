import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
const TodoList = ({todolist,deleteHandler}) =>{
    return (

        <div className="deladd">
            {todolist.map((todo,index)=>
            <div className="tops" key = {index}>
                <input class="form-check-input" type="checkbox" className="strikethrough" id="checkboxNoLabel" value="" aria-label="..."></input><label for= "packers" class="strikethrough">&nbsp;{todo} &nbsp; <button onClick={()=> deleteHandler(index)}><RiDeleteBin6Line/></button></label>
                
            </div>)}

        </div>
    )
}
export default TodoList