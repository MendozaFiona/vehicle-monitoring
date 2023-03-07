import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import vehicleReducer from "../features/vehicle/vehicleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicles: vehicleReducer,
  },
});
