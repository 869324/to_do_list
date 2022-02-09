import { ADD_TASK, EDIT_TASK, DELETE_TASK, MARK_COMPLETE } from './types';
//actions

export function addTask(task) {
    return {
        type: ADD_TASK,
        task: task
    }
}

export function editTask(task) {
    return {
        type: EDIT_TASK,
        task: task
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        taskId: taskId
    }
}

export function markComplete(taskId, status) {
    return {
        type: MARK_COMPLETE,
        taskId: taskId,
        status: status
    }
}

//Reducer
const initialState = [];

export const todoReducer = ((state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newState = [...state];
            newState.push(action.task);
            return newState

        case EDIT_TASK: {
            const newState = [...state];
            const index = newState.find(task => task.taskId == action.task.taskId);
            newState.splice(index, 1, action.task);
            return newState;
        }

        case DELETE_TASK: {
            console.log(action.taskId)
            const newState = [...state];
            const index = newState.indexOf(newState.find(task => task.taskId == action.taskId));
            newState.splice(index, 1);
            return newState;
        }

        case MARK_COMPLETE: {
            const newState = [...state];
            const index = newState.indexOf(newState.find(task => action.taskId == task.taskId));
            const task = newState[index];
            task.completed = action.status;
            newState.splice(index, 1, task);
            return newState;
        }

        default:
            return [...state];
    }
});


