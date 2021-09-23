import React,{useState,useEffect} from 'react'

export default function GetCurrentLocation() {
 const [items,setItems] = useState([])

 useEffect(() => {
   fetch("https://ipapi.co/json")
   .then(res => res.json())
   .then(
       (result)=> {
           setItems(result)
       }
   )
 }, [])
 const GetCityName =()=>{
    let city = ""
     fetch("https://ipapi.co/json")
     .then(res => res.json())
     .then(
         (result)=> {
             console.log(result.city)
         }
     )
     return city;
 }
 console.log(GetCityName())
      const GetLongitude = () =>{
        let longitude = "";
        navigator.geolocation.getCurrentPosition(function(position) {
        longitude=position.coords.longitude
    
      });
      return longitude
  }
      
      const GetLatitude = () =>{
        let langitude = "";
        navigator.geolocation.getCurrentPosition(function(position) {
        langitude=position.coords.latitude
    
      });
      return langitude
  }
  console.log(GetLatitude())
    return (
        <div>
            <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
        </div>
    )
}
