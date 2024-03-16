import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
export interface KanbasState {
    modulesReducer: {
        modules: any[];
        newModule: any;
    }
}

const store = configureStore({
    reducer: {
        modulesReducer
    }
});

export default store;