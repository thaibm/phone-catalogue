/*  eslint no-param-reassign: "error" */
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { getPhoneList, deletePhone as deletePhoneAPI } from 'src/features/redux/api/phoneApi';

export const fetchPhone = createAsyncThunk(
  'phones/fetchPhones',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPhoneList();
      return response.data.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue({
        message: 'Failed to fetch phones',
        description: err.message
      });
    }
  }
);

export const deletePhone = createAsyncThunk(
  'phone/deletePhone',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deletePhoneAPI(id);
      return response.data;
    } catch (err) {
      return rejectWithValue({
        message: 'Failed to fetch phone',
        description: err.message
      });
    }
  }
);

export const phoneSlice = createSlice({
  name: 'phoneList',
  initialState: {
    loading: 'idle',
    error: null,
    phones: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhone.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchPhone.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.error = null;
        state.phones = action.payload;
      })
      .addCase(fetchPhone.rejected, (state) => {
        state.loading = 'rejected';
        state.error = {
          message: 'Error while fetching phones'
        };
      });
    builder
      .addCase(deletePhone.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(deletePhone.fulfilled, (state) => {
        state.loading = 'fulfilled';
        state.error = null;
      })
      .addCase(deletePhone.rejected, (state) => {
        state.loading = 'rejected';
        state.error = {
          message: 'Error while delete phones'
        };
      });
  }
});

export default phoneSlice.reducer;
