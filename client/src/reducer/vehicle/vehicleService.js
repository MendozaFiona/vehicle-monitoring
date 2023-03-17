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

// check if platenum exists
const checkPlatenum = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "check", data, config);

  return response.data;
};

// get user vehicles
const getVehicles = async (params, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = params ? API_URL + `?${params}` : API_URL;
  const response = await axios.get(url, config);

  return response.data;
};

// update vehicle
const updateVehicle = async (vehicleData, token) => {
  const { _id } = vehicleData;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + _id, vehicleData, config);

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
  checkPlatenum,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};

export default vehicleService;
