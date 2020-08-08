export const isEmpty = (obj) =>
  obj.constructor === Object && Object.entries(obj).length === 0;
