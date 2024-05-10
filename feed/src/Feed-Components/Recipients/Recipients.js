import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Recipients.scss';
import hero2 from "../assets/images/herobg.jpg";
import { AiFillInfoCircle } from "react-icons/ai";

const Recipients = () => {
  const [select, setSelect] = useState("");
  const [text, setText] = useState('')
  const [textD, setTextD] = useState('abc123@gmail.com')

  const handelCapacity = (e) => {
    setSelect(e.target.value)
  }

 

  function keyup(event) {
    let telEl = document.getElementById("phone")
    telEl.addEventListener('keyup', (e) => {
      let val = e.target.value;
      if(e.code === "Backspace"){
        e.target.value = e.target.value(1, e.target.value.length - 1)
      }
      e.target.value = val
        .replace(/\D/g, '')
        .replace(/(\d{1,3})(\d{1,3})?(\d{1,4})?/g, function (txt, f, s, t) {
          if (t) {
            return `(${f})-${s}-${t}`
          } else if (s) {
            return `(${f}) ${s}`
          } else if (f) {
            return `(${f})`
          }
        });
    })
  }

     const [data,setData] = useState("")

     const handleChanges = (e) => {
      setText(e.target.value)

     }

     const handleClicked = (e) => {
      if(textD && e.target.name === 'email'){
        setTextD('')
      }else{
        setTextD('noemail@MTAM.com')
      }
     }

     const handleOnchange = (event)=>{
          let formatedZeepcode = event.target.value.replace(/[^0-9]/g, "").slice(0, 9);
          if(formatedZeepcode.length > 5){
            formatedZeepcode = `${formatedZeepcode.slice(0,5)}-${formatedZeepcode.slice(5)}`;
          }
          setData(formatedZeepcode);
     };
        
  return (
    <>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='text-center'><img src={hero2} className="heroImg" alt="HeaderHero" /><h3 className='text-block font-weight-bold h_one '>Recipient sign up form.</h3></div>
          </div>
        </div>
        <div className='container mb-4' style={{marginTop:"0px"}}>
          <div className='row san_header'>
            <form onClick={handleClicked} action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" >
              <input type="hidden" name="oid" value="00D5f000006OJAl" />
              <input type="hidden" name="retURL" value="https://www.mtamnyc.org/Thanks" />    



              <div className='row p-5 formHead'>
                <div className='col-md-6 mt-3 fw-bold'>
                  <label for="first_name">First Name <span className='wpforms-required-label'>*</span></label>
                  <input className='first_name' id="first_name" maxlength="40" name="first_name" size="20" type="text" required="required" />
                </div>

                <div className='col-md-6 mt-3 fw-bold'>
                  <label for="first_name">Last Name <span className='wpforms-required-label'>*</span> </label>
                  <input className='last_name' id="last_name" maxlength="80" name="last_name" size="20" type="text" required="required" />
                </div>

                <div className='col-md-12 mat-4 mt-3 fw-bold'>
                  <label for="street">Address Street <span className='wpforms-required-label'>*</span></label>
                  <textarea className="Street" name="street" rows={1.7} cols={250} required="required">
                  </textarea>
                </div>

                <div className='col-md-12 mat-4 mt-3 fw-bold'>

                  <label for="apartment">Apartment Number:</label>
                  <input className='apartment' id="00N5f00000hVnR3" maxlength="255" name="00N5f00000hVnR3" size="20" type="number" /><br />
                </div>

                <div className='col-md-12 mt-3 fw-bold'>
                  <label for="city">City <span className='wpforms-required-label'>*</span></label>
                  <input className='city' id="city" maxlength="40" name="city" size="20" type="text" required="required" />
                </div>

                <div className="stateborder  mt-3 fw-bold">
                  <label for="State">State</label>
                  <span className='wpforms-required-label'>*</span><select id="00N5f00000hVdg9" name="00N5f00000hVdg9" title="State" className='selectState' required="required" >
                    <option value="" hidden>Select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District of Columbia">District of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                  </select>
                </div>
                <div class="bb-3 fw-bold mt-3">
                  <label for="zip">Zip Code</label>
                 
                 <input  fullWidth={true} disableUnderline={true} id="zip" maxlength="20" name="zip" size="20"  style={{backgroundColor:"white",height:"41px"}} onChange={handleOnchange} value={data}  placeholder="12345-5678"/>

                </div>
                <div className="mt-3 fw-bold"><label for="preferred">Preferred Language:</label>
                  <span className='wpforms-required-label'>*</span><select className='language' id="00N5f00000hVNKY" name="00N5f00000hVNKY" title="Preferred Language" required="required"  >
                    <option value="" hidden>Select Language</option>
                    <option value="english" >English</option>
                    <option value="Cantonese">Cantonese</option>
                    <option value="Mandarin">Mandarin</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mt-3 fw-bold">
                  <label for="phone" >Phone <span className='wpforms-required-label'>*</span></label>
                  <input className='phone' maxLength="14" onChange={(event) => keyup(event)} id="phone" name="phone" required="required" placeholder=' (234)-555-1234' />
                </div>
                <div className='col-md-12 mt-3 fw-bold'>
                  <label for="email">Email</label>
                  <input type="email" className='email' id="email" maxlength="80" onClick={handleClicked} onChange={handleChanges} value={text?text:textD} defaultValue={textD} name="email" size="20"  />
                </div>
                <div className="mt-3 fw-bold"> <label for="marital"> Marital Status:</label>
                  <span className='wpforms-required-label'>*</span> <select className="material_Status" id="00N5f00000hVNKT" name="00N5f00000hVNKT" title="Marital Status" required="required" >
                    <option value="" hidden>Select Marital-Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Windowed">Windowed</option>
                  </select>
                </div>
                <div class="mt-3 fw-bold">
                  <label for="person Description"> Person Description:</label><span className='wpforms-required-label' >*</span><select class="person" id="00N5f00000hVNKX" name="00N5f00000hVNKX" title="Person Description">
                    <option value="" hidden>Select Person-Description</option>
                    <option value="American Indian OR ALASKA NATIVE">American Indian OR ALASKA NATIVE</option>
                    <option value="ASIAN">ASIAN</option>
                    <option value="BLACK OR AFRICAN AMERICAN">BLACK OR AFRICAN AMERICAN</option>
                    <option value="NATIVE HAWAIIAN OR OTHER PACIFIC ISLANDER">NATIVE HAWAIIAN OR OTHER PACIFIC ISLANDER</option>
                    <option value="CAUCASIAN">CAUCASIAN</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div>
                <div class="mt-3 fw-bold">
                  <label>Program Chosen:</label><span className='wpforms-required-label' >*</span><select class="program" id="00N5f00000hVNKZ" name="00N5f00000hVNKZ" title="Program Chosen">
                    <option value="" hidden>Select program-Chosen</option>
                    <option value="" hidden>Groceries</option>
                    <option value="Ready to eat meals">Ready to eat meals</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <div className="mt-3 fw-bold"> <label for="Dependents"> Household Size: </label>
                  <span className='wpforms-required-label'>*</span> <select className="Dependents" id="00N5f00000hVNKV" name="00N5f00000hVNKV" title="Number of Dependents" required="required" >
                    <option value="" hidden>Select Household-Size</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
                <div class="snap mt-3 d-flex align-items-center">
                  <label style={{marginTop:"10px"}}>Do you receive Snap/EBT?:</label>
                  <input class="cheack mx-3 mt-1" id="00N5f00000hVNKa" name="00N5f00000hVNKa" type="checkbox" value="1" />
                  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                    <div class="info">
                      <i class="icon-info-sign"><AiFillInfoCircle /></i>
                      <span class="extra-info ">A little column extra info. Aaand just a little bit more</span>
                    </div><br />
                  </div>
                </div>
                <div className="mt-3 fw-bold" > <label for="meals"> Medically Tailored Meal: </label>
                  <span className='wpforms-required-label'>*</span>
                  <select className='meals' id="00N5f00000hVNKU" name="00N5f00000hVNKU" title="Medically Tailored Meal" onChange={handelCapacity}>
                    <option value="">Select Medically-Tailored-Meal</option>
                    <option value="Diabetic">Diabetic</option>
                    <option value="High Blood Pressure">High Blood Pressure</option>
                    <option value="Heart Conditions">Heart Conditions</option>
                    <option value="Other">Other</option>
                  </select>
                  {select == "Other" ? <div className="mt-3 fw-bold" > <label for="Details">  Other Meal Details: </label>
                    <input className=" Meal_Details" id="00N5f00000hVNKW" maxlength="255" name="00N5f00000hVNKW" size="20" type="text" />
                  </div> : null}
                </div>
                <div className='col-md-12 mt-4 fw-bold'>
                  <label >*By continuing, you certify that you have  read and agreed to the &nbsp;<a href='https://mtamnyc.org/wp-content/uploads/2022/08/TermsofUse.pdf' id="Term">Terms of Services</a>&nbsp; and the <a href="http://3.211.147.170/wp-content/uploads/2022/08/Privacy-Policy.pdf" id="Term">&nbsp;Privacy Policy.</a></label>
                </div>
                <div className='col-md-12 mt-4 fw-bold'>
                  <button className='formBtn' type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Recipients