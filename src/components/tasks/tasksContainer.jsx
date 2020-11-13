import React from "react";
import {addTaskActionCreator, updateNewTaskTextActionCreator} from "../../redux/reducers/tasksReducer";
import Tasks from "./tasks";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        tasksPage: state.tasksPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        addTask: () => {
            dispatch(addTaskActionCreator())
        },

        updateNewTaskText: (taskText) => {
            dispatch(updateNewTaskTextActionCreator(taskText))
        }
    }
};

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;