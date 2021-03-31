/*  eslint no-param-reassign: "error" */
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { getPhoneDetail } from 'src/features/redux/api/phoneApi';

export const fetchPhoneDetail = createAsyncThunk(
  'phones/fetchPhoneDetail',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await Promise.resolve(getPhoneDetail(id));
      return response;
    } catch (err) {
      console.error(err);
      return rejectWithValue({
        message: 'Failed to fetch phones',
        description: err.message
      });
    }
  }
);

export const phoneDetailSlice = createSlice({
  name: 'phoneDetail',
  initialState: {
    loading: 'idle',
    error: null,
    phone: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhoneDetail.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchPhoneDetail.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.error = null;
        state.phone = action.payload;
      })
      .addCase(fetchPhoneDetail.rejected, (state) => {
        state.loading = 'rejected';
        state.error = {
          message: 'Error while fetching phone'
        };
      });
  }
});

export default phoneDetailSlice.reducer;
