
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'userData',
    initialState: {
        categories: {
            data: [],
            loading: false,
        },
        users: {
            data: [],
            loading: false,
        },
    },

    reducers: {
        setCategoryData: (state, action) => {
            state.categories.loading = false;
            state.categories.data = action.payload;
        },
        setUserData: (state, action) => {
            state.users.loading = false;
            state.users.data = action.payload;
        },

    },
});


export const { setCategoryData, setUserData } = dataSlice.actions;

export default dataSlice.reducer;
