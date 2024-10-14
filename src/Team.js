import React from 'react';
import team1 from './assets/images/team/1.jpg';
import team2 from './assets/images/team/2.jpg';
import team3 from './assets/images/team/3.jpg';
import team4 from './assets/images/team/4.jpg';
import vayal from '../src/assets/images/shapes/vayal.jpg';
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import nelkathir from "../src/assets/images/shapes/nelkathir 1.png"

function Team() {
  return (
    <>
      <section className="bg-05">
        <div className="shape-03" />
        <div className="shape-04" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <img
                src={nelkathir}
                alt="nelkathir"
                className="responsive-img"
                style={{
                  transform: "rotate(40deg)",
                  marginLeft: "0",
                  position: "absolute",
                  backgroundRepeat: "no-repeat",
                  left: "-80px",
                  top: "-50px",
                  width: "30%",
                  height: "30%",
                }}
              /> */}
              {/* <div className="heading">
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>Team</span>
                <h2>Explore Our Team</h2>
                <p style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores officiis explicabo blanditiis consequuntur fugit
                  fugiat, incidunt totam consectetur veritatis minus corporis
                  doloribus, qui maxime velit nesciunt, officia praesentium odit
                  facilis.
                </p>
              </div> */}
            </div>
            {/* <div className="main-team-card d-flex">
              <div className="team-setup">
                <div className="team-items">
                  <div className="team-user">
                    <img src={team1} alt="Mark Anthony" />
                  </div>
                  <div className="team-user-social">
                    <ol>
                      <li>
                        <FaFacebook style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                      <li>
                        <FaWhatsapp style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                    </ol>
                  </div>
                  <div className="team-name">
                    <h2>Mark Anthony</h2>
                    <b>Founder &amp; CEO</b>
                  </div>
                </div>
              </div>
              <div className="team-setup">
                <div className="team-items">
                  <div className="team-user">
                    <img src={team2} alt="Jessica Lee" />
                  </div>
                  <div className="team-user-social">
                    <ol>
                      <li>
                        <FaFacebook style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                      <li>
                        <FaWhatsapp style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                    </ol>
                  </div>
                  <div className="team-name">
                    <h2>Jessica Lee</h2>
                    <b>Chinese Kitchen Lead</b>
                  </div>
                </div>
              </div>
              <div className="team-setup">
                <div className="team-items">
                  <div className="team-user">
                    <img src={team3} alt="John Bennett" />
                  </div>
                  <div className="team-user-social">
                    <ol>
                      <li>
                        <FaFacebook style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                      <li>
                        <FaWhatsapp style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                    </ol>
                  </div>
                  <div className="team-name">
                    <h2>John Bennett</h2>
                    <b>French Kitchen Lead</b>
                  </div>
                </div>
              </div>
              <div className="team-setup">
                <div className="team-items">
                  <div className="team-user">
                    <img src={team4} alt="Anderson Jhon" />
                  </div>
                  <div className="team-user-social">
                    <ol>
                      <li>
                        <FaFacebook style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                      <li>
                        <FaWhatsapp style={{ fontSize: "26px", textAlign: "center", marginBottom: "3px" }} />
                      </li>
                    </ol>
                  </div>
                  <div className="team-name">
                    <h2>Anderson Jhon</h2>
                    <b>Sous Chef</b>
                  </div>
                </div>
              </div>
            </div> */}
            <img src={vayal} alt="Vayal" style={{ height: "450px", width: "120%" }} />
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 767px) {
          .responsive-img {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Team;
