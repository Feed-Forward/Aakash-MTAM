import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import modalStyles from "./modal.module.scss"
import Modal from "react-bootstrap/Modal";


const ModalDonate = props => {
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
            style={{ width: '440px', height: '1130px',margin: '23px auto', border: 'none'}}
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
        <div>
            <Button className="btn-custom btn-custom-small btn-custom-color donate-btn" onClick={showModal}>donate</Button>
            <Modal show={isOpen} onHide={hideModal} size="lg" >
                <Modal.Header style={{'height':"55px"}}>
                    <Button className={modalStyles.closeBtn} onClick={hideModal} >x</Button>
                </Modal.Header>
                <div style={{'max-width':'445px',margin:'10px auto'}}>
                    {DonatelyForm}
                </div>
            </Modal>
        </div>
    )
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
        return () => window.removeEventListener('resize',handleResize);
    }, []);

    return windowDimensions;
}
export default ModalDonate
