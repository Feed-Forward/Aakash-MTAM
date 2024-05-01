import React, { useEffect } from "react";
import "./Involved.scss";
import pexels1 from "../../Feed-Components/assets/pexels1.png";
import pexels2 from "../../Feed-Components/assets/pexels2.png";
import pexels3 from "../../Feed-Components/assets/pexels3.png";
import icon5 from "../../Feed-Components/assets/Icon5.png";
import icon6 from "../../Feed-Components/assets/Icon6.png";
import icon7 from "../../Feed-Components/assets/Icon7.png";
import icon8 from "../../Feed-Components/assets/Icon8.png";
import icon9 from "../../Feed-Components/assets/Icon9.png";
import icon10 from "../../Feed-Components/assets/Icon10.png";
import fidelis from "../../Feed-Components/assets/fidelis-care.png";
import David from "../../Feed-Components/assets/David-Yurman.png";
import Panda from "../../Feed-Components/assets/Panda_Express.png";
import phllip from "../../Feed-Components/assets/phllip.png";
import empire from "../../Feed-Components/assets/Empire.jpg";
import vite from "../../Feed-Components/assets/vitacoco.png";
import kvraoye from "../../Feed-Components/assets/kvraoye.png";
import matriark from "../../Feed-Components/assets/matriark.png";
import volunteers from "../../Feed-Components/assets/Volunteers.png";
import Player from "@vimeo/player";

