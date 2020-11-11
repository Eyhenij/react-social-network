const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

let initialState = {
    arrListData: [
        { id: 0, description: 'Сходить в магазин', completed: false },
        { id: 1, description: 'Помыть кота', completed: false },
        { id: 2, description: 'закончить тестовое задание', completed: false },
        { id: 3, description: 'Подготовить презентацию', completed: false },
        { id: 4, description: 'Посмотреть 100 лекций по react', completed: false }
    ],
    newTaskText: ''
};

const tasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: 5,
                description: state.newTaskText,
                completed: false
            };
            state.arrListData.push(newTask);
            state.newTaskText = '';
            return state;
        case UPDATE_NEW_TASK_TEXT:
            state.newTaskText = action.updateTask;
            return state;
        default:
            return state;
    }
}

export const addTaskActionCreator = () => {
    return {
        type: ADD_TASK
    }
}

export const updateNewTaskTextActionCreator = (taskText) => {
    return {
        type: UPDATE_NEW_TASK_TEXT,
        updateTask: taskText
    }
}

export default tasksReducer;