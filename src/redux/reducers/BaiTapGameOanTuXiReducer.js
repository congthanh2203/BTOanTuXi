//state của bài tập game xúc xắc
const stateDefault = {
  banChon: "./img/1.png",
  mangOanTuXi: [{ hinhAnh: "./img/2.png" }],
  mayChon: "./img/1.png",
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapGameOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.luaChon;
      return { ...state };
    }
    case "RANDOM_OAN_TU_XI": {
      const soNgauNhien = Math.floor(Math.random() * 3) + 1;

      const ngauNhien = `./img/${soNgauNhien}.png`;

      state.mayChon = ngauNhien;

      return { ...state };
    }
    case "END_GAME": {
      if (
        (state.mayChon === "./img/2.png" && state.banChon === "./img/1.png") ||
        (state.mayChon == "./img/3.png" && state.banChon == "./img/2.png") ||
        (state.mayChon == "./img/1.png" && state.banChon == "./img/3.png")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;

      return { ...state };
    }
  }

  return { ...state };
};

export default BaiTapGameOanTuXiReducer;
