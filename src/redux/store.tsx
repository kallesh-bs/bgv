import { AnyAction, applyMiddleware, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import reducer from "./reducers";

// const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
