// Function to format number with commas

export const formatNumberWithCommas = (value: number | string) => {
  const stringValue = typeof value === "number" ? value.toFixed(2) : value;
  return stringValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
