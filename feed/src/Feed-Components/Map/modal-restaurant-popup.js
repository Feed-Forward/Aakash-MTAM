import React, { useLayoutEffect } from 'react'
import { Button, Col, Image, Row, Nav } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import modalStyles from "./modal.module.scss";
import partner from '../assets/mtam-page/clock.svg'
import donate from '../assets/mtam-page/clock.svg'
import "leaflet/dist/leaflet.css";
import './restaurant-popup.scss'
import DetailsTab from "./details-tab";
import DonateTab from "./donate-tab";


const ModalRestaurantPopup = props => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState("details");

    const showModal = () => {
        setIsOpen(true);
        document.body.style.position = 'fixed'
        document.body.style.width = "100%"

    };

    const hideModal = () => {
        setIsOpen(false);
        document.body.style.position = '';
    };


    const LearnMoreButton = () => {
        if (props.googleMapURL != '') {
            console.log("")
            return <Button className="btn-custom2 btn-more " onClick={showModal} style={{widht:"40%"}}>learn more</Button>
        } else {
            return null;
        }
    }

    const part = <p className="tabText"><img className="tabIcon" src={partner} />Partner Details</p>
    const donat = <p className="tabText"><img className="tabIcon" src={donate} />Donate</p>
    return (

        <div className="rest-modal">
            {LearnMoreButton()}
            <Modal show={isOpen} onHide={hideModal} size="lg" >
                <Modal.Header className={modalStyles.restHeader}>
                    <h2 className={modalStyles.restName}>{props.name}</h2>
                    <a className={modalStyles.restCloseBtn} onClick={hideModal}></a>
                </Modal.Header>
                <div className={modalStyles.tabs}>
                    <ul className="nav">
                        <li
                            onClick={() => setActiveTab("details")}
                            className={activeTab === "details" ? "active" : ""}
                        >
                            <span>{part}</span>

                        </li>
                        <li
                            onClick={() => setActiveTab("donation")}
                            className={activeTab === "donation" ? "active" : ""}
                        >
                            <span>{donat}</span>

                        </li>
                    </ul>
                    <div>
                        {activeTab === "details" ?
                            <DetailsTab
                                name={props.name}
                                addressL1={props.addressL1}
                                addressL2={props.addressL2}
                                cuisine={props.cuisine}
                                owner={props.owner}
                                q1={props.q1}
                                q2={props.q2}
                                q3={props.q3}
                                q4={props.q4}
                                fulldescription1={props.fulldescription1}
                                fulldescription2={props.fulldescription2}
                                fulldescription3={props.fulldescription3}
                                fulldescription4={props.fulldescription4}
                                website={props.website}
                                slides={props.slides}
                                quote={props.quote}
                                instagram={props.instagram}
                                position={props.position}
                                icon={props.icon}
                                est={props.est}
                                googleMapSRC={props.googleMapSRC}
                                googleMapURL={props.googleMapURL}
                            /> :
                            <DonateTab campaign={props.campaign} />}
                    </div>

                </div>
                {activeTab === "details" ?
                    <div className={modalStyles.longBtn}>
                        <Button onClick={(k) => setActiveTab("donation")} className={activeTab === "donation" ? "active" : ""}>Donate to {props.name}</Button>
                    </div>
                    : <div></div>}
            </Modal>
        </div>
    )
}

export default ModalRestaurantPopup

