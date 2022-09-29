import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listUser: [],
  num: 0,
};

export const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    getList: (state, action) => {
      console.log(action);
      state.listUser = [{email:'luis@gmail.com'}]
    },
  },
});

export const { getList } = listSlice.actions;
export default listSlice.reducer;
