import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  passingLeaders: [],
  isOpen: true,
  isLoading: true,
};

export const getPassingLeaders = createAsyncThunk(
  'aside/getPassingLeaders',
  async (_, thunkAPI) => {
    try {
      const options = {
        method: 'GET',
        url: 'http://localhost:8000/aside',
      };

      const res = await axios.request(options);
      return res.data.topPlayers.passingTouchdowns;
    } catch (err) {
      return thunkAPI.rejectWithValue(`Check Error: ${err.response}`);
    } finally {
    }
  }
);

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  extraReducers: {
    [getPassingLeaders.pending]: state => {
      state.isLoading = true;
    },
    [getPassingLeaders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.passingLeaders = action.payload;
    },
    [getPassingLeaders.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export default asideSlice.reducer;
