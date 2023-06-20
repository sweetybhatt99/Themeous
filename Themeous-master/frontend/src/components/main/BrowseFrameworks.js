import React from "react";
import { Link } from "react-router-dom";
import app_config from "../../config";

const BrowseFrameworks = () => {

  const {options} = app_config;

  const displayFrameworks = () => {
    return Object.keys(options).map((key, index) => {
      return (
        <div className="col-md-3" key={key}>
          <Link to={`/user/${options[key].link}`}>
          <div className="card my-3">
            <div className="card-body">
              <img
                className="img-fluid"
                src={`/icons/${options[key].icon}`}
                alt=""
              />
            </div>
            <div className="card-footer">
              <h3 className="m-0 text-center">{key}</h3>
            </div>
          </div>
          </Link>
        </div>
      )
    })
  }

  return (
    <div style={{backgroundSize: 'cover' , backgroundImage: "url('https://t4.ftcdn.net/jpg/03/57/16/57/360_F_357165707_26OZ4FfKDoOWmlghEiUoY9WRe64Ffe9X.jpg')"}}>
      <header>
        <div className="col-md-10 mx-auto"></div>
      </header>
      <section>
        <div className="container">
          <div className="row mb-5">
            {displayFrameworks()}
            <div className="col-md-3">
          <a href="http://localhost:3001">
          <div className="card my-3">
            <div className="card-body">
              <img
                className="img-fluid"
                src="/icons/tailwind_icon.png"
                alt=""
              />
            </div>
            <div className="card-footer">
              <h3 className="m-0 text-center">TailWind CSS</h3>
            </div>
          </div>
          </a>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseFrameworks;
