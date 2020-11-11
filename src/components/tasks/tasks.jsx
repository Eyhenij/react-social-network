import React from "react";
import s from './tasks.module.css';
import TaskList from './taskList/taskList'



const Tasks = (props) => {

    const onAddTask = () => {
        props.addTask();
    }

    let onTaskChange = (event) => {
        let taskText = event.target.value;
        props.updateNewTaskText(taskText);
    }

    return (
        <div className='list'>
            <div className='list__item'>
                <TaskList arrListData={props.tasksPage.arrListData} />
            </div>
            <div>
                <textarea
                    value={props.tasksPage.newTaskText}
                    placeholder='please, enter your message'
                    onChange={onTaskChange}
                />
            </div>
            <div>
                <button onClick={onAddTask}>Add task</button>
            </div>
        </div>
    );
}

export default Tasks;
