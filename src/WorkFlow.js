import React from 'react';
import nelkathir from "../src/assets/images/shapes/nelkathir 1.png";
import grass from "../src/assets/images/shapes/bg-green.jpg";

function WorkFlow() {
  return (
    <section className="bg-03">
      <div className="shape-05" />
      <div className="shape-06" />
      <div className="row justify-content-center gap-4">
        <div className="row justify-content-center text-center"> {/* Centering the content */}
          <div className="col-12">
            <img 
              src={nelkathir} 
              alt="nelkathir" 
              style={{ 
                transform: "rotate(30deg)", 
                marginLeft: "0", 
                position: "absolute", 
                backgroundRepeat: "no-repeat", 
                left: "-60px", 
                top: "-150px", 
                width: "30%", 
                height: "100%" 
              }} 
            />
            <div className="heading">
              <span style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>Work</span>
              <h2>How It Works</h2>
              <p style={{ color: "black" }}>
                "Simply choose your organic foods, set your preferred delivery schedule, and we’ll handle the rest. Enjoy seamless service with fresh, healthy products arriving right on time."
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gap-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div
            className="col-md-3 col-sm-12" // Each item takes full width on small screens
            style={{ cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", borderRadius: "30px" }}
          >
            <div className="wrapper">
              <div className="content text-center">
                <div className="icons">
                  <span className="flaticon-fish" />
                </div>
                <h3>Pick Food</h3>
                <p>
                  "Select from our curated range of premium organic foods, each carefully sourced for maximum freshness and quality. Enjoy the best of nature’s bounty delivered to your table."
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 col-sm-12" // Each item takes full width on small screens
            style={{ cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", borderRadius: "20px" }}
          >
            <div className="wrapper">
              <div className="content text-center">
                <div className="icons">
                  <span className="flaticon-touch" />
                </div>
                <h3>Choose How Often</h3>
                <p>
                  "Customize your delivery schedule to fit your needs, ensuring a steady supply of fresh, organic foods. Choose how often you receive your favorites for ultimate convenience."
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 col-sm-12" // Each item takes full width on small screens
            style={{ cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", borderRadius: "20px" }}
          >
            <div className="wrapper">
              <div className="content text-center">
                <div className="icons">
                  <span className="flaticon-catering" />
                </div>
                <h3>Fast Deliveries</h3>
                <p>
                  "Benefit from our speedy delivery service, bringing fresh organic foods right to your doorstep. Enjoy quick, reliable shipments that keep your pantry stocked with wholesome goodness."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background Image at the Bottom, hidden on small screens */}
      <div 
        style={{ 
          backgroundImage: `url(${grass})`, 
          height: '200px', 
          position: 'absolute', 
          bottom: 10,
          left: 0, 
          right: 0, 
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundColor: 'rgba(255, 255, 255, 0)',
          zIndex: -10,
        }} 
        className="d-none d-md-block" // Show background only on medium screens and up
      />
    </section>
  );
}

export default WorkFlow;
