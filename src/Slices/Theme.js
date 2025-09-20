import { createSlice } from '@reduxjs/toolkit'

let initialState = false;

const screenThemeSlice = createSlice({
  name: 'screenTheme',
  initialState,
  reducers: {
    changeTheme(state) {
      return !state;  // toggles true/false
    },
  },
});

export const { changeTheme } = screenThemeSlice.actions;
export default screenThemeSlice.reducer;
