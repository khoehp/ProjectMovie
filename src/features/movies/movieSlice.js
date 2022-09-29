import produce from "immer";
import { ThongTinLichChieu } from "_core/module/ThongTinPhongVe";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_TICKET_ROOM } from "./action";

const initialState = {
  ticketroom: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
  tabActive: "1",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKET_ROOM: {
      const nextState = produce(state, (draft) => {
        draft.ticketroom = action.payload;
      });
      return nextState;
    }
    case DAT_VE: {
      //cập nhật danh sách ghê đang đặt
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index != -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }

      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case DAT_VE_HOAN_TAT: {
      const nextState = produce(state, (draft) => {
        draft.danhSachGheDangDat = [];
      });
      return nextState;
      // state.danhSachGheDangDat = [];
      // return { ...state };
    }
    case CHUYEN_TAB: {
      const nextState = produce(state, (draft) => {
        draft.tabActive = "2";
      });
      return nextState;
    }

    case "CHANGE_TAB_ACTIVE": {
      const nextState = produce(state, (draft) => {
        draft.tabActive = action.number;
      });
      return nextState;
    }
    default:
      return state;
  }
};

export default reducer;
