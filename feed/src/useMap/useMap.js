
import {useState,useEffect} from "react";
import axios from 'axios';

const useMap = () => {
    const [position,setPosition] = useState({  
        lat: 51.509865,
        lng: -0.118092,
    })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                setPosition({ lat: coords?.latitude, lng: coords?.longitude });
            },
            (blocked) =>{

                if(blocked) {
                    const fetch = async () =>{
                        try{
                            const data = await axios.get("https://ipapi.co/json");
                            console.log(data.ip)
                            setPosition({ lat: data?.latitude, lng: data?.longitude });

                        }catch(error){
                            console.log(error);
                        }
                    };

                    fetch()
                }
                
            }
        )

    },[]);
    return {position};
  
}

export default useMap