import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureQuarter,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

import Gif from "./../img/Plant.gif";

const Cards = (props) => {
  const [locationName, setlocationName] = useState("");
  const [desc, setdesc] = useState("");
  const [icon, seticon] = useState("");
  const [temp, settemp] = useState("");
  const [wind, setwind] = useState("");
  const [error, seterror] = useState("");
  const [hum, sethum] = useState("");
  const [bol, setbol] = useState(false);
  const [bol2, setbol2] = useState(true);

  useEffect(() => {
    setbol(false);
    setbol2(true);
    const params = {
      key: "00f50a2641f04117bed75524232807",
      q: props.name,
    };

    axios
      .get("https://api.weatherapi.com/v1/current.json", { params })
      .then((response) => {
        setlocationName(response.data.location.name);
        settemp(response.data.current.temp_c);
        setdesc(response.data.current.condition.text);
        seticon(response.data.current.condition.icon);
        setwind(response.data.current.wind_mph);
        sethum(response.data.current.humidity);
        setbol(true);
      })
      .catch((error) => {
        console.log(error);
        seterror(error.response.data.error.message);

        setbol(true);
        setbol2(false);
      });
  }, [props.name]);
  return (
    <>
      {bol ? (
        bol2 ? (
          <div className="main-weather">
            <div className="location">{locationName}</div>

            <img src={icon} alt="" />
            <div className="temprature">
              <FontAwesomeIcon icon={faTemperatureQuarter} /> {"  "}
              {temp}
            </div>
            <div className="des">{desc}</div>
            <div className="moredetails">
              <div className="wind">
                <FontAwesomeIcon icon={faWind} />
                {wind} Kmph
              </div>
              <div className="humidity">
                <FontAwesomeIcon icon={faDroplet} />
                {hum}
              </div>
            </div>
          </div>
        ) : (
          <h1>{error}</h1>
        )
      ) : (
        <div className="main-weather">
          <img className="img1" src={Gif} alt="" />
          <h2>Loading..</h2>
        </div>
      )}
    </>
  );
};

export default Cards;
