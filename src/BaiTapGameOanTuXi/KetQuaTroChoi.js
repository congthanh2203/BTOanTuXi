import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="display-2">
          <span className="text-success">Số bàn thắng: </span>
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-2">
          <span className="text-success">Tổng số bàn chơi: </span>
          <span className="text-warning">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="display-3">
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-3 mt-3 "
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;

      let ranDomOanTuXi = setInterval(() => {
        const action = {
          type: "RANDOM_OAN_TU_XI",
        };
        dispatch(action);

        n++;
        console.log("n", n);
        if (n == 10) {
          clearInterval(ranDomOanTuXi);
          // xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
      }, 50);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    soBanThang: state.stateBaiTapGameOanTuXi.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameOanTuXi.tongSoBanChoi,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
