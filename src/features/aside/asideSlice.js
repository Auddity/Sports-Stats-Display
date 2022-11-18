import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;
const API_API_KEY = process.env.API_API_KEY;

const initialState = {
  players: [],
  isOpen: true,
  isLoading: true,
};

const options = {
  method: 'GET',
  url: 'https://americanfootballapi.p.rapidapi.com/api/american-football/team/4388',
  headers: {
    'X-RapidAPI-Key': 'f75c352fa1msh6755d6ae935e6e4p1cf8f2jsnaa37ffdb1d2b',
    'X-RapidAPI-Host': 'americanfootballapi.p.rapidapi.com',
  },
};

const asideSlice = createSlice({
  name: 'aside',
  initialState,
});

export default asideSlice.reducer;
