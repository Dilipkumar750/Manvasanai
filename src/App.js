import logo from "./logo.svg";
import "./App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import home1 from "./assets/images/menu/navarasa 1.png";
import home2 from "./assets/images/menu/seraga samba 1.png";
import home3 from "./assets/images/menu/makka-cholam.-2.png";
import Navabar from "./Navabar";
import Footer from "./Footer";
import Intro from "./Intro";
import AboutUs from "./AboutUs";
import WorkFlow from "./WorkFlow";
import Menu from "./Menu";
import Team from "./Team";
import Blog from "./Blog";
import Contactus from "./Contactus";
import Testimonials from "./Testimonials";
import Banner from "./Banner";
function App() {
  const options = {
    loop: true,
    margin: 10,
    // nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <>
      <Navabar />

      <main>
        <section className="slider">
          <div className="shape" />
          <div className="shape-01" />
          <div className="banner">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <div className="content">
                          <h1>Kerala Medicinal Navara Rice</h1>
                          <h5>
                          Navara is a multi-functional variety of rice with numerous medicinal and nutritional values. It is easily digestible and suited to all age groups of people. According to Ayurveda, it is a cereal that can improve rheumatoid arthritis, diabetes, oligospermia, haemorrhoids, tuberculosis, lactation, and emanciation
                          </h5>
                          <ol>
                            <li>
                              <a href="https://wa.me/7010652833" target="blank">
                                Taste Now
                                <span className="flaticon-right-arrow" />
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <img
                          src={home1}
                          alt="Slide 1"
                          style={{ width: "90%", borderRadius: "100px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <div className="content">
                          <h1>cholan's  seeraga samba</h1>
                          <h5>
                          Seeraga samba rice contains selenium, which helps to prevent the cancer of colon and intestine. 
                          It has got more fibre, which helps to remove free radicals from colon and intestine. 
                          It also has phytonutrients and this help to fight breast cancer and strengthens the heart function.{" "}
                          </h5>
                          <ol>
                            <li>
                              <a href="https://wa.me/7010652833" target="blank">
                                Taste Now
                                <span className="flaticon-right-arrow" />
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <img src={home2} alt="Slide 2" 
                        style={{ width: "90%", borderRadius: "100px" }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <div className="content">
                          <h1>manjal solam</h1>
                          <h5>
                          Solam is a nutrient-dense grain that you can use in various ways.
                           It is rich in vitamins and minerals such as magnesium, potassium, phosphorus, iron and zinc.
                            It is also an excellent source of fibre, antioxidants, and protein.
                           In most recipes, it is easy to substitute whole grain solam for wheat, rice, or quinoa
                          </h5>
                          <ol>
                            <li>
                              <a href="https://wa.me/7010652833" target="blank">
                                Taste Now
                                <span className="flaticon-right-arrow" />
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <img src={home3} alt="Slide 3" 
                        style={{ width: "90%", borderRadius: "100px" }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        <Intro />
        <Testimonials />
        <AboutUs />
        <WorkFlow />
        <Menu />
        <Team />
        <Blog />

        <Contactus />
        <Banner/>
      </main>

      <Footer />
    </>
  );
}

export default App;
