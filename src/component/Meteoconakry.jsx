import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Meteoconakry = () => {
    const [temp, setTemp] = useState(0)
    const [icon, seticon] = useState("")
    const[hum,sethum]=useState(0)
    const[nom,setnom]=useState("")
    const [inputvalue, setinputvalue] = useState("conakry");

    const handlechange = (e) => {
        setinputvalue(e.target.value)
        console.log(e.target.value)
        search( inputvalue )
    }
    function search(country) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=Metric&appid=7e6dd43a54184f669a01e90e07609179`)
        .then((response) => {
            console.log(response.data)
            setTemp(response.data.main.temp);
            seticon(response.data.weather[0].icon)
            sethum(response.data.main.humidity)
            setnom(response.data.name)
            
        })
        
    }

    useEffect(() => {
       search(inputvalue)



    }, []);
    return (
        <div>
            <input placeholder="saisir une ville "onChange={handlechange}></input>
            <p>{nom} </p>

            <p>temperature : {temp}</p>
            
            <p>hum:{hum} </p>
            <p>icone : {icon}</p>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            
        </div>   
    );
}

export default Meteoconakry;
