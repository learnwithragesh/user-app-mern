import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: undefined
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { add } = userSlice.actions;

export const getUser = (state) => state.user;

export default userSlice.reducer;