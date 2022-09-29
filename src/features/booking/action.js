import instance from "api/instance";

export const SET_MOVIES = "booking/SET_MOVIES";
export const SET_MOVIELIST = "booking/SET_MOVIELIST";
export const SET_SELECTED_MOVIE = "booking/SET_SELECTED_MOVIE";
export const SET_CINEMAS = "booking/SET_CINEMAS";
export const SET_CINEMA = "booking/SET_CINEMA";
export const SET_SCHEDULE = "booking/SET_SCHEDULE";
export const SET_CAROUSEL = "booking/SET_CAROUSEL";
export const SET_MOVIEINFO = "booking/SET_MOVIEINFO";
export const SET_THEATER = "booking/SET_THEATER";
export const SET_FILM_SAP_CHIEU = "booking/SET_FILM_SAP_CHIEU";
export const SET_FILM_DANG_CHIEU = "booking/SET_FILM_DANG_CHIEU";

//async action
export const fetchMoviesAction = (config, cb) => {
  return async (dispatch) => {
    try {
      console.log("call api in thunk");
      const res = await instance.request({
        url: "/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
        method: "GET",
        params: {
          maNhom: "GP02",
          soTrang: config.currentPage,
          soPhanTuTrenTrang: config.pageSize,
        },
      });
      cb(res.data.content.totalCount);
      dispatch({
        type: SET_MOVIES,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};

export const fetchMovieListAction = () => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyPhim/LayDanhSachPhim",
        method: "GET",
        params: {
          maNhom: "GP02",
        },
      });

      dispatch({
        type: SET_MOVIELIST,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};

export const fetchMovieDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyPhim/LayThongTinPhim",
        method: "GET",
        params: {
          MaPhim: id,
        },
      });

      dispatch({
        type: SET_SELECTED_MOVIE,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchMovieCinemaAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyRap/LayThongTinLichChieuPhim",
        method: "GET",
        params: {
          MaPhim: id,
        },
      });
      dispatch({
        type: SET_CINEMA,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};

export const fetchCinemasAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/QuanLyRap/LayThongTinHeThongRap?maNhom02",
      method: "GET",
    });

    dispatch({
      type: SET_CINEMAS,
      payload: res.data.content,
    });
    return res.data.content;
  } catch (err) {}
};

export const fetchMovieScheduleAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
        method: "GET",
        params: {
          maHeThongRap: id,
          maNhom: "GP02",
        },
      });

      dispatch({
        type: SET_SCHEDULE,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};

export const fetchMovieCarouselAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
    });

    dispatch({
      type: SET_CAROUSEL,
      payload: res.data.content,
    });

    return res.data.content;
  } catch (err) {}
};

export const fetchMovieTheaterAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02",
      method: "GET",
      params: {
        maNhom: "GP02",
      },
    });

    dispatch({
      type: SET_THEATER,
      payload: res.data.content,
    });
    console.log(res.data.content);
    return res.data.content;
  } catch (err) {}
};
