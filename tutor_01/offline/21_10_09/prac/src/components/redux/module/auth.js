import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

const LOG_IN = "LOG_IN";

// action creators

const logIn = createAction(LOG_IN, (info) => ({ info }));

// initialState
const initialState = {
  info: {
    id: "",
    name: "",
    age: 0,
    phone: "",
  },
};

// reducer
export default handleActions(
  {
    [LOG_IN]: () => {},
    // [SET_USER]: (state, action) =>
    //   produce(state, (draft) => {
    //     //TODO 강사는 쿠키값을 보면 user_id가 없음에도 불구하고 로그인후 화면이 뜬다 나는 로그인전화면이 뜬다
    //     // setCookie("user_id", JSON.stringify(action.payload.user));
    //     draft.user = action.payload.user;
    //     draft.is_login = true;
    //   }),
    // [LOG_OUT]: (state, action) =>
    //   produce(state, (draft) => {
    //     deleteCookie("is_login");
    //     draft.user = null;
    //     draft.is_login = false;
    //   }),
    // [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export

const actionCreators = {
  logIn,
};

export { actionCreators };
