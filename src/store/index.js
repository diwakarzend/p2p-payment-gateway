import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const composeEnhancers = compose;

const api = 1;

export default function configureStore(initialState) {
  const middlewares = [thunkMiddleware.withExtraArgument(api)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, initialState, composeEnhancers(middlewareEnhancer));
  return store;
}
