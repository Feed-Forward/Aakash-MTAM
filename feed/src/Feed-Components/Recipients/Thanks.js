import React from 'react'
import "./Thanks.scss";
import iconcorrect from "../assets/iconcorrect.png";


const Thanks = () => {
    return (
        <>
            <div class="main">

                <div class="  text-center" style={{ height: "500px" }}>

                    <div class="card-body">
                        <img class="mb-5" src={iconcorrect} alt="icon" />
                        <div class="item">
                            <h5 class=" mt-5 mb-5"><strong><h1 style={{ marginTop: "-96px" }}>Thank You!</h1></strong> </h5>
                            <p id="sub" class="card-text"><span class="text">You details has been successfully submitted.</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Thanks