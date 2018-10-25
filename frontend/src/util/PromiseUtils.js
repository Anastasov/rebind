export const promiseTo = func => new Promise(() => func());
export const promiseToReturn = response =>
  new Promise(resolve => resolve(response));
export const promiseToThrow = error => Promise.reject(error);
export const returnAfter = supllier => Promise.resolve(supllier());
export const resolveAfter = supllier => {
  supllier();
  return null;
};
