// users reducer
export default function applications(state = {}, action) {
  switch (action.type) {
    case "USER_VERIFY_SUCCESS":
      return {
        isVerified: true,
        isLoading: false
      };
      break;
      case "APPLICATION_SUBMIT":
      return {
        isLoading: true
      };
      break;
      case "APPLICATION_SUBMIT_SUCCESS":
      return {
        isLoading: false
      };
      break;
      case "COMPLETE_APPLICATION_SUBMIT":
      return {
        isLoading: true
      };
      break;
      case "COMPLETE_APPLICATION_SUBMIT_SUCCESS":
      return {
        isLoading: false
      };
      break;
    // initial state
    default:
      return {
        isVerified: false
      };
  }
}
