// users reducer
export default function applications(state = {}, action) {
  switch (action.type) {
    case "USER_VERIFY_SUCCESS":
      return {
        isVerified: true
      };
      break;

    // initial state
    default:
      return {
        isVerified: false
      };
  }
}
