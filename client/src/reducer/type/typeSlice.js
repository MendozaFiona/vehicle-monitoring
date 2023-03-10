import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import typeService from "./typeService";

const initialState = {
  vehicleTypes: [],
  fuelTypes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get vehicle types
export const getVehicleTypes = createAsyncThunk(
  "vehicles/getVehicle",
  async (_, thunkAPI) => {
    try {
      return await typeService.getVehicleTypes();
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

// get fuel types
export const getFuelTypes = createAsyncThunk(
  "types/getFuel",
  async (_, thunkAPI) => {
    try {
      return await typeService.getFuelTypes();
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

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVehicleTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicleTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicleTypes = action.payload;
      })
      .addCase(getVehicleTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getFuelTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFuelTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.fuelTypes = action.payload;
      })
      .addCase(getFuelTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = typeSlice.actions;
export default typeSlice.reducer;
