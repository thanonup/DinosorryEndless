import { configureStore } from "@reduxjs/toolkit";
import stateSlice from './Reducer'
import { TypedUseSelectorHook , useSelector , useDispatch} from "react-redux";

export const store = configureStore({
    reducer : {
        currentGameState : stateSlice
    }
})

export const useAppDispathch : ()=> typeof store.dispatch=useDispatch
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
export default store

