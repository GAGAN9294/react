import { combineReducers } from "redux";
import dashboardReducer from "../Redux/reducer/dashboardReducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
