// Action Types
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const ADD_TASK = 'ADD_TASK';

// Action Creators
export const fetchTasks = () => ({ type: FETCH_TASKS_REQUEST });
export const fetchTasksSuccess = (tasks) => ({
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
});
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});
