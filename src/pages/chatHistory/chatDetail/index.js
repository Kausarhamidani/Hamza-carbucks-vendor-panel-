import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";

import Switch from "@material-ui/core/Switch";
import { IsMobileWidth } from "../../../components/generic/util/util";
import ImageCropper from "../../../components/generic/ImageCropper";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import BackButton from "../../../components/generic/custom.button/back.button";
import EmailIcon from "@material-ui/icons/Email";

export default function ChatDetails() {
  const mobileWidth = IsMobileWidth();
  const [Location, setLocation] = useState([
    { country: "", address: "", state: "", area: "" },
    { country: "", address: "", state: "", area: "" },
  ]);

  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const girlImg =
    " https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg";
  const boyImg =
    "https://th.bing.com/th/id/R4719fc0de3f06fae5ac351a141235df3?rik=zlce5eROvPtGOQ&pid=ImgRaw";
  return (
    <Drawer>
      <AddCourseWrapper>
        <Paper classes={{ root: "paper" }} direction="row">
          <Grid xs={12} container justify="space-between" alignItems="center">
            <div className="title">
              <a onClick={goBack} className="title backLink ">
                <EmailIcon className="icon" /> Chat
              </a>{" "}
              / Chat Details
            </div>
          </Grid>

          <div class="container-fluid h-100 mt-4">
            <div class="row justify-content-center h-100">
              <div class="col-md-12 col-xl-12 chat">
                <div class="card">
                  <div class="card-header msg_head">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src={girlImg} class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span> Khalid</span>
                        <p>1767 Messages</p>
                      </div>
                      {/* <div class="video_cam">
									<span><i class="fas fa-video"></i></span>
									<span><i class="fas fa-phone"></i></span>
								</div> */}
                    </div>
                    {/* <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
							<div class="action_menu">
								<ul>
									<li><i class="fas fa-user-circle"></i> View profile</li>
									<li><i class="fas fa-users"></i> Add to close friends</li>
									<li><i class="fas fa-plus"></i> Add to group</li>
									<li><i class="fas fa-ban"></i> Block</li>
								</ul>
							</div> */}
                  </div>
                  <div class="card-body msg_card_body">
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img
                          src={girlImg}
                          class="rounded-circle user_img_msg"
                        />
                      </div>
                      <div class="msg_cotainer">
                        Hi, how are you samim?
                        <span class="msg_time">8:40 AM, Today</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        Hi Khalid i am good tnx how about you?
                        <span class="msg_time_send">8:55 AM, Today</span>
                      </div>
                      <div class="img_cont_msg">
                        <img src={boyImg} class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img
                          src={girlImg}
                          className="rounded-circle user_img_msg"
                        />
                      </div>
                      <div class="msg_cotainer">
                        I am good too, thank you for your chat template I am
                        good too, thank you for your chat template
                        <span class="msg_time">9:00 AM, Today</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        You are welcome
                        <span class="msg_time_send">9:05 AM, Today</span>
                      </div>
                      <div class="img_cont_msg">
                        <img src={boyImg} class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img
                          src={girlImg}
                          class="rounded-circle user_img_msg"
                        />
                      </div>
                      <div class="msg_cotainer">
                        I am looking for your next templates
                        <span class="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        Ok, thank you have a good day
                        <span class="msg_time_send">9:10 AM, Today</span>
                      </div>
                      <div class="img_cont_msg">
                        <img src={boyImg} class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img
                          src={girlImg}
                          class="rounded-circle user_img_msg"
                        />
                      </div>
                      <div class="msg_cotainer">
                        Bye, see you
                        <span class="msg_time">9:12 AM, Today</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="input-group">
                      <div class="input-group-append">
                        <span class="input-group-text attach_btn">
                          <i class="fas fa-paperclip"></i>
                        </span>
                      </div>
                      <textarea
                        name=""
                        class="form-control type_msg"
                        placeholder="Type your message..."
                      ></textarea>
                      <div class="input-group-append">
                        <span class="input-group-text send_btn">
                          <i class="fas fa-location-arrow"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Grid
            container
            justify="flex-end"
            xs={12}
            style={{ paddingTop: "20px" }}
          ></Grid>
        </Paper>
      </AddCourseWrapper>
    </Drawer>
  );
}

const AddCourseWrapper = styled.div`
  width: 100%;
  padding: 15px;
  .paper {
    padding: 20px;
    .buttons {
      display: flex;
    }
    .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
      background-color: #a30000;
    }
    .MuiSwitch-colorSecondary.Mui-checked {
      color: white;
    }
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .editorPaper {
    padding: 20px;
    margin-top: 30px;
  }
  .name {
    padding-bottom: 20px;
  }
  .label {
    color: #3c4b64;
    padding-bottom: 10px;
  }
  .image {
    font-size: 16px;
    background-color: #a30000;
    padding: 10px;
    width: 100%;
  }
`;
