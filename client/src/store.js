import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user/userSlice";
import vehicleReducer from "./reducer/vehicle/vehicleSlice";
import typeReducer from "./reducer/type/typeSlice";
import dispatchReducer from "./reducer/dispatch/dispatchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicles: vehicleReducer,
    types: typeReducer,
    dispatch: dispatchReducer,
  },
});
