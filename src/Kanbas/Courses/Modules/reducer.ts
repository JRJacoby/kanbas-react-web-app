import { createSlice } from '@reduxjs/toolkit';
import  { modules } from '../../Database';

const initialState = {
    modules: modules,
    newModule: { name: "New Module 123", description: "New Description" }
}

const moduleSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(module => module._id !== action.payload);
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map(module => module._id === action.payload._id ? action.payload : module);
        },
        setNewModule: (state, action) => {
            state.newModule = action.payload;
        }
    }
})

export const { addModule, deleteModule, updateModule, setNewModule } = moduleSlice.actions;
export default moduleSlice.reducer;