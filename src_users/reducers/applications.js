// users reducer
export default function applications(state = {}, action) {
  switch (action.type) {
    case "USERS_VERIFY_SUCCESS":
      return state;
      break;

    // initial state
    default:
      return state;
  }
}
