import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import NewMap from "./Map/map";
import { Row, Col } from "react-bootstrap";
import fidelis from "../../src/Feed-Components/assets/fidelis-care.png";
import David from "../../src/Feed-Components/assets/David-Yurman.png";
import Panda from "../../src/Feed-Components/assets/Panda_Express.png";
import phllip from "../../src/Feed-Components/assets/phllip.png";
import empire from "../../src/Feed-Components/assets/Empire.jpg";
import vite from "../../src/Feed-Components/assets/vitacoco.png";
import kvraoye from "../../src/Feed-Components/assets/kvraoye.png";
import matriark from "../../src/Feed-Components/assets/matriark.png";
import icon1 from "../../src/Feed-Components/assets/Icon1.png";
import icon2 from "../../src/Feed-Components/assets/Icon2.png";
import icon3 from "../../src/Feed-Components/assets/Icon3.png";
import icon4 from "../../src/Feed-Components/assets/Icon4.png";
import ib from "../../src/Feed-Components/assets/Ibutton.png";
import Player from "@vimeo/player";
import { HashLink } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import modalStyles from "./Map/modal.module.scss";
import Modal from "react-bootstrap/Modal";

export const Dashboard = (props) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const openInNewTab = (url) => {
    window.open(url, "noopener,noreferrer");
  };
  // const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };

  const hideModal = () => {
    setIsOpen(false);
    document.body.style.position = "static";
  };
  const { height, width } = useWindowDimensions();
  let campaign = "../donate-form.html" + "?" + props.campaign;
  let campaign1 = "../donate-form1.html" + "?" + props.campaign;
  let campaign2 = "../donate-form2.html" + "?" + props.campaign;
  let DonatelyForm;
  // console.log(width)
  if (width > 440) {
    // console.log("statement #1")
    DonatelyForm = (
      <iframe
        scrolling="no"
        id="donateId"
        src={campaign}
        style={{
          width: "440px",
          height: "1130px",
          margin: "23px auto",
          border: "none",
        }}
        title="donately"
      ></iframe>
    );
  } else if (440 > width > 350) {
    // console.log("statement #2")
    DonatelyForm = (
      <iframe
        scrolling="no"
        id="donateId"
        src={campaign1}
        style={{
          width: "350px",
          height: "1130px",
          margin: "23px auto",
          border: "none",
        }}
        title="donately"
      ></iframe>
    );
  } else {
    // console.log("statement #3")
    DonatelyForm = (
      <iframe
        scrolling="no"
        id="donateId"
        src={campaign2}
        style={{
          width: "300px",
          height: "1130px",
          margin: "23px auto",
          border: "none",
        }}
        title="donately"
      ></iframe>
    );
  }

  // function autoPalay() {
  //   setTimeout(() => {
  //     const iframe = document.querySelector("iframe");
  //     const options = {
  //       loop: true,
  //       autoPlay: true,
  //     };
  //     const player = new Player(iframe, options);
  //     player.on("play", function () {
  //       player.setLoop(true).then(function (loop) { });
  //     });
  //     player.play();
  //   }, 0);
  // }
  // useEffect(() => {
  //   autoPalay();
  // }, []);

  return (
    <>
      <div style={{outline:"none"}} tabindex="-1" id="gatsby-focus-wrapper">
        <div>
          <main>
            <div>
              <div className="Home_header">
                <div className="hero-section">
                  <h2>More Than a Meal</h2>
                  <p>
                    We put the human experience first, while empowering wellness
                    for
                    <br />
                    communities and its members.
                  </p>
                  <div>
                    <button className="btns-donate1234" onClick={showModal}>
                      DONATE TO US
                    </button>
                    <Modal show={isOpen} onHide={hideModal} size="lg">
                      <Modal.Header style={{height:"55px"}}>
                        <Button className={modalStyles.closeBtn} onClick={hideModal} style={{backgroundColor:"#ffcc00",padding:"5px"}}>
                          X
                        </Button>
                      </Modal.Header>
                      <div style={{"max-width":"445px",margin:"10px auto"}}>
                        {DonatelyForm}
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>

              <div className="whatwedo_section">
                <div className="container pt-5" style={{marginTop:"0"}}>
                  <div className="row mb-5">
                    <small className="text-center top_row">WHAT WE DO</small>
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
                          nutritious meals.
                          <br />
                          1 in 10 households struggle with food insecurity.
                          Meanwhile, 108 billion pounds <br />
                          of food go uneaten in the U.S. — the equivalent of 40%
                          of the country’s food supply. <br />
                          We are on a mission to increase access to healthy food
                          options and improve overall health outcomes.
                        </b>
                      </p>
                    </div>
                  </div>
                  <small className="sportlight_rell">
                    Community Spotlight Reel
                  </small>
                </div>
              </div>
              <div className="i-div">
                <iframe
                  src="https://player.vimeo.com/video/793224457?h=44b451206c&title=0&byline=0&portrait=0"
                  frameborder="0"
                  allow="fullscreen; picture-in-picture"
                  allowfullscreen
                  id="iframe_1"
                ></iframe>
              </div>
              <section className="navy-colored-block_map">
                <Row className="width1240_map">
                  <div className="map">
                    <Row>
                      <Col xs={12} sm={12}  md={12} style={{"padding-right":"0px",marginTop:"70px"}}>
                        <h1 className="white-txt_header map-h1 text-center"> Impact map </h1>
                        <p className="white-txtt text-white text-center">
                          The map bellow illustrates the areas of need and
                          community members and organizations supporting those
                          in need. We encourage you to take a moment to learn
                          more about their efforts. Our networks of
                          community-minded partners across the food ecosystem,
                          including restaurant, food & beverage companies, and
                          community-based organizations, play a crucial role in
                          addressing hunger and promoting wellness in their
                          neighborhoods.
                        </p>
                        <p className="white-txtt text-center mt-2 toolstips">
                            <img src={ib} className="tooltip_but" />
                            Donation to the More Than a Meal program can be
                            directed to a specific borough or food provider.
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
                            <div className="col-12 col-sm-6 col-lg-3">
                              <img src={icon1} alt="icon1" style={{width:"20vh"}}/>
                                 <h1 className="text-center white_color">200K+</h1>
                                 <p className="text-center number_color"> Number of Ready to Eat <br /> Meals Served</p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                              <img src={icon2}  alt="icon2" style={{width:"20vh"}}/>
                                 <h1 className="text-center white_color">25K+</h1>
                                 <p className=" text-center number_color">Number of households <br /> Served </p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                               <img src={icon3} alt="icon3" style={{width:"20vh"}}/>
                                  <h1 className="text-center white_color">500K+</h1>
                                  <p className=" text-center number_color">lbs of food diverted from <br /> landfill</p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                              <img src={icon4} alt="icon4" style={{width:"20vh"}}/>
                                 <h1 className="text-center white_color">20</h1>
                                 <p className=" text-center number_color">
                                  Partnered Community Based organizations in
                                  Network
                              </p>
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
              {/* Testimonials - Home page */}
              <div className="testimonial_back pb-3">
                <div className="container-fluid mb-4">
                  <div className="row">
                    <small className="col-12 text-center sub_head mt-5 testimonial_main">
                      TESTIMONIALS
                    </small>
                    <div className="col-12 text-center">
                      <h2 className="test_recipt">Recipient Testimonials</h2>
                    </div>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        {/* testimonial-1 */}
                        <div className="carousel-item active">
                          <div className="container">
                            <div className="row" style={{height:"100%"}}>
                              <div className="col-10 offset-1">
                                <div className="text-center slider-content">
                                  <i className="test_txt">
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" >
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                      </svg>
                                    </sup>
                                    Got it ...and it is FANTASTIC! Truly wowed
                                    by selection and quality. The fresh salmon
                                    is beautiful. As good as any I have ever
                                    seen sold even just caught and off a boa or
                                    in NYC from the late great Fulton fish
                                    market and so fresh, I think it must have
                                    swam up my hallway stairs and up to my door.
                                    The 2 cucumbers were huge, flawless and look
                                    to have been just picked, coming straight
                                    from a local garden. I also was pleased to
                                    get those fresh oranges. The Vita Coca
                                    coconut water and veg broth concentrate were
                                    both items I would happily choose in my
                                    regular shopping. I am not a rice and beans
                                    girl so those only items I wasn't jumping up
                                    and down over but still for many I imagine
                                    this is culturally important basic element
                                    for a healthy diet.
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                  </i>
                                  <div className="testimonial_header">
                                    <i>Tamar, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Manhattan, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Homebound Delivery &nbsp;&nbsp;&nbsp;</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* testimonial-2 */}
                        <div className="carousel-item">
                          <div className="container">
                            <div className="row" style={{height:"100%"}}>
                              <div className="col-10 offset-1">
                                <div className="text-center slider-content">
                                  <i className="test_txt">
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                      </svg>
                                    </sup>
                                    Thank you for the wonderful groceries, it
                                    really helped us to eat healthier and more
                                    nutritious.
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                  </i>
                                  <div className="testimonial_header">
                                    <i>Dante,&nbsp;&nbsp;&nbsp;</i>
                                    <i>Manhattan,&nbsp;&nbsp;&nbsp;</i>
                                    <i>Homebound Delivery &nbsp;&nbsp;&nbsp;</i> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* testimonial-3 */}
                        <div className="carousel-item">
                          <div className="container">
                            <div className="row" style={{height:"100%"}}>
                              <div className="col-10 offset-1">
                                <div className="text-center slider-content">
                                  <i className="test_txt">
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                      </svg>
                                    </sup>
                                       Thank you very much. My family and I
                                       appreciate your help in feeding us
                                       diligently throughout the year. Thank you
                                       once again.
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                  </i>
                                  <div className="testimonial_header">
                                     <i>Agatha,&nbsp;&nbsp;&nbsp;</i>
                                     <i>Brooklyn,&nbsp;&nbsp;&nbsp;</i>
                                     <i>Grocery Program &nbsp;&nbsp;&nbsp;</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* testimonial-4 */}
                        <div className="carousel-item">
                          <div className="container">
                            <div className="row" style={{height:"100%"}}>
                              <div className="col-10 offset-1">
                                <div className="text-center slider-content">
                                  <i className="test_txt">
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                      </svg>
                                    </sup>
                                       The delivery came before time and the
                                       groceries were fresh. I thank God for you
                                       all who help stop hunger. Thank you so much
                                       for your kindness, care, and concern.
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                  </i>
                                  <div className="testimonial_header">
                                    <i>Ruth, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Brooklyn, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Homebound Delivery – Thanksgiving &nbsp;&nbsp;&nbsp; </i> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* testimonial-5 */}
                        <div class="carousel-item">
                          <div className="container">
                            <div className="row" style={{height:"100%"}}>
                              <div className="col-10 offset-1">
                                <div className="text-center slider-content">
                                  <i className="test_txt">
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                      </svg>
                                    </sup>
                                    Thank you very much. This is an excellent
                                    distribution system, and the contents of the
                                    box are far superior to what is given out at
                                    other distributions.
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                  </i>
                                  <div className="testimonial_header">
                                    <i>Norman, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Brooklyn, &nbsp;&nbsp;&nbsp; </i>
                                    <i>Grocery Program - Wellness Wednesday &nbsp;&nbsp;&nbsp;</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* testimonial-6 */}
                        <div className="carousel-item">
                          <div className="container">
                            <div className="row" style={{height:"100%"}}>
                              <div className="col-10 offset-1">
                                <div className="text-center slider-content">
                                  <i className="test_txt">
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                      </svg>
                                    </sup>
                                       I am very grateful for the assistance, and
                                       it made a difference for me and my family.
                                       Thank you so much.
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                  </i>
                                  <div className="testimonial_header">
                                    <i>Debora, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Brooklyn, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Grocery Program - Wellness Wednesday &nbsp;&nbsp;&nbsp; </i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* testimonial-7 */}
                        <div className="carousel-item">
                          <div className="container">
                            <div className="row" style={{height:"100%"}}>
                              <div className="col-10 offset-1">
                                <div className="text-center slider-content">
                                  <i className="test_txt">
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                                        <path fill="#ccc" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                      </svg>
                                    </sup>
                                      Your service is absolutely great, and my
                                      family and I really appreciate the healthy
                                      food you provide us with.
                                    <sup>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                        <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                      </svg>
                                    </sup>
                                  </i>
                                  <div className="testimonial_header">
                                    <i>Towanda, &nbsp;&nbsp;&nbsp;</i>
                                    <i> Bronx, &nbsp;&nbsp;&nbsp;</i>
                                    <i>Homebound Delivery &nbsp;&nbsp;&nbsp;</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{top:"50%",transform:"translate(0%,-50%)"}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{marginTop:"3px"}}></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{top:"50%",transform:"translate(0%,-50%)"}}>
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{marginTop:"3px"}}></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="allbutton">
                    <div className="alldata">
                      <div className="but_alldata1">
                        <HashLink  style={{textDecoration:"none",color:"white"}} className="join-team1" to="/involved/#sbo_network_partener">
                          Join Our CBO Network
                        </HashLink>
                      </div>

                      <div className="but_alldata2">
                        <HashLink className="dis_button" to="/involved#brand_corp_partener">
                          Partner with Us
                        </HashLink>
                      </div>

                      <div className="but_alldata3">
                        <HashLink className="dis_button" to="/involved#register_for_food">
                          Recipient Sign Up
                        </HashLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
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
export default Dashboard;
