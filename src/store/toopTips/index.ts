import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "message",
  },
  reducers: {},
});
export default messageSlice.reducer