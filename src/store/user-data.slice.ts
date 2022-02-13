import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

type UserData = {
  email: string;
  password: string;
};

const initialState: UserData = {
  email: '',
  password: '',
};

export const authDataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setUserEmail, setUserPassword } = authDataSlice.actions;

export const userEmail = (state: RootState) => state.userdata.email;
export const userPassword = (state: RootState) => state.userdata.password;

export default authDataSlice.reducer;
