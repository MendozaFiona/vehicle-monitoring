import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dispatchService from "./dispatchService";

const initialState = {
  dispatches: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// add dispatch
export const addDispatch = createAsyncThunk(
  "dispatch/create",
  async (dispatchData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await dispatchService.addDispatch(dispatchData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get dispatches
export const getDispatches = createAsyncThunk(
  "dispatch/getAll",
  async (params, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await dispatchService.getDispatches(params, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// update dispatch
export const updateDispatch = createAsyncThunk(
  "dispatch/update",
  async (dispatchData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await dispatchService.updateDispatch(dispatchData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const dispatchSlice = createSlice({
  name: "dispatch",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDispatch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDispatch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dispatches.push(action.payload);
      })
      .addCase(addDispatch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getDispatches.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDispatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dispatches = action.payload;
      })
      .addCase(getDispatches.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateDispatch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDispatch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateDispatch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = dispatchSlice.actions;
export default dispatchSlice.reducer;
