import "./App.css";
import Cards from "./componenets/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
function App() {
  const [numberr, setnumber] = useState([
    "Kangra",
    "Nurpur,himachal",
    "Chamba,himachal",
  ]);

  const inputRef = useRef();
  const changeHandler = (e) => {
    const newValue = inputRef.current.value;
    console.log(newValue);

    setnumber([newValue]);
  };

  return (
    <div className="main">
      <div className="navbar">
        <h2>Eagle-Weather</h2>
        <div className="input-field">
          <input type="text" ref={inputRef} placeholder="Enter Location" />
          <FontAwesomeIcon
            onClick={changeHandler}
            className="icon"
            icon={faSearch}
          />
        </div>

        
      </div>
      <div className="main-data">
        {numberr.map((i) => {
          return <Cards name={i} key={i} />;
        })}
      </div>
      ;
    </div>
  );
}

export default App;
