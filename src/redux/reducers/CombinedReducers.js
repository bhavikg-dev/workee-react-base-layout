import { combineReducers } from "redux";

import AccountReducers from "./AccountReducers";
import NavigationReducers from "./NavigationReducers";

const appReducer = combineReducers({
  accountData: AccountReducers,
  navigationData: NavigationReducers,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
