import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const initialState = {
  tasks : []
};

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      };
      default:
        return state;
  }
}

const store = createStore(tasksReducer);

store.dispatch(addTask('Storeを学ぶ'));


console.log(store.getState());
