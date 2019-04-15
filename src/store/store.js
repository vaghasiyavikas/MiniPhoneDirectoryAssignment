import { applyMiddleware, createStore } from 'redux';
import todos from '../reducers';
import logger from 'redux-logger';
export const store = createStore(
  todos,
  applyMiddleware(
    logger,
  ),
);
