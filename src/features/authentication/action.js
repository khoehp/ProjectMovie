import instance from "api/instance";
import { useHistory } from "react-router-dom";

export const SET_PROFILE = "auth/SET_PROFILE";
// const history = createBrowserHistory();
export const fetchProfileAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
    });

    dispatch({
      type: SET_PROFILE,
      payload: res.data.content,
    });
   
  } catch (err) {
    console.log(err);
  }
};
