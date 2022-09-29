import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import bookingReducer from "features/booking/bookingSlice";
import authReducer from "features/authentication/authSlice";
import movieReducer from "features/movies/movieSlice";
import loadingReducer from "common/components/componentSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  booking: bookingReducer,
  auth: authReducer,
  movies: movieReducer,
  loading: loadingReducer,
});

// middleware: lưu log những action đc gửi lên store
const logger = (state) => {
  return (next) => {
    return (action) => {
      // xử lý action
      const actionList = localStorage.getItem("actionList");
      if (!actionList) {
        localStorage.setItem("actionList", JSON.stringify([action]));
      } else {
        const actionListArr = JSON.parse(actionList);
        actionListArr.push(action);
        localStorage.setItem("actionList", JSON.stringify(actionListArr));
      }
      console.log(action, "logger");
      next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
