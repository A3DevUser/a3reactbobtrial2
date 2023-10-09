import rootReducer from "./reducers";

import { createStore } from "redux";
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store