import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  listUser: [],
  num: 0,
};

export const getListAsync = createAsyncThunk(
  "list/getListAsync",
  async (page) => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${page}`
    ).then((data) => data.json());
    //   const data = await response.json();
    return response.data;
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    getList: (state, action) => {
      console.log(action);
      state.listUser = [{ email: "luis@gmail.com" }];
    },
  },
  extraReducers: {
    [getListAsync.fulfilled]: (state, action) => {
      state.listUser = action.payload;
    },
  },
});

export const { getList } = listSlice.actions;
export default listSlice.reducer;
