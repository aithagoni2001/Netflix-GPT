import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name : "movies",
    initialState :{
        nowPlayingMovies : [],
        backgroundTrailer : null,
    },
    reducers :{
        addNowPlayingMovies:(state,action)=>{
            // console.log(action.payload);
         state.nowPlayingMovies= action.payload
        },
        addBackgroundTrailer:(state,action)=>{
            state.backgroundTrailer = action.payload
        }
    }
})

export const {addNowPlayingMovies,addBackgroundTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;