import { DISPLAY_LOADING } from "features/movies/action";
import { HIDE_LOADING } from "features/movies/action";

const initialState = {
  IsLoading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_LOADING": {
      state.IsLoading = true;
      return { ...state };
    }
    case "HIDE_LOADING":
      state.IsLoading = false;
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
