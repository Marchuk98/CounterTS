import {combineReducers, legacy_createStore} from "redux";
import {settingsReducer} from "./settings-reducer";
import {counterReducer} from "./counter-reducer";


export const rootReducer = combineReducers({
    settings:settingsReducer,
    counter:counterReducer
})


export const store = legacy_createStore(rootReducer)


export type AppRootStateType = ReturnType<typeof rootReducer>