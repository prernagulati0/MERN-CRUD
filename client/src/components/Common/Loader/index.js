import React from "react";
import loader from "../../../Assets/loader.gif";
import "./style.scss";

function Loader() {
  return (
    <div className={`loader_wrapper`} id="loader">
      <div className="loader">
        <img className="loader-logo" src={loader} alt="loading..." border="0" />
        <div>
          <div className="loader-animation" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
