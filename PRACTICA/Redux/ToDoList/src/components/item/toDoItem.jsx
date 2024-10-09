import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, completedTask } from "../../redux/slices/toDoSlice";
import '../../assets/styles/components/toDoItem.css'
const ToDoItem = ({task}) =>{
    const dispatch = useDispatch();

    return(
        <>
            <div className="container__item">
                <input className="container__item-check"
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(completedTask({id:task.id}))}
                ></input>
                <h3 container__item-text>{task.text}</h3>
                <button className="container__item-delete"
                onClick={()=> dispatch(deleteTask({id:task.id}))}
                >Eliminar</button>
            </div>
        </>
    )
}

export default ToDoItem;