export const reducer = function(state, action) {
  if (action.type === "LOGIN_USER") {
    return { ...state, number: state.number + 12 };
  }
};
