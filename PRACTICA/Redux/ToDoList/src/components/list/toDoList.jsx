import React , {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/toDoSlice";
import ToDoItem from "../item/toDoItem";
import '../../assets/styles/components/toDoList.css'

const ToDoList = ()=>{
    const [text, setText] = useState('');
    const tasks = useSelector(state => state.toDo.tasks);
    const dispatch = useDispatch();

    const handleAddTask = ()=>{
        if(text.trim()){
            dispatch(addTask({id: Date.now(), text, completed:false}));
            setText('');
        }
    }

    return(
        <>
            <div className="container__list">
                <h1 className="container__list-title">TASK LIST</h1>
                <input className="container__list-input-text"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a task"
                >
                </input>
                <button className="container__list-add" onClick={handleAddTask}>Add</button>
                <div className="container__list-item">
                    {tasks.map(task =>(
                        <ToDoItem
                        key={task.id}
                        task={task}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToDoList;