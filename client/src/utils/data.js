export const vehicleTypeOptions = [
  { id: 1, name: "SUV" },
  { id: 2, name: "Sedan" },
  { id: 3, name: "Minivan" },
  { id: 4, name: "Pickup Truck" },
];

export const fuelTypeOptions = [
  { id: 1, name: "gasoline" },
  { id: 2, name: "diesel" },
];

export const initialVehicleData = {
  platenum: "",
  brand: "",
  model: "",
  year: "",
  vehicle_type: "",
  vehicle_capacity: "",
  fuel_type: "",
  fuel_tank: "",
};

export const loginformData = [
  {
    label: "Email",
    name: "email",
    dataType: "text",
    inputType: "input",
  },
  {
    label: "Password",
    name: "password",
    dataType: "password",
    inputType: "input",
    autoComplete: "off",
  },
];

export const vehicleformData = [
  [
    {
      label: "Plate Number",
      name: "platenum",
      dataType: "text",
      inputType: "input",
    },
    {
      label: "Brand",
      name: "brand",
      dataType: "text",
      inputType: "input",
    },
  ],
  [
    {
      label: "Model",
      name: "model",
      dataType: "text",
      inputType: "input",
    },
    {
      label: "Year",
      name: "year",
      dataType: "number",
      min: "1900",
      max: "2099",
      step: "1",
      inputType: "input",
    },
  ],
  [
    {
      label: "Vehicle Type",
      name: "vehicle_type",
      inputType: "select",
      options: vehicleTypeOptions,
    },
    {
      label: "Vehicle Capacity (kg)",
      name: "vehicle_capacity",
      dataType: "number",
      step: "any",
      inputType: "input",
    },
  ],
  [
    {
      label: "Fuel Type",
      name: "fuel_type",
      inputType: "select",
      options: fuelTypeOptions,
    },
    {
      label: "Fuel Tank (L)",
      name: "fuel_tank",
      dataType: "number",
      step: "any",
      inputType: "input",
    },
  ],
];
