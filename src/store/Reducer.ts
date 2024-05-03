import { PayloadAction, createSlice , current } from "@reduxjs/toolkit";

enum GameState {
    Menu,
    GamePlay,
    GameOver,
}

export interface currentGameState{
    gameState : GameState
}


const initialState : currentGameState = {
    gameState : GameState.Menu
}

const stateSlice = createSlice({
    name : "GameState",
    initialState,
    reducers : {
        changeState: (state , action: PayloadAction<{ gameState : GameState}>) => {
            state.gameState = action.payload.gameState
            console.log(current(state))
        }
    }
})

export const { changeState } = stateSlice.actions
export default stateSlice.reducer