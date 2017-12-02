import { call, put } from "redux-saga/effects";
import ApiUsers from "../api/users";
import { push } from "react-router-redux";
// fetch the user's list
export function* usersFetchList(action) {
  // call the api to get the users list
  const users = yield call(ApiUsers.getList);
  usersFetchList;
  // save the users in state
  yield put({
    type: "USERS_LIST_SAVE",
    users: users
  });
}

// add/edit a user
export function* usersAddEdit(action) {
  // call the api to add/edit the user
  yield call(ApiUsers.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the user
  yield put({
    type: action.user.id ? "USERS_EDIT_SAVE" : "USERS_ADD_SAVE",
    user: action.user
  });

  // success
  action.callbackSuccess();
}

// delete a user
export function* usersDelete(action) {
  // call the api to delete the user
  yield call(ApiUsers.delete);

  // update the state by removing the user
  yield put({
    type: "USERS_DELETE_SAVE",
    user_id: action.user_id
  });
}

export function* userVerify(action) {
  yield call(ApiUsers.verify);

  yield put({
    type: "USER_VERIFY_SUCCESS"
  });
}

export function* applicationSubmit(action) {
  yield call(ApiUsers.submit);

  yield put({
    type: "APPLICATION_SUBMIT_SUCCESS"
  });

  yield put(push("/agent-application-list"));
}
