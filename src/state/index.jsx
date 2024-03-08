import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    places(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        city: action.payload.city,
      });
    },
  },
});

export const { places } = globalSlice.actions;
export default globalSlice.reducer;
