export const paramsBuilder = (data) => {
  const params = `?${Object.entries(data)
    .map(([key, value]) => {
      if (value !== "") {
        return `${key}=${value}&&`;
      }
      return null;
    })
    .join("")}`;
  return params.slice(0, -2);
};
