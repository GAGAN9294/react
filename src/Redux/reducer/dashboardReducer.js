import { SET_DASHBOARD_DATA } from "../../Utils/constants";

const initialState = {
  dashboardData: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
