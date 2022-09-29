import produce from "immer";
import {
  SET_CAROUSEL,
  SET_CINEMAS,
  SET_CINEMA,
  SET_MOVIES,
  SET_SCHEDULE,
  SET_SELECTED_MOVIE,
  SET_THEATER,
  SET_MOVIELIST,
  SET_FILM_SAP_CHIEU,
  SET_FILM_DANG_CHIEU,
} from "./action";

const initialState = {
  movies: null,
  movielist: null,
  selectedMovie: null,
  cinemas: null,
  cinema: null,
  schedule: null,
  carousell: null,
  theater: null,
  dangChieu: true,
  sapChieu: true,
};

// shallow
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      const nextState = produce(state, (draft) => {
        draft.movies = action.payload;
      });
      return nextState;
    }
    case SET_MOVIELIST: {
      const nextState = produce(state, (draft) => {
        draft.movielist = action.payload;
      });
      return nextState;
    }
    case SET_FILM_DANG_CHIEU: {
      const nextState = produce(state, (draft) => {
        draft.movielist = draft.payload.filter();
      });
      return nextState;
    }
    case SET_FILM_SAP_CHIEU: {
      const nextState = produce(state, (draft) => {
        draft.movielist = draft.payload;
      });
      return nextState;
    }
    case SET_CINEMA: {
      const nextState = produce(state, (draft) => {
        draft.cinema = action.payload;
      });
      return nextState;
    }
    case SET_SELECTED_MOVIE: {
      const nextState = produce(state, (draft) => {
        draft.selectedMovie = action.payload;
      });
      return nextState;
    }
    case SET_CINEMAS: {
      const nextState = produce(state, (draft) => {
        draft.cinemas = action.payload;
      });
      return nextState;
    }

    case SET_SCHEDULE: {
      const nextState = produce(state, (draft) => {
        draft.schedule = action.payload[0];
      });
      return nextState;
    }
    case SET_CAROUSEL: {
      const nextState = produce(state, (draft) => {
        draft.carousell = action.payload;
      });
      return nextState;
    }

    case SET_THEATER: {
      const nextState = produce(state, (draft) => {
        draft.theater = action.payload;
      });
      return nextState;
    }

    default:
      return state;
  }
};

export default reducer;
