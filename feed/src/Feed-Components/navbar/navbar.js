import React, { useState,useEffect,CSSProperties } from "react";
import "../navbar/navbar.scss";
import MTAMLogo from "../assets/MTAM-profile-3.png";
import { Link, useNavigate } from "react-router-dom";
import global from "../assets/global.png";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { RxHamburgerMenu } from "react-icons/rx";
import modalStyles from "./../Map/modal.module.scss";
import Modal from "react-bootstrap/Modal";
import { HashLink } from 'react-router-hash-link';
import axios from "axios";
import axiosInstance from "../Interceptor/index";

export const Navbar = (props) => {
  let grant_type= process.env.REACT_APP_GRANT_TYPE
  let link= process.env.REACT_APP_LINK
  let client_id= process.env.REACT_APP_CLIENT_ID
  let client_secret= process.env.REACT_APP_CLIENT_SCRET
  let username= process.env.REACT_APP_USERNAME
  let password= process.env.REACT_APP_PASSWORD

  
  const [banner, setBanner] = useState('');
  const data =`${link}?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&username=${username}&password=${password}`

  let date = new Date();
  let month = date.getMonth()+1;
  let year =date.getFullYear();
  
  useEffect(() => {
    axios.post(data).
      then((response) => {
        if(response.data.access_token){
          localStorage.setItem("token",response.data.access_token)
          callingAPI()
        }
      }, (error) => {
        console.log(error)
      })
  }, [banner])

  const callingAPI = async() => {
    try {
      const resData  = await axiosInstance.get(`/services/data/v44.0/query/?q=Select+Name,Year__c,Month__c,Multiline_Content__c+from+Website_Content__c+where+Type__c+=+'Website+Banner'+and+Active__c++=+true+and+Year__c+=+${year}+and+Month__c+=+'${month}'`)
      setBanner(resData?.data?.records[0].Multiline_Content__c)
    } catch (error) {
      console.log(error)
    }
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
        document.body.style.position ='fixed'
        document.body.style.width = "100%"
    };

    const hideModal = () => {
        setIsOpen(false);
        document.body.style.position = 'static'
    };
    const { height, width } = useWindowDimensions();
    let campaign = '../donate-form.html' + '?' + props.campaign;
    let campaign1 = '../donate-form1.html' + '?' + props.campaign;
    let campaign2 = '../donate-form2.html' + '?' + props.campaign;
    let DonatelyForm;
    // console.log(width)
    if (width > 440) {
        // console.log("statement #1")
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign}
            style={{width:'440px',height:'1130px',margin:'23px auto',border:'none'}}
            title="donately"
        ></iframe>
    } else if (440 > width > 350) {
        // console.log("statement #2")
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign1}
            style={{width:'350px',height:'1130px',margin:'23px auto',border:'none'}}
            title="donately"
        ></iframe>
    } else {
        // console.log("statement #3")
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign2}
            style={{width:'300px',height:'1130px',margin:'23px auto',border:'none'}}
            title="donately"
        ></iframe>
    }

  return (
    <>
      <div className="container-fluid container-background hiddencontent">
        <div className="row">
          <div className="col-10">
           {/* <p className="text-margin">
              Latest News: Welcome to More Than a Meal. Caribbean-American Heritage Month LGBT Pride Month {banner}!
            </p>
           {/* {!banner && <div class="spinner-border spinner-border-sm text-light" role="status" style={{margin: "11px 0px 0px 375px"}}>
               <span class="sr-only">Loading...</span>
          </div>} */}
          </div>
          <div className="col-1 global_img">
            <img src={global} alt="global" />
          </div>
          <div className="col-1">
            <h5 className="text-float">ENG</h5>
          </div>
        </div>
      </div>
      <div className="d-none d-md-flex justify-content-between align-items-center desktop-nav">
        <div className="d-flex justify-content-center  align-items-center">
          <Link to="/">
            <img src={MTAMLogo} width="77%" margin-bottom="27px" alt="Logo" className="logo-img"/>
          </Link>
        </div>
        <div className="d-flex align-items-center w-75 justify-content-end nav-menu">
          <div>
            <DropdownButton className="dropdown-toggle2" title="About Us">
              <Dropdown.Item className="dropdown_about" href="/impact">
                our impact
              </Dropdown.Item>
              <div className="dropdown-divider m-0"></div>
              <Dropdown.Item className="dropdown_about" href="/about">
                our leaders
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="drop_bu">
            <DropdownButton className="dropdown-toggle2" title="Get Involved" onClick={() => navigate("/involved")} >
              <Dropdown.Item className="dropdown_anch">
                 <HashLink smooth to="#sbo_network_partener">
                    Join Our CBO
                </HashLink>
              </Dropdown.Item>
                <div className="dropdown-divider m-0"></div>
              <Dropdown.Item className="dropdown_anch">  
                   <HashLink smooth to="#brand_corp_partener">
                     Partner with Us
                   </HashLink>
              </Dropdown.Item>
              <div className="dropdown-divider m-0"></div>
              <Dropdown.Item className="dropdown_anch">
                 <HashLink smooth to="#volunteer">
                     Volunteer
                 </HashLink>
              </Dropdown.Item>
              <div className="dropdown-divider m-0"></div>
              <Dropdown.Item className="dropdown_anch" href="#register_for_food">
                Recipient Sign Up
              </Dropdown.Item>
              <div className="dropdown-divider m-0"></div>
            </DropdownButton>
          </div>

          <div className="nav-list">
            <Link to="/recipients" className="need-food1" style={{textDecoration:"none"}}>
               NEED FOOD
            </Link>
          </div>
          <div className="nav-list give-food">
            <Link onClick={showModal} className="need-food" style={{ textDecoration:"none",color:"black"}} >
               WAYS TO GIVE
            </Link>
            <Modal  show={isOpen} onHide={hideModal} size="lg">
                <Modal.Header style={{height:"55px"}}>
                    <Button className={modalStyles.closeBtn} onClick={hideModal}>X</Button>
                </Modal.Header>
                <div style={{'max-width':'445px',margin:'10px auto'}}>
                    {DonatelyForm}
                </div>
            </Modal>  
          </div>
        </div>
      </div>
      <div className="d-flex d-md-none align-items-center justify-content-between mobile-nav">
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/">
            <img src={MTAMLogo} width="77%" margin-bottom="27px" alt="Logo" className="logo-img" /> 
          </Link>
        </div>
        <div>
          <div>
            <button className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
              <RxHamburgerMenu style={{height:"30px",width:"30px"}} />
            </button>
            <div className="offcanvas offcanvas-top canva" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div className="offcanvas-header">
                <h5 id="offcanvasTopLabel me-5">
                  <div className="d-flex">
                     <img  className="ms-3" src={MTAMLogo}  alt="logo"style={{height:"50px",width:"50px"}}/>  
                  </div>
                </h5>
                <button type="button" className="btn-close text-reset me-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className="mob_size ms-4">
                  <Link to="/about" className="off_can">
                      <span  data-bs-dismiss="offcanvas" aria-label="Close">ABOUT US</span>
                  </Link>
                  <Link to="/involved" className="off_can">
                     <span  data-bs-dismiss="offcanvas" aria-label="Close">GET INVOLVED</span>
                  </Link>
                  <Link to="/recipients" className="off_can" >
                    <span  data-bs-dismiss="offcanvas" aria-label="Close">NEED FOOD</span> 
                  </Link>
                <div>
                       <Link className="off_can" onClick={showModal}>
                              <span  data-bs-dismiss="offcanvas" aria-label="Close">WAYS TO GIVE</span>     
                      </Link> 
                      <Modal  show={isOpen} onHide={hideModal} size="lg">
                            <Modal.Header style={{height:"55px"}}>
                                <Button className={modalStyles.closeBtn} onClick={hideModal}>X</Button>
                            </Modal.Header>
                            <div style={{'max-width':'445px',margin:'10px auto'}}>
                                {DonatelyForm}
                           </div>
                     </Modal>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
