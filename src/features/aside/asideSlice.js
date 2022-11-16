import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: [],
  isOpen: true,
  isLoading: true,
};

const asideSlice = createSlice({
  name: 'aside',
  initialState,
});

export default asideSlice.reducer;
