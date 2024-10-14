import React from 'react';
import about from './assets/images/About_1.png';
import grass from "./assets/images/shapes/bg-green.jpg"; // Corrected path without space

function AboutUs() {
  return (
    <section style={{ backgroundColor: 'transparent', position: 'relative', paddingBottom: '100px', minHeight: '700px' }} id="about-us">
      <div className="shape-02" />
      <div className="shape-03" />
      <div className="shape-04" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="wrapper">
              <div className="image">
                <img src={about} alt='Traditional Tamil cuisine showcasing siruthaniya vagaigal maavu' />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="content">
              <h2 className="text-center text-4xl font-bold mb-4 text-green-500">About</h2>
              <h2 className="text-3xl mb-4">Experience the Heart of Tamil Culinary Traditions</h2>
              <p>
                "Siruthaniya vagaigal maavu" refers to traditional health foods made from millets and nutritious grains in Tamil cuisine. These ancient staples are important for our heritage and offer numerous health benefits.
                Our goal is to bring back these lost flavors and promote a healthy, sustainable lifestyle that honors our ancestors and the environment.
              </p>
              <h4 className="mt-6 font-semibold">Wellness and Balance:</h4>
              <p>
                Siruthaniya vagaigal maavu focuses on overall well-being. Each dish is designed to nourish the body and create a balanced connection between mind and food. Join us in rediscovering the goodness of Tamil health foods for a healthier diet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image at the Bottom */}
      <div 
        style={{ 
          backgroundImage: `url(${grass})`, 
          height: '500px', 
          position: 'absolute', 
          bottom: 0,
          left: 0, 
          right: 0, 
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundColor: 'rgba(255, 255, 255, 0)',
          zIndex: -10,
          display: 'block' // Default display
        }} 
        className="d-none d-md-block" // Hides on small devices
      />
    </section>
  );
}

export default AboutUs;
