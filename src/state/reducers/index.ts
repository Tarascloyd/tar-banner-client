import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import bannersReducer from './bannersReducer';
import focusReducer from './focusReducer';

const reducers = combineReducers({
  categories: categoriesReducer,
  banners: bannersReducer,
  focus: focusReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;