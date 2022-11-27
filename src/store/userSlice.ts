import { createSlice } from "@reduxjs/toolkit";

interface isUserData {
  token: string;
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
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
    setUserData: (state, data) => {
      state.id = data.payload.id;
      state.email = data.payload.email;
      state.firstName = data.payload.firstName;
      state.lastName = data.payload.lastName;
    },
  },
});

export const { setUserToken, resetUserToken, setUserData } = userSlice.actions;
export default userSlice.reducer;
