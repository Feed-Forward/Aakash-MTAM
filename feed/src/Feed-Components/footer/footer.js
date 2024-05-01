import React,{useState,useEffect} from 'react';
import "../footer/footer.scss";
import MTAMLogo from "../assets/MTAM-icon-outline.png";
import mapf from "../assets/maps.png";
import {FaLinkedinIn} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import modalStyles from "./../Map/modal.module.scss";
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';

export const Footer = (props) => {

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
        document.body.style.position = 'fixed'
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
            style={{ width: '440px', height: '1130px',margin: '23px auto', border: 'none' }}
            title="donately"
        ></iframe>
    } else if (440 > width > 350) {
        // console.log("statement #2")
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign1}
            style={{ width: '350px', height: '1130px', margin: '23px auto', border: 'none' }}
            title="donately"
        ></iframe>
    } else {
        // console.log("statement #3")
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign2}
            style={{ width: '300px', height: '1130px', margin: '23px auto', border: 'none' }}
            title="donately"
        ></iframe>
    }

  return (
    <>
      <div className='container-fluid footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3 ps-lg-5 ps-0 feed-logo m-0 p-0 mt-3'>
              <div className='d-flex align-items-center justify-content-lg-start justify-content-center'>
                <img className="images" src={MTAMLogo} /> 
              </div>
              <input className='mt-3 Sub_Email' type="text" style={{color:"black"}} placeholder='Enter Address' /><br/>
              {/* <button className='mt-3 footer-subscribe'><a className='subscribe-btn' href="https://mtamnyc--ttgcomnty.sandbox.my.site.com/Volunteer/s/email-subscription">SUBSCRIBE</a></button>   */}
              <button className='mt-3 footer-subscribe'>SUBSCRIBE</button>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 offset-lg-1 footer-adderss mt-5" >
              <h5 className="font-weight-bold text-white footer_content">EXPLORE</h5>
              <div style={{justifyContent:"center"}} className='d-flex align-items-start'>
                <div className="location_icoin">
                  <img src={mapf} style={{height:"3vh",marginTop:"0.5vh",marginRight:"1vh"}} />
                </div>
                <p className='text-white address'>More Than a Meal 63 Flushing Ave Building 58 Suite 1A
                  Brooklyn, NY 11205
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 ps-0 ps-lg-5 footer-link px-lg-0 mt-5">
              <h5 className='font-weight-bold text-white footer_content'>GET TO KNOW US</h5>
              <p className='text-white footer_content'>Press Room</p>
              <p className='text-white footer_content'>Privacy Policy</p>
              <p className='text-white footer_content'>Terms of Use</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 ps-0 ps-lg-5 footer-social mt-5">
              <h5 className='font-weight-bold text-white footer_content  mb-3'>FIND US ON</h5>
              <a target="_blank" href="https://www.linkedin.com/company/morethanameal/" className='Icon2'>
                <FaLinkedinIn className='linked mx-2' size={30} />
              </a>
              <a target="_blank" href="https://www.instagram.com/mtamnewyork/" className='Icon1'>
                <BsInstagram className='insta mx-2' size={30}/>
              </a><br />
              <div className="footer_dntus">
                  <a className="donate_us" onClick={showModal}>DONATE TO US </a>
                  <Modal  show={isOpen} onHide={hideModal} size="lg" >
                      <Modal.Header style={{height:"55px"}}>
                         <Button className={modalStyles.closeBtn} onClick={hideModal} style={{backgroundColor:"#ffcc00",padding:"5px"}}>X</Button>
                     </Modal.Header>
                      <div style={{'max-width':'445px',margin:'10px auto'}}>
                          {DonatelyForm}
                      </div>
                  </Modal>  
              </div>
            </div>
            <p className='copy-right'>More Than a Meal is fiscally sponsored through Edward Charles Foundation, a 501(c)(3) non-profit organization.<br /> TAX ID 26-4245043</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
