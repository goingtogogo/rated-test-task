export const spacify = (x: string) => {
  if (!x) return "";
  const parts = x.toString().split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return parts.join(".");
};
