import React from "react";
import {addTaskActionCreator, updateNewTaskTextActionCreator} from "../../redux/reducers/tasksReducer";
import Tasks from "./tasks";


const TasksContainer = (props) => {

    let state = props.store.getState();

    const addTaskContainer = () => {
        props.store.dispatch(addTaskActionCreator());
    }

    let onTaskChangeContainer = (taskText) => {
        props.store.dispatch(updateNewTaskTextActionCreator(taskText));
    }

    return (
        <Tasks
            addTask={addTaskContainer}
            updateNewTaskText={onTaskChangeContainer}
            tasksPage={state.tasksPage}
        />
    );
}

export default TasksContainer;