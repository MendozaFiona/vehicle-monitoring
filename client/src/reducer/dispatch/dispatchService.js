import axios from "axios";

const API_URL = "/api/dispatch/";

// add dispatch
const addDispatch = async (dispatchData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, dispatchData, config);

  return response.data;
};

// get user dispatches
const getDispatches = async (params, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = params ? API_URL + `?${params}` : API_URL;
  const response = await axios.get(url, config);

  return response.data;
};

// update dispatch
const updateDispatch = async (dispatchData, token) => {
  const { id } = dispatchData;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, dispatchData, config);

  return response.data;
};

const dispatchService = {
  getDispatches,
  addDispatch,
  updateDispatch,
};

export default dispatchService;
