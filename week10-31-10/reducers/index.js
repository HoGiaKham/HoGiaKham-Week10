import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TASKS_SUCCESS':
            return action.payload;
        case 'ADD_TASK':
            return [...state, action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export default rootReducer;
