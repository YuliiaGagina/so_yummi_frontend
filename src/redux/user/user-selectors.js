const getIsLoggedIn = (state) => state.user.isLOgedIn;
const getUserName = (state) => state.user.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};
export default authSelectors;
