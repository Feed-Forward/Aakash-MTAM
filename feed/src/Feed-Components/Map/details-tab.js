import React from "react";
import {Col, Row} from "react-bootstrap";
import modalStyles from "./modal.module.scss";
import Carousel from "react-bootstrap/Carousel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {OutboundLink} from "gatsby-plugin-google-analytics";
// import BlogTile from "./show-blog";
let instagram, facebook, website;
const DetailsTab = props => {
    if (props.instagram){
        instagram = faInstagramSquare;
    }
    if (props.facebook){
        facebook = faFacebook;
    }
    if (props.website){
        website = faGlobe;
    }
    function displayquote() {
        if (props.quote){
           return <Row className={modalStyles.infoblock}>
               <Col md={12}>
                   <div className={modalStyles.quoteblock}>
                       <h3 className={modalStyles.quote}>"{props.quote}"</h3>
                       <p className={modalStyles.ownerName}>- {props.owner}</p>
                   </div>
               </Col>
           </Row>
        } else{
            return <div></div>
        }
    }
    function displayquestions() {
        if (props.fulldescription1){
            return <Col md={8} sm={12} >
                <p>
                    <b>{props.q1}</b><br/><br/>
                    {props.fulldescription1}
                </p>
                <br/>
                <p>
                    <b>{props.q2}</b><br/><br/>
                    {props.fulldescription2}
                </p>
                <br/>
                <p>
                    <b>{props.q3}</b><br/><br/>
                    {props.fulldescription3}
                </p>
                <br/>
                <p>
                    <b>{props.q4}</b><br/><br/>
                    {props.fulldescription4}
                </p>
                <br/>
            </Col>
        } else{
            return <div></div>
        }
    }


    return (
        <div className={modalStyles.detailsTab} style={{marginLeft:"12px",marginRight:"12px"}}>
            <Row>
                <Col sm={12} md={12} className={modalStyles.carousel} style={{marginTop:"80px"}}>
                    <Carousel
                        fade
                        indicators={true}
                        controls={true}
                    >
                        {props.slides.map((slide) => (
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100 slide"
                                    src={slide}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            ))}
                        {/*<Carousel.Item>*/}
                        {/*    <video style={{height:360,width:'100%'}} controls>*/}
                        {/*        <source*/}
                        {/*            // src={videoTest}*/}
                        {/*            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"*/}
                        {/*                type="video/mp4"></source>*/}
                        {/*        Sorry, your browser doesn't support videos.*/}
                        {/*    </video>*/}

                        {/*    /!*<Player style={{height:360,width:'100%',padding:'0px'}} src={videoTest}>*!/*/}
                        {/*    /!*    <BigPlayButton position="center" />*!/*/}
                        {/*    /!*</Player>*!/*/}
                        {/*</Carousel.Item>*/}
                    </Carousel>
                </Col>
            </Row>

            {displayquote()}

            <Row className={modalStyles.infoblock}>
                <Col md={4} sm={12} className={modalStyles.leftBlock}>
                    <p className={modalStyles.infoText}><b>Cuisine:</b> {props.cuisine}</p>
                    <p className={modalStyles.infoText}><b>Established:</b> {props.est}</p>
                    <p className={modalStyles.infoText}><b>Owner:</b> {props.owner}</p>
                    <div className={modalStyles.map}>
                        <iframe
                            src={props.googleMapSRC}
                            title="Video 5: Description of the video content"
                            width="190" height="190" style={{border:0}}
                            loading="lazy" ></iframe>
                            
                    </div>
                    <OutboundLink target="_blank" href={props.googleMapURL} >
                    <p className={modalStyles.infoText}><b>{props.name}</b></p>
                    <p className={modalStyles.infoText}>{props.addressL1}</p>
                    <p className={modalStyles.infoText}>{props.addressL2}</p>
                    </OutboundLink>
                    <OutboundLink target="_blank" href={props.website} >
                        <FontAwesomeIcon icon={website} size="2x" className={modalStyles.sIcon}/>
                    </OutboundLink>
                    <OutboundLink target="_blank" href={props.instagram} >
                        <FontAwesomeIcon icon={instagram} size="2x" className={modalStyles.sIcon}/>
                    </OutboundLink>
                    <OutboundLink target="_blank" href={props.facebook} >
                        <FontAwesomeIcon icon={facebook} size="2x" className={modalStyles.sIcon}/>
                    </OutboundLink>
                </Col>

                {displayquestions()}
            </Row>
        </div>
    );
};
export default DetailsTab;
