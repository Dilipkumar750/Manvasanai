import React from 'react';
import valluvar from './assets/images/valluvar 1.png';
import grass from './assets/images/shapes/green-grass.jpg';

function Testimonials() {
  return (
    <section 
      className="vh-80" 
      style={{ 
        backgroundColor: 'green', 
        backgroundImage: `url(${grass})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/* First green section */}
          <div 
            className="col-12 text-center" 
            style={{ 
              backgroundColor: 'white', 
              color: 'black', 
              padding: '15px', 
              margin: '20px 0', 
              fontWeight: 'bold',
              borderRadius: '10px'
            }}
          >
            இரசாயன காய்கறி மற்றும் பழங்கள் 200 கிராம் எடுப்பதற்கு பதில் இயற்கையில்<br />
            விளைந்தவை 100 கிராம் எடுப்பதே சிறப்பும், முழுமையான பலனும் கூட..
          </div>
          
          <div className="col-lg-20 col-md-8 col-sm-12"> {/* Responsive column sizes */}
            <div className="card rounded-3 shadow" style={{ margin: '20px' }}>
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-4 col-sm-12 d-flex justify-content-center mb-2">
                    <img
                      src={valluvar}
                      className="rounded-circle shadow-1-strong"
                      style={{ width: '100%', height: 'auto' }} // Responsive image
                      alt="Valluvar"
                    />
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <figure className="text-start mb-0">
                      <blockquote className="blockquote mb-4">
                        <p>
                          <span className="font-italic">
                            மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது<br />
                            அற்றது போற்றி உணின்.
                          </span>
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-4">திருவள்ளுவர்</figcaption>
                    </figure>
                    <h6>விளக்கம்:</h6>
                    <p>
                      முன் உண்ட உணவு செரித்த தன்மை ஆராய்ந்து போற்றியப் பிறகு தக்க அளவு
                      உண்டால், உடம்பிற்கு மருந்து என ஒன்று வேண்டியதில்லை.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second green section */}
        <div 
          className="col-12 text-center" 
          style={{ 
            backgroundColor: 'white', 
            color: 'black', 
            padding: '15px', 
            margin: '20px 0', 
            fontWeight: 'bold',
            borderRadius: '10px'
          }}
        >
          <i>சிறப்பு என்றும் சிறுதானியமே..<br />
          உங்கள் மனதில் நிற்கும்<br />
          நம் </i><span style={{ display: 'inline' }}><i><b style={{ fontSize: '30px' }}>மண்வாசனையே..</b></i></span>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
