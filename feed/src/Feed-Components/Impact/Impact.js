import React from "react";
import "./Impact.scss";
import { Row, Col } from "react-bootstrap";
import NewMap from "../Map/map";
import icon1 from "../../Feed-Components/assets/Icon1.png";
import icon2 from "../../Feed-Components/assets/Icon2.png";
import icon3 from "../../Feed-Components/assets/Icon3.png";
import icon4 from "../../Feed-Components/assets/Icon4.png";
import ib from "../../Feed-Components/assets/Ibutton.png";
import fidelis from "../assets/fidelis-care.png";
import David from "../assets/David-Yurman.png";
import Panda from "../assets/Panda_Express.png";
import phllip from "../assets/phllip.png";
import empire from "../assets/Empire.jpg";
import vite from "../assets/vitacoco.png";
import kvraoye from "../assets/kvraoye.png";
import matriark from "../assets/matriark.png";

const Impact = () => {
  return (
    <>
      <div className="main_imp">
        <div className="row mb-5 work_section">
          <small className="text-center top_row mt-4">How it Works</small>
          <div className="col-md-12 text-center">
            <h3 className="bot_row">
              We partner with local organizations to <br />
              build sustainable, community-owned <br />
              food programs.
            </h3>
          </div>
          <div className="col-md-12">
            <p className="text-center row_botom">
              <b>
                More than 38 million Americans lack reliable access to
                Nutritious meals. 1 in 10 households <br />
                struggle with food insecurity.Meanwhile 108 billion pounds of
                food go uneaten in the U.S -- the <br />
                the equivalent of 40% of the country's food supply. We are on a
                mission to increase access to <br />
                health food options and improve overall health outcomes.
                Collaboration is the key to building a <br />
                sustainable ecosystem to addresss the root causes of hunger and
                wellness.
              </b>
            </p>
          </div>
        </div>
      </div>

      <section className="navy-colored-block" style={{backgroundColor:"#000e4d"}}>
        <Row className="width1240_map">
          <div className="map" style={{marginTop:76}}>
            <Row>
              <Col xs={12} sm={12} md={12} style={{"padding-right":"0px",marginTop:"70px"}}>
                <h1 className="white-txt_header map-h1 text-center"> Impact map</h1>
                <p className="white-txtt text-white text-center">
                  The map bellow illustrates the areas of need and community
                  members and organizations supporting those in need. We
                  encourage you to take a moment to learn more about their
                  efforts. Our networks of community-minded partners across the
                  food ecosystem, including restaurant, food & beverage
                  companies, and community-based organizations, play a crucial
                  role in addressing hunger and promoting wellness in their
                  neighborhoods.
                </p>

                <p className="white-txtt text-center mt-2">
                  <img className="tooltip_but" src={ib} alt="" />
                  Donation to the More Than a Meal program can be directed to a
                  specific borough or food provider.
                </p>

                <div className="impact_date">
                  <h4 className="impact_data1">Impact data</h4>
                  &nbsp; &nbsp;
                  <div className="date1">
                    <p className="date_color">12/31/2022</p>
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="row mb-5 text-center">
                    <div className="col-12 col-md-6 col-lg-3">
                      <img src={icon1} alt="icon1" style={{width:"20vh"}} />
                      <h1 className="text-center white_color">200K+</h1>
                      <p className=" text-center number_color">
                        Number of Ready to Eat <br /> Meals Served
                      </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <img src={icon2} alt="icon2" style={{width:"20vh"}} />
                      <h1 className="text-center white_color">25K+</h1>
                      <p className=" text-center number_color">Number of households <br /> Served </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <img src={icon3} alt="icon3" style={{width:"20vh"}} />
                      <h1 className="text-center white_color">500K+</h1>
                      <p className=" text-center number_color"> lbs of food diverted from <br /> landfill </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <img src={icon4} alt="icon4" style={{width:"20vh"}} />
                      <h1 className="text-center white_color">20</h1>
                      <p className=" text-center number_color">Partnered Community Based organizations in Network</p> 
                    </div>
                  </div>
                </div>
                <div className="event-box"> </div>
              </Col>
              <Col sm={0} md={2}></Col>
            </Row>
            <NewMap position={[40.735, -73.935]} zoom={10.8} />
          </div>
        </Row>
      </section>
          <div className="testimonial_back pb-3">
                <div className="container mb-4">
                  <div className="row">
                    <small className="col-12 text-center sub_head mt-5 testimonial_main">
                      TESTIMONIALS
                    </small>
                    <div className="col-12 text-center">
                      <h2 className="test_recipt">Stories from the Ground</h2>
                    </div>

                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ height: "50vh",display: "flex",alignItems: "center",}}>

                      <div class="carousel-inner">
                      {/* testimonial-1 */}
                      <div class="carousel-item active">
                        <div className="container">
                          <div className="row" style={{height:"100%"}}>
                            <div className="col-8 offset-2">
                              <div>
                              <sup>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                  </svg>
                              </sup>
                                <i>
                                  <span className="test_txt"> Thank you very much. My family and I appreciate your help in feeding us diligently throughout the year. Thank you once again.</span>
                                  <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                </i>
                                <div className="testimonial_header">
                                  <i>Agatha, &nbsp;&nbsp;&nbsp;</i>
                                  <i>Brooklyn, &nbsp;&nbsp;&nbsp;</i>
                                  <i>Grocery Program  &nbsp;&nbsp;&nbsp;</i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* testimonial-2 */}
                      <div class="carousel-item">
                        <div className="container">
                          <div className="row" style={{height:"100%"}}>
                            <div className="col-8 offset-2">
                              <div>
                              <sup>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                  </svg>
                              </sup>
                                <i>
                                  <span className="test_txt">The delivery came before time and the groceries were fresh. I thank God for you all who help stop hunger. Thank you so much for your kindness, care, and concern. </span>
                                  <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                   </sup>
                                </i>
                                <div className="testimonial_header">
                                  <i>Ruth,&nbsp;&nbsp;&nbsp;</i>
                                  <i>Brooklyn,&nbsp;&nbsp;&nbsp;</i>
                                  <i> Homebound Delivery  &nbsp;&nbsp;&nbsp;</i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{top:"50%",transform: "translate(0%,-50%)"}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{marginTop:"3px"}} ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{top:"50%",transform: "translate(0%,-50%)"}} >
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{marginTop:"3px"}}></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  </div>
                  </div>

            <div className="main123">
              <div className="mainsub">
                  <h5>OUR PARTNERS</h5>
             </div>
          <div className="mainsub_header">
             <strong>
                  Become a member of our community of <br /> corporate and community
                  partners
             </strong>
        </div>

        <div className="container-fluid mt-4 mb-5">
          <div className="row">
            <div className="col-6 col-md-2 offset-md-2 our-partners">
              <img src={fidelis} alt="fidelis" />
            </div>
            <div className="col-6 col-md-2  our-partners">
              <img src={David} alt="David" />
            </div>
            <div className="col-6 col-md-2  our-partners">
              <img src={Panda} alt="Panda" />
            </div>
            <div className="col-6 col-md-2  our-partners">
              <img src={phllip} alt="phllip" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6 col-md-2 offset-md-2 our-partners">
              <img src={empire} alt="empire" />
            </div>
            <div className="col-6 col-md-2  our-partners  ">
              <img src={vite} alt="vita" />
            </div>
            <div className="col-6 col-md-2  our-partners">
              <img src={kvraoye} alt="kvraoye" />
            </div>
            <div className="col-6 col-md-2  our-partners">
              <img src={matriark} alt="matriark" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
