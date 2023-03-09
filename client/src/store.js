import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user/userSlice";
import vehicleReducer from "./reducer/vehicle/vehicleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicles: vehicleReducer,
  },
});
