export const getWindowWidth = () => Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0,
);

export default getWindowWidth;
