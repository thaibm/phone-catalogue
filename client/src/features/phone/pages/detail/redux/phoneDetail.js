/*  eslint no-param-reassign: "error" */
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { getPhoneDetail, updatePhone } from 'src/features/redux/api/phoneApi';

export const fetchPhoneDetail = createAsyncThunk(
  'phones/fetchPhoneDetail',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getPhoneDetail(id);
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

export const UpdatePhone = createAsyncThunk(
  'phone/updatePhone',
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await updatePhone({ id, payload });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const defaultValue = {
  loading: 'idle',
  error: null,
  phone: null,
  projectId: null
};
export const phoneDetailSlice = createSlice({
  name: 'phoneDetail',
  initialState: {
    loading: 'idle',
    error: null,
    phone: null,
    projectId: null
  },
  reducers: {
    resetDetail: () => (defaultValue)
  },
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
    builder
      .addCase(UpdatePhone.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(UpdatePhone.fulfilled, (state) => {
        state.loading = 'fulfilled';
        state.error = null;
      })
      .addCase(UpdatePhone.rejected, (state) => {
        state.loading = 'rejected';
        state.error = {
          message: 'Error while update phone'
        };
      });
  }
});

export default phoneDetailSlice.reducer;
