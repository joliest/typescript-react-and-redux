import { combineReducers } from 'redux';
import { Todo } from '../actions';
import { todosReducer } from './todosReducer';

// describes the state of the reducers
export interface StoreState {
  todos: Todo[];
}

// this will help us to catch the error when reducer fails to return the correct type
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
