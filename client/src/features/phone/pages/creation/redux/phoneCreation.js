/*  eslint no-param-reassign: "error" */
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

export const createNewPhone = createAsyncThunk(
  'phones/fetchPhoneDetail',
  async (payload, { rejectWithValue }) => {
    try {
      return payload;
    } catch (err) {
      console.error(err);
      return rejectWithValue({
        message: 'Failed to create phone',
        description: err.message
      });
    }
  }
);

export const phoneCreationSlice = createSlice({
  name: 'phoneCreation',
  initialState: {
    loading: 'idle',
    error: null,
    phone: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewPhone.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(createNewPhone.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.error = null;
        state.phone = action.payload;
      })
      .addCase(createNewPhone.rejected, (state) => {
        state.loading = 'rejected';
        state.error = {
          message: 'Error while creating phone'
        };
      });
  }
});

export default phoneCreationSlice.reducer;
