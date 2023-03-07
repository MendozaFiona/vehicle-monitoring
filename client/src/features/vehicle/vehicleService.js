import axios from "axios";

const API_URL = "/api/vehicles/";

// add vehicle
const addVehicle = async (vehicleData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, vehicleData, config);

  return response.data;
};

// get user vehicles
const getVehicles = async (token) => {
  // please add filters
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // not final, need filters
  const response = await axios.get(API_URL, config);

  return response.data;
};

// update vehicle
const updateVehicle = async (vehicleData, token) => {
  const { vehicleId } = vehicleData;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + vehicleId, vehicleData, config);

  return response.data;
};

// delete vehicle
const deleteVehicle = async (vehicleId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + vehicleId, config);

  return response.data;
};

const vehicleService = {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};

export default vehicleService;
