import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, usersAddEdit, usersDelete, userVerify, applicationSubmit, completeApplicationSubmit  } from "./users";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
    fork(takeLatest, 'USERS_VERIFY', userVerify),
    fork(takeLatest, 'APPLICATION_SUBMIT', applicationSubmit),
    fork(takeLatest, 'COMPLETE_APPLICATION_SUBMIT', completeApplicationSubmit)

  ];
}
