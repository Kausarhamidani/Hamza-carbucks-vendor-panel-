import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImgCrop from "antd-img-crop";
import { Upload, Button } from "antd";
import "antd/dist/antd.css";
// import './index.scss';

export default function ImagePicker({ fileList, onChange, onPreview, type }) {
  return (
    <ImgCrop grid style={{ zIndex: 1000 }}>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        style={{ borderRadius: "100px" }}
      >
        {fileList.length < (type === "single" ? 1 : 10) && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
}
