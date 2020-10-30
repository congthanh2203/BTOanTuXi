import React, { Component } from "react";
import DanhSachOanTuXi from "./DanhSachOanTuXi";
import style from "./BaiTapGameOanTuXi.module.css";
export default class BaiTapGameOanTuXi extends Component {
  render() {
    return (
      <div
        className={`${style.fontGameOanTuXi}`}
        style={{
          backgroundImage: "url(./img/bgGame.png)",
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundSize: "cover",
          top: 0,
          left: 0,
        }}
      >
        <DanhSachOanTuXi />
      </div>
    );
  }
}
