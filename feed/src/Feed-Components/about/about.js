import React from 'react'
import '../about/about.scss';
import Winston from "../assets/Winston.jpg";
import Xavier from "../assets/Xavier.jpg";
import Michale from "../assets/Michael.jpg";
import Sanjana from "../assets/Sanjana.jpg";
import Caitlin from "../assets/Caitlin.jpg";


export const About = () => {
  return (
    <>
      <section className="txt-block navy-colored-block btm-margin no-top-margin">
        <div className="width1240px row">
          <div className="col-md-12 col-sm-12">
            <h1 className="btm-margin text-center mt-5" style={{color:"white"}}>Our Mission & Vision</h1>
            <br />
          </div>
        </div>
        <div className="width1240px row text-center">
          <div className="col-md-12 col-sm-12">
            <p className="white-txt mb-5">
              More Than a Meal is committed to fighting food insecurity and promoting wellness in the community through building sustainable and resilient food systems. Our vision is to create a community where everyone has access to healthy and sustainable food options, promoting a culture of wellness and reducing the impact of food insecurity on health outcomes.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="width1240px btm-padding">
          <div className="col-md-12 col-sm-12 team123">
            <h1>Team</h1>
          </div>

          <div className="container">
            <div className='row text-center'>
              <div className='col-12 col-md-6 col-lg-4  mt-3'>
                <div sx="12" className="maincontainer" >
                  <div className='transform-effect'>
                    <div className="bio"></div>
                    <img src={Winston} alt="Winston Chiu" style={{height:"40%"}} className="zoom" />
                    <h4>Winston Chiu</h4>
                    <h5> Founder/Executive Director</h5>
                    <div className="bio-txt">
                      <h5>A New York native, Winston is deeply passionate about making a positive impact in the areas of cooking, community building, and helping others. In his personal life, he is dedicated to finding balance and exploring different cultures, always looking for ways to connect with others.
                        As a former actuary turned chef, Winston has developed strong instincts in risk management and applies this to decision making in real-life situations. His experience growing up in New York and facing challenges with limited resources and guidance has taught him the importance of using his own experiences to create opportunities for others.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-6 col-lg-4 mt-3'>
                <div sx="12" className="maincontainer">
                  <div className='transform-effect'>
                    <div className="bio"></div>
                    <img src={Sanjana} alt="Meg Savage" className="zoom" />
                    <h4> Sanjana Palkhiwala </h4>
                    <h5>Impact Manager</h5>
                    <div className="bio-txt">
                      <h5>Sanjana blends her passion for food with her professional experience to make a positive impact in her community. With a background in finance and technology management, She is dedicated to using her skills to help better understand the needs of her community and working to create strategies that will help them. She is excited to continue learning, growing and making a difference in the community</h5>
                    </div>
                  </div>
                </div>

              </div>
              <div className='col-12 col-md-6 col-lg-4 mt-3'>
                <div sx="12" className="maincontainer">
                  <div className='transform-effect'>
                    <div className="bio"></div>
                    <img src={Michale} alt="Elizabeth Peralta" className="zoom" />
                    <h4>Michael Brafman</h4>
                    <h5> Culinary Operations Director</h5>
                    <div className="bio-txt">
                      <h5>With over 20 years of experience in the food service industry, Michael is a seasoned professional who is passionate about learning and growing in his role. As a chef at heart, Michael is driven by a love of cooking and a desire to create delicious, high-quality meals.
                        Michael is deeply committed to helping those in need. He believes that we have a responsibility to "pay it forward" and is always looking for ways to make a positive impact in his community.
                        Michael's background in chemistry and education connect to his professional career in food science, and his personal experiences and his family are his biggest accomplishment. He is dedicated to his work and finds great fulfillment in helping others.
                      </h5>
                    </div>
                  </div>
                </div>

              </div>
              <div className='col-12 col-md-6 mt-3'>
                <div sx="12" className="maincontainer">
                  <div className='transform-effect'>
                    <div className="bio"></div>
                    <img src={Xavier} style={{height:"66%"}} alt="Jimmy Tran" className="zoom" />
                    <h4>Xavier Ponce</h4>
                    <h5>Impact Coordinator</h5>
                    <div className="bio-txt">
                      <h5>Xavier is currently studying at Saint Francis College to pursue a career in digital and social media management. His personal experiences growing up in Brooklyn, NY and seeing his neighbors and community in need, have also shaped his desire to give back.  Xavier is passionate to making a difference in the lives of communities around New York City. He is driven by the opportunity to capture their stories, make connections, meet new people, and provide them with the resources they need. He is committed to spreading love and joy to those around him.</h5>
                    </div>
                  </div>
                </div>

              </div>
              <div className='col-12 col-lg-6 mt-3'>
                <div sx="12" className="maincontainer">
                  <div className='transform-effect'>
                    <div className="bio"></div>
                    <img src={Caitlin} alt="Caitlin Black" className="zoom" />
                    <h4>Caitlin Black</h4>
                    <h5>Director, Philanthropy</h5>
                    <div className="bio-txt">
                      <h5>Born and raised in Brooklyn, Caitlin has spent over a decade in business development and fundraising in both for-profit and not-for-profit organizations.  She has a deep interest in the relationship between food insecurity and health outcomes. Caitlin lives in Pennsylvania with her husband and child and is working on perfecting her cinnamon roll recipe.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;


