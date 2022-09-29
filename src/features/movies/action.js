import instance from "api/instance";
import { ThongTinDatVe } from "_core/module/ThongTinDatVe";

export const SET_TICKET_ROOM = "movies/SET_TICKET_ROOM";
export const SET_BOOKING = "movies/SET_BOOKING";
export const DAT_VE = "movies/DAT_VE";
export const DAT_VE_HOAN_TAT = "movies/DAT_VE_HOAN_TAT";
export const displayLoadingAction = {
  type: "DISPLAY_LOADING",
};

export const hideLoadingAction = {
  type: "HIDE_LOADING",
};

export const CHUYEN_TAB = "movies/CHUYEN_TAB";
export const fetchRoomTicketAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const res = await instance.request({
        url: "/api/QuanLyDatVe/LayDanhSachPhongVe",
        method: "GET",
        params: {
          MaLichChieu: id,
        },
      });
      console.log(res.data.content);

      dispatch({
        type: SET_TICKET_ROOM,
        payload: res.data.content,
      });
      await dispatch(hideLoadingAction);

    } catch (err) {
      dispatch(hideLoadingAction);

      console.log(err.response?.data);
    }
  };
};

export const fetchBookingAction = (thongTinDatVe) => {
  return async (dispatch) => {
    console.log(JSON.stringify(thongTinDatVe));
    try {
      dispatch(displayLoadingAction);

      const res = await instance.request({
        url: "/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: thongTinDatVe,
      });
      await dispatch(fetchRoomTicketAction(thongTinDatVe?.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(hideLoadingAction);
      await dispatch({ type: CHUYEN_TAB });
      console.log(res.data.content);
    } catch (err) {
      dispatch(hideLoadingAction);
      console.log(err.response?.data);
    }
  };
};
