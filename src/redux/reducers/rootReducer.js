//File khai báo tất cả các state của ứng dụng
import { combineReducers } from "redux";

import baiTapGameOanTuXiReducer from "./BaiTapGameOanTuXiReducer";

//state tổng của ứng dụng

export const rootReducer = combineReducers({
  //Nơi khai báo các state theo từng nghiệp vụ

  stateBaiTapGameOanTuXi: baiTapGameOanTuXiReducer,
});
