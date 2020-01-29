import { combineReducers } from "redux";

export default combineReducers({
  hanvingFun: havingFunReducer
});

function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
