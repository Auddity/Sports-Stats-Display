import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  players: [],
  isOpen: true,
  isLoading: true,
};

console.log('testing');

const asideSlice = createSlice({
  name: 'aside',
  initialState,
});

export default asideSlice.reducer;
