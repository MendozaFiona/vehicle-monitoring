import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vehicleService from "./vehicleService";

const initialState = {
  vehicles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// add vehicle
export const addVehicle = createAsyncThunk(
  "vehicles/create",
  async (vehicleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await vehicleService.addVehicle(vehicleData, token);
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

// get vehicles
export const getVehicles = createAsyncThunk(
  "vehicles/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await vehicleService.getVehicles(token);
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

// updated vehicle
export const updateVehicle = createAsyncThunk(
  "vehicles/update",
  async (vehicleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await vehicleService.updateVehicle(vehicleData, token);
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

// delete vehicle
export const deleteVehicle = createAsyncThunk(
  "vehicles/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await vehicleService.deleteVehicle(id, token);
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

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles.push(action.payload);
      })
      .addCase(addVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles = action.payload;
      })
      .addCase(getVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles.push(action.payload);
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles = state.vehicles.filter(
          (vehicle) => vehicle._id !== action.payload.id
        );
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = vehicleSlice.actions;
export default vehicleSlice.reducer;
