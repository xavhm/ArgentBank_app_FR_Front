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
  },
});

export const { setUserToken } = userSlice.actions;
export default userSlice.reducer;
