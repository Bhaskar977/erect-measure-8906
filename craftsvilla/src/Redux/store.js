import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { reducer as productReducer } from "./Products/reducer";
import {reducer as cartReducer} from "./Cart/reducer"
import {reducer as authReducer} from "./authReducer/reducer"

const rootReducer = combineReducers({
    authReducer,productReducer,cartReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))