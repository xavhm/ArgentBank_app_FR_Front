import { createSlice } from "@reduxjs/toolkit";

interface isUserData {
  token: string;
}

const initialState: isUserData = {
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, token) => {
      state.token = token.payload;
    },
    resetUserToken: (state) => {
      state.token = "";
    },
  },
});

export const { setUserToken, resetUserToken } = userSlice.actions;
export default userSlice.reducer;
