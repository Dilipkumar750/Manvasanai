import React from 'react';
import { IoMdClock } from "react-icons/io";
import { MdAssistantDirection } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

export default function Intro() {
  return (
    <section className="bg-01">
      <div className="container">
      <div className="row justify-content-center gap-3">
          <div
            className="col-md-3 col-sm-6"
            style={{ cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", borderRadius: "20px" }}
          >
            <div className="wrapper">
              <div className="content">
                <div className="icon">
                  <IoMdClock style={{ width: "53px", height: "60px", color: "white" }} />
                </div>
                <div className="sentence">
                  <strong>Today 10:00 am-7:00 pm</strong>
                  <p>Working Hours</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6" style={{ cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", borderRadius: "20px" }}>
            <div className="wrapper">
              <div className="content">
                <div className="icon">
                  <MdAssistantDirection style={{ width: "53px", height: "60px", color: "white" }} />
                </div>
                <div className="sentence">
                  <strong>Coimbatore</strong>
                  <p>Get Directions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6" style={{ cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", borderRadius: "20px" }}>
            <div className="wrapper">
              <div className="content">
                <div className="icon">
                  <IoIosCall style={{ width: "53px", height: "60px", color: "white" }} />
                </div>
                <div className="sentence">
                  <strong>+91 70106 52833</strong>
                  <p>Call Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
