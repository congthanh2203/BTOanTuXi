import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";
import style from "./BaiTapGameOanTuXi.module.css";
class DanhSachOanTuXi extends Component {
  handleLuaChon = (linkHinh) => {
    return (
      <img
        className="img-thumbnail m-1"
        style={{ width: "20%", cursor: "pointer" }}
        src={this.props.datCuoc(linkHinh)}
      />
    );
  };
  render() {
    return (
      <div className="row text-center mt-5">
        <div className="col-3">
          <div className={`${style.bubble}`}>
            <img
              style={{ width: "20%" }}
              className="m-1 img-thumbnail"
              src={this.props.banChon}
            ></img>
          </div>
          <img style={{ width: "40%" }} src="./img/player.png"></img>
          <div>
            <img
              className="img-thumbnail m-1"
              style={{ width: "10%", cursor: "pointer" }}
              src="./img/1.png"
              onClick={() => {
                this.handleLuaChon("./img/1.png");
              }}
            />
            <img
              className="img-thumbnail m-1"
              style={{ width: "10%", cursor: "pointer" }}
              src="./img/2.png"
              onClick={() => {
                this.handleLuaChon("./img/2.png");
              }}
            />
            <img
              className="img-thumbnail m-1"
              style={{ width: "10%", cursor: "pointer" }}
              src="./img/3.png"
              onClick={() => {
                this.handleLuaChon("./img/3.png");
              }}
            />
          </div>
        </div>
        <div className="col-6 " style={{ width: "100%", marginTop: "5%" }}>
          <span className="display-1 text-warning mb-5">
            I'm iron man, i love you 3000 !!
          </span>
          <br />
          <br />
          <br />
          <br />
          <KetQuaTroChoi />
        </div>

        <div className="col-3">
          <div>
            <div className={`${style.bubble}`}>
              <img
                className="m-1 img-thumbnail"
                src={this.props.mayChon}
                style={{ width: "20%" }}
              />
            </div>
          </div>
          <img style={{ width: "40%" }} src="./img/playerComputer.png"></img>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mayChon: state.stateBaiTapGameOanTuXi.mayChon,
    banChon: state.stateBaiTapGameOanTuXi.banChon,
    mangOanTuXi: state.stateBaiTapGameOanTuXi.mangOanTuXi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (luaChon) => {
      const action = {
        type: "DAT_CUOC",
        luaChon,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachOanTuXi);
