import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';
import { RootState } from './types/stateTypes.js';

// Define Redux DevTools extension type
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Setup Redux DevTools Extension
const composeEnhancers: typeof compose =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create the Redux store with thunk middleware
const configureStore = (initialState?: Partial<RootState>) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({})))
  );

  return store;
};

export default configureStore;
