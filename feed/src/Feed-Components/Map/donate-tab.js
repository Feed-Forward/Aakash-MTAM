import React, { useEffect, useState } from "react";


const DonateTab = props => {
    const { width } = useWindowDimensions();
    let campaign = `../donate-form.html?${props.campaign}`;
    let campaign1 = `../donate-form1.html?${props.campaign}`;
    let campaign2 = `../donate-form2.html?${props.campaign}`;

    let DonatelyForm;
    if (width > 440) {
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign}
            style={{ width:'440px',height:'1130px',border:'none',marginTop:"50px"}}
            title="donately"
        ></iframe>
    } else if (440 > width > 350) {
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign1}
            style={{ width: '350px', height: '1130px', border: 'none' }}
            title="donately"
        ></iframe>
    } else {
        DonatelyForm = <iframe
            scrolling="no"
            id="donateId"
            src={campaign2}
            style={{ width: '300px', height: '1130px', border: 'none' }}
            title="donately"
        ></iframe>
    }


    return (
        <div style={{ 'max-width': '445px', margin: '50px auto' }}>
            {DonatelyForm}
        </div>
    );
};
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
export default DonateTab;