const Home = () => {
  function autoPalay() {
    const iframe = document.getElementById("video1");
    const options = {
      loop: true,
      autoPlay: true,
    };
    const player = new Player(iframe, options);
    player.on("play", function () {
      player.setLoop(true).then(function (loop) { });

    });
    player.play();
  }
  function autoPalay1() {
    const iframe = document.getElementById("video2");
    const options = { loop: true, autoPlay: true,};
    
    const player = new Player(iframe, options);
    player.on("play", function () {
      player.setLoop(true).then(function (loop) { });
    });
    player.play();
  }

  function autoPalay2() {
    const iframe = document.getElementById("video3");
    const options = {loop: true, autoPlay: true,};
     const player = new Player(iframe, options);
      player.on("play", function () {
         player.setLoop(true).then(function (loop) { });
      });
    player.play();
  }

  function autoPalay3() {
    const iframe = document.getElementById("video4");
    const options = { loop: true, autoPlay: true};
    const player = new Player(iframe, options);
    player.on("play", function () {
      player.setLoop(true).then(function (loop) { });
    });
    player.play();
  }
  useEffect(() => {
      setTimeout(() => {
        autoPalay();
     }, 0)
    setTimeout(() => {
      autoPalay1();
    }, 1500)
    setTimeout(() => {
      autoPalay2();
    }, 3000)
    setTimeout(() => {
      autoPalay3();
    }, 4500)
  }, []);

  return (
    <>
      <div className="main_con">
        <div className="container mt-3">
          <div className="row main_headertext mb-5">
            <div className="get_involved12">
              <h2>Get Involved</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 i-div">
        <iframe
          src="https://player.vimeo.com/video/759692892?h=38e70eed2a&title=0&byline=0&portrait=0?autoplay=1&loop=1&autopause=0"
          frameborder="0"
          title="Video 1: Description of the video content"
          allow="autoplay"
          id="video1"
          muted='true'
          autoplay='true'
          className="iframe_2"
          onLoad={autoPalay}
        ></iframe>
      </div>

      <div className="container mb-5" id="register_for_food">
        <div className="row main-row">
          <small className="text-center sub_head mt-5">How it Works</small>
          <div className="col-md-12 text-center">
            <h2 className="font-weight-bold">Register For Food Assistance</h2>
          </div>
          <div className="col-md-4 mb-5 mt-4">
            <div className="card border-0">
              <div className="card-body p-0 d-flex justify-content-center">
                <img className="img-fluid" src={pexels1} alt="pexels1" style={{width:"32vh"}} />
              </div>
              <div className="card-footer" style={{border:"none",background:"none"}}>
                <h5 className="d-flex justify-content-center text-center">
                    Fill out the registration form <br /> to join our waiting
                    list.
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 mt-4">
            <div className="card border-0">
              <div className="card-body  p-0 d-flex justify-content-center">
                <img className="img-fluid" src={pexels2} alt="pexels2" style={{width:"32vh"}} />
              </div>
              <div className="card-footer" style={{border:"none",background:"none"}} >
                <h5 className="d-flex justify-content-center text-center">
                     Waitlist applicants will get <br />
                     updates and notifications
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 mt-4">
            <div className="card border-0">
              <div className="card-body  p-0 d-flex justify-content-center">
                <img className="img-fluid" src={pexels3} alt="pexels3" style={{width:"32vh"}} />
              </div>
              <div className="card-footer" style={{border:"none",background:"none"}} >
                 <h5 className="d-flex justify-content-center text-center"> Recipients are activated based <br /> on funding oppertunites </h5>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <h2 className="slider_bullet">&bull; &bull; &bull;</h2>
          </div>
          <div className="col-md-12 text-center mt-5">
            <h2 className="mt-3">
              Register to start finding ways to collaborate with <br />
              More Than a Meal's ecosystem.
            </h2>
          </div>
          <div className="col-md-12 text-center  mb-5 mt-5">
            <a href="/recipients" className="join-team">Apply Now </a>
          </div>
        </div>
      </div>

      <div className="testimonial_back pb-3">
        <div className="container mb-4">
          <div className="row">
            <small className="col-12 text-center sub_head mt-5 testimonial_main">TESTIMONIALS</small>
            <div className="col-12 text-center">
              <h2 className="test_recipt">Stories from the Ground</h2>
            </div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"
              style={{ height:"50vh", display:"flex",alignItems:"center"}}>
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
                            <span className="test_txt">Thank you very much. This is an excellent distribution system, and the contents of the box are far superior to what is given out at other distributions.</span>
                            <sup>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd" >
                                 <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                              </svg>
                            </sup>
                          </i>
                          <div className="testimonial_header">
                            <i> Norman, &nbsp;&nbsp;&nbsp;</i>
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
                            <span className="test_txt"> Your service is absolutely great, and my family and I really appreciate the healthy food you provide us with.</span>
                            <sup>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                              </svg>
                            </sup>
                          </i>
                          <div className="testimonial_header">
                            <i>Towanda,&nbsp;&nbsp;&nbsp;</i>
                            <i>Bronx,&nbsp;&nbsp;&nbsp;</i>
                            <i>Homebound Delivery  &nbsp;&nbsp;&nbsp;</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{top:"50%", transform:"translate(0%,-50%)"}}>
               <span className="carousel-control-prev-icon" aria-hidden="true" style={{marginTop:"3px"}}></span>
                 <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{top:"50%", transform:"translate(0%,-50%)"}}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{marginTop:"3px"}}></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 i-div">
        <iframe
          src="https://player.vimeo.com/video/796482765?h=a2636b2c1c&title=0&byline=0&portrait=0"
          frameborder="0"
          title="Video 2: Description of the video content"
          allow="autoplay"
          onLoad={autoPalay1}
          className="iframe_2"
          id="video2"
        ></iframe>
      </div>
      <div className="cbo_network_bg" id="sbo_network_partener">
        <div className="container mb-5 mt-0">
          <div className="row main-row">
            <small className="text-center sub_head mt-5">CBO NETWORK PARTNERS</small>
            <div className="col-md-12 text-center">
              <h2 className="font-weight-bold">
                Collaboration is the key to building a <br />
                sustainable ecosystem to address the <br />
                root causes of hunger and wellness.
              </h2>
            </div>
            <p className="text-center">
              As bridge makers; focusing on collaboration and increasing
              efficacy through our approach by <br /> bringing meal recipients,
              community based organizations, local small business, and donors
              <br /> together to making the steps forward together.
            </p>

            <div className="col-md-4 mb-5 mt-4">
              <div className="border-0" style={{margin:"0 auto"}}>
                <div className="card-body p-0" style={{ position: "relative", display: "flex",justifyContent: "center",}}>
                  <img className="img-fluid" src={icon5} alt="pexels1" style={{width:"23vh"}} />
                </div>
                <div className="card-footer" style={{border:"none",background:"none"}}>

                  <h5 style={{ display:"flex", justifyContent:"center", textAlign: "center"}}> Join More Than a Meal’s <br /> CBO Network </h5>
                  <p style={{textAlign:"center"}}> Register to start finding ways to collaborate with More Than
                    a Meal's ecosystem
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 mt-4">
              <div className="border-0" style={{margin:"0 auto"}}>
                <div className="card-body  p-0" style={{ position:"relative",display:"flex",justifyContent:"center"}}>
                  <img className="img-fluid" src={icon6} alt="pexels2" style={{width:"23vh"}}/>
                </div>
                <div
                  className="card-footer" style={{border:"none",background:"none"}}>
                  <h5 style={{ display:"flex",justifyContent:"center",textAlign:"center"}}>
                    Get access to donation and <br />
                    Volunteer support
                  </h5>
                  <p style={{textAlign:"center"}}>
                    Get access to production donations, volunteer support, and
                    tech-enabled solutions to streamline your CBO’s operations
                    and communication to community members
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 mt-4">
              <div className="border-0" style={{margin:"0 auto"}}>
                <div className="card-body  p-0" style={{position:"relative", display:"flex",justifyContent:"center"}}>
                  <img className="img-fluid" src={icon7} alt="pexels3" style={{width:"23vh"}} /> 
                </div>
                <div className="card-footer" style={{border:"none",background:"none"}}>
                  <h5 style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
                    Build collection and explore <br /> fundraising
                    opportunities
                  </h5>
                  <p style={{textAlign:"center"}}>
                    Build coalition and explore fundraising opportunities to
                    support a local ecosystem for sustainable change.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <h2 className="slider_bullet">&bull; &bull; &bull;</h2>
            </div>
            <div className="col-md-12 text-center mt-5">
              <h2 className="mt-3">
                Register to start finding ways to collaborate with <br />
                More Than a Meal's ecosystem.
              </h2>
            </div>
            <div className="col-md-12 text-center  mb-5 mt-5">
              <a href="https://form.jotform.com/223485082931155" className="join-team" > Join our Network </a>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial_back pb-3">
        <div className="container mb-4">
          <div className="row">
            <small className="col-12 text-center sub_head mt-5 testimonial_main">TESTIMONIALS</small>
            <div className="col-12 text-center">
              <h2 className="test_recipt">Stories from the Ground</h2>
            </div>
            <div id="carouselExampleDark1" className="carousel carousel-dark slide"  data-bs-ride="carousel" style={{height:"50vh",display:"flex",alignItems:"center"}} >
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
                            <span className="test_txt">
                              Thank you very much. My family and I appreciate your help in feeding us diligently throughout the year. Thank you once again.
                            </span>
                            <sup>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd">
                                <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                              </svg>
                            </sup>
                          </i>
                          <div className="testimonial_header">
                            <i> Agatha, &nbsp;&nbsp;&nbsp;</i>
                            <i>Brooklyn, &nbsp;&nbsp;&nbsp;</i>
                            <i>Grocery Program &nbsp;&nbsp;&nbsp;</i>
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
                            <span className="test_txt">Your service is absolutely great, and my family and I really appreciate the healthy food you provide us with. </span>
                            <sup>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ms-2 abcd" >
                                <path fill="#ccc" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                              </svg>
                            </sup>
                          </i>
                          <div className="testimonial_header">
                            <i>Towanda,&nbsp;&nbsp;&nbsp;</i>
                            <i>Bronx,&nbsp;&nbsp;&nbsp;</i>
                            <i> Homebound Delivery &nbsp;&nbsp;&nbsp;</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev" style={{top:"50%",transform:"translate(0%,-50%)"}}>
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{marginTop:"3px"}}></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1"  data-bs-slide="next" style={{top:"50%",transform:"translate(0%,-50%)"}}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{marginTop:"3px"}}></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="i-div">
          <iframe
            src="https://player.vimeo.com/video/770961468?h=b86a13cfe6"
            frameborder="0"
            title="Video 3: Description of the video content"
            allow="autoplay"
            onLoad={autoPalay2}
            className="iframe_2"
            id="video3"
          ></iframe>
        </div>
        <div className="brand_partner_bg" id="brand_corp_partener"> 
          <div className="container brand mt-0">
            <div className="row">
              <div className="col-12 col-md-3 offset-md-1">
                <small className="sub_head mt-5">WORKING WITH OUR PARTNERS</small>
                <h2>Brand & corporate <br />
                    partners 
                </h2>
              </div>
              <div className="col-12 col-md-6 offset-md-1 pt-4 working_partners">
                <p>
                  We work closely with our brand partners to develop
                  mutually-beneficial <br /> fundraising campaigns, co-branded
                  merchandise, and experiences to advance <br /> both of our
                  missions.
                </p>
                <div className="brandCorporate">
                  <p> &#10003; Financially donating to provide meals for communities </p> 
                  <p> &#10003; Fundraising with their brand, restaurant and customers </p>
                  <p> &#10003; Facilitating excess food donations through Food Brands and Manufacturers </p>
                  <p> &#10003; Advocating for our programs and spreading awareness of our programs </p>
                  <p>&#10003; Hosting events that bring together our networks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5 mt-4">
                <div className="border-0 image_h">
                  <div className="card-body p-0 image_subh">
                    <img className="img-fluid_mob" src={icon8} alt="pexels1" style={{width:"23vh"}} />  
                  </div>
                  <div className="card-footer footer_h">
                    <h5 className="footer_h5"> Promote your commitment <br /> through hosting events </h5>
                    <p className="footer_p">
                      Promote and celebrate your commitment through hosting
                      volunteer events with your colleagues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mt-4">
                <div className="border-0 image_h">
                  <div className="card-body  p-0 image_subh">
                    <img className="img-fluid" src={icon9} alt="pexels2" style={{width:"23vh"}}/>
                  </div>
                  <div className="card-footer footer_h">
                    <h5 className="footer_h5"> Engage your local communities <br /> with your mission  </h5>
                    <p className="footer_p"> Engage your customers, employees and local communities with our mission. </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mt-4">
                <div className="border-0 image_h">
                  <div className="card-body  p-0 image_subh">
                    <img className="img-fluid" src={icon10}  alt="pexels3" style={{width:"23vh"}} /> 
                  </div>
                  <div className="card-footer footer_h">
                    <h5 className="footer_h5">
                      Make your contributions <br /> visible width story telling
                    </h5>
                    <p className="footer_p">
                      Qualify for tax benefits for both monetary and in-kind
                      gifts. Make your contributions visible with story telling
                      within the community. We provide ESG reporting to all
                      donors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center mb-5">
             <a href="https://form.jotform.com/230396408666060" className="join-team mb-5">Partner with Us </a>
          </div>
        </div>
      </div>
      <div className="main12">
        <div className="mainsub">
          <h5>OUR PARTNERS</h5>
        </div>
        <div className="mainsub_header">
          <strong>
            Become a member of our community of <br /> corporate and community
            partners
          </strong>
        </div>

        <div className="container-fluid mt-4 mb-5 lastimage">
          <div className="row">
            <div className="col-6 col-lg-3 our-partners">
              <img src={fidelis} alt="fidelis" />
            </div>
            <div className="col-6 col-lg-3 our-partners">
              <img src={David} alt="David" />
            </div>
            <div className="col-6 col-lg-3 our-partners">
              <img src={Panda} alt="Panda" />
            </div>
            <div className="col-6 col-lg-3 our-partners">
              <img src={phllip} alt="phllip" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-lg-3 our-partners">
              <img src={empire} alt="empire" />
            </div>
            <div className="col-6 col-lg-3 our-partners  ">
              <img src={vite} alt="vita" />
            </div>
            <div className="col-6 col-lg-3 our-partners">
              <img src={kvraoye} alt="kvraoye" />
            </div>
            <div className="col-6 col-lg-3 our-partners">
              <img src={matriark} alt="matriark" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="i-div">
          <iframe
            src="https://player.vimeo.com/video/796488757?h=9d23568c8f&title=0&byline=0&portrait=0"
            frameborder="0"
            title="Video 4: Description of the video content"
            allow="autoplay"
            onLoad={autoPalay3}
            className="iframe_2"
            id="video4"
          ></iframe>
        </div>
        <div className="bg-class d-flex align-items-center" id="volunteer">
          <div className="container">
            <div className=" row  volunteer_main">
              <div className="col-12 col-md-4 offset-md-1">
                <img src={volunteers} alt="" className="volunteers-img" />
              </div>
              <div className="col-12 col-md-6 offset-md-1 ">
                <small className="sub_head">Volunteer</small>
                <h3>
                  Volunteers are an essential part <br />
                  of More Than a Meal’s work and
                  <br />
                  mission.
                </h3>
                <hr />
                <p>Please come back to check for upcoming opportunities</p>
                <p>MTAM - Brooklyn Grange Sunset Park </p>
                <button className="register-now mb-5">REGISTER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="join-us">
        <small className="sub_head">JOIN US</small>
        <p>Register to start finding ways to collaborate with <br /> 
           More Than a Meal's ecosystem.
        </p>
        <div className="footer_bu">
           <a href="https://form.jotform.com/222855229973063" className="join-team">JOIN OUR VOLUNTEER TEAM</a>    
           <a href="https://form.jotform.com/230376210765049" className="submit-an ms-3"> SUBMIT AN INITIATIVE </a>
        </div>
      </div>
    </>
  );
};

export default Home;
