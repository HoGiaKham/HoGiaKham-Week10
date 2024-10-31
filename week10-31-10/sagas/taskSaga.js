import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_TASKS_REQUEST, fetchTasksSuccess } from '../actions/taskActions';

// Simulated API call for fetching tasks
const fetchTasksFromApi = async () => {
    return [
        { id: '1', title: 'Check email', completed: false },
        { id: '2', title: 'UI task web page', completed: false },
        { id: '3', title: 'Learn JavaScript basics', completed: false },
    ];
};

// Saga to handle fetching tasks
function* fetchTasks() {
    try {
        const tasks = yield call(fetchTasksFromApi);
        yield put(fetchTasksSuccess(tasks));
    } catch (error) {
        console.error('Fetch tasks failed', error);
    }
}

// Watcher saga
export function* watchTaskActions() {
    yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
}
