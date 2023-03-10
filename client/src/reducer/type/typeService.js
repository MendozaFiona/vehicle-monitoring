import axios from "axios";

const API_URL = "/api/types/";

// get vehicle types
const getVehicleTypes = async () => {
  const response = await axios.get(API_URL + "vehicle");
  return response.data;
};

// get fuel types
const getFuelTypes = async () => {
  const response = await axios.get(API_URL + "fuel");
  return response.data;
};

const typeService = {
  getVehicleTypes,
  getFuelTypes,
};

export default typeService;
