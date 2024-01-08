import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments : [],
    totalComments : 0,
}

const commentSlice = createSlice({
    name : "comment",
    initialState : initialState,

    reducers : {
        addComment : (state, action)=>{
            const newCommnet = action.payload;

            state.comments.push({
                id : newCommnet.id,
                comment : newCommnet.comment,
                rating : newCommnet.rating,
            })
        },
        deleteComment : (state, action)=>{
            const id = action.payload;
            state.comments = state.comments.filter((comment)=>comment.id!== id)
        }

    }
})

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;