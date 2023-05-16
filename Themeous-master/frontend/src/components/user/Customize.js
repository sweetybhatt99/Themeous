import React, { useState } from "react";
import bootstrapVars from "./bootstrapVars";
import "./bootstrap.css";
import app_config from "../../config";

const Customize = () => {
  const classToColor = {
    primary: "blue",
    secondary: "gray",
    success: "green",
    danger: "red",
  };

  const [colorVals, setColorVals] = useState({
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
  });

  const [selAccent, setSelAccent] = useState("primary");
  const [borderRadius, setBorderRadius] = useState(0.375);
  const [fontFamily, setFontFamily] = useState("");

  const [breakPoints, setBreakPoints] = useState({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  });

  const { options, fontFamilOptions } = app_config;

  const [selTheme, setSelTheme] = useState(bootstrapVars);
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    "--bs-primary"
  );

  const setColor = (classname, value) => {
    let temp = colorVals;
    temp[classname] = value;
    setColorVals(temp);
    console.log(classname);
    document.documentElement.style.setProperty(
      `--bs-${classname}`,
      value
    );
    // console.log(
      //   getComputedStyle(document.documentElement).getPropertyValue("--bs-blue")
      // );
    };
    
    const updateBorderRadius = (value) => {
    document.documentElement.style.setProperty(
      `--bs-border-radius`,
      value+'px'
    );
    document.documentElement.style.setProperty(
      `--bs-border-radius-sm`,
      value+'px'
    );
    document.documentElement.style.setProperty(
      `--bs-border-radius-lg`,
      value+'px'
    );
    document.documentElement.style.setProperty(
      `--bs-border-radius-xl`,
      value+'px'
    );
    document.documentElement.style.setProperty(
      `--bs-border-radius-2xl`,
      value+'px'
    );

    }


    const updateFamily = (value) => {
    document.documentElement.style.setProperty(
      `--bs-font-sans-serif`,
      value
    );
  }

  const showAccent = () => {
    return options.bootstrap.accent.map((accent, index) => (
      <button
        key={index}
        className={`btn btn-${accent}`}
        onClick={() => setSelAccent(accent)}
      >
        {accent}
      </button>
    ));
  };

  function generateAndDownloadCSS(cssText, filename) {
    const blob = new Blob([cssText], { type: "text/css" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

  const displayOptions = () => { };

  return (
    <div>
      <div className="container">
        <header className="py-3">
          <div className="row">
            <div className="col-md-2">
              <button
                className="btn btn-secondary"
                onClick={(e) =>
                  generateAndDownloadCSS(
                    options.bootstrap.defaultCSS(colorVals),
                    "custom_bs_theme.css"
                  )
                }
                title="Download Custom Bootstrap Theme File"
              >
                <i class="fas fa-download"></i> Download File
              </button>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-secondary"
                onClick={(e) =>
                  generateAndDownloadCSS(
                    options.bootstrap.defaultCSS(colorVals),
                    "custom_bs_theme.css"
                  )
                }
                title="Download Custom Bootstrap Theme File"
              >
                <i class="fas fa-download"></i> Minified File
              </button>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-secondary"
                onClick={(e) =>
                  generateAndDownloadCSS(
                    options.bootstrap.defaultCSS(colorVals),
                    "custom_bs_theme.css"
                  )
                }
                title="Download Custom Bootstrap Theme File"
              >
                <i class="fas fa-copy    "></i> Color Variables
              </button>
            </div>
          </div>
        </header>
      </div>
      <section className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 my-2">
                <h4>Custom Accent Color</h4>
                <select
                  className="form-control"
                  value={selAccent}
                  onChange={(e) => setSelAccent(e.target.value)}
                >
                  {options.bootstrap.accent.map((accent, index) => (
                    <option key={index} value={accent}>
                      {accent}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3 my-2">
                <h4>Custom Font Family</h4>
                <select
                  className="form-control"

                  onChange={(e) => {
                    updateFamily(e.target.value);
                    setFontFamily(e.target.value)}}
                >
                  {fontFamilOptions.map((font, index) => (
                    <option key={index} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3 my-2">
                <h4>Custom Border Radius</h4>
                {/* custom radius range goes here */}

                <div class="range">
                  <input
                    type="range"
                    class="form-range"
                    value={borderRadius}
                    min={0}
                    max={50}
                    onChange={(e) => {
                      updateBorderRadius(parseInt(e.target.value));
                      setBorderRadius(parseInt(e.target.value))}}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <h4>Break Points</h4>
              <div className="row">
                {
                  Object.keys(breakPoints).map((breakPoint, index) => (
                    <div className="col">
                      <label className="h5">{breakPoint}</label>
                      <input
                        type="number"
                        className="form-control"
                        value={breakPoints[breakPoint]}
                      // onChange={(e) => setBreakPoints(breakPoint, e.target.value)}
                      />
                    </div>

                  ))
                }
              </div>
            </div>
            <hr />
          </div>
        </div>
        <hr />
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <label className="h5">{selAccent} Color</label>
                <input
                  type="color"
                  className="form-control"
                  value={"#0d6efd"}
                  onChange={(e) => setColor(selAccent, e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <button className={`btn btn-${selAccent}`}>Normal Button</button>
            <button className={`btn btn-outline-${selAccent}`}>
              Outline Button
            </button>
            <div className={`card bg-${selAccent} mt-3`}>
              <div className="card-body">
                <h1>Card with {selAccent} Background</h1>
              </div>
            </div>
            <h1 className={`mt-3 text-${selAccent}`}>Some {selAccent} Text</h1>
            <label for="customRange1" className="form-label mt-3">
              Example range
            </label>
            <input
              type="range"
              className="form-range"
              id="customRange1"
            ></input>
            <div className={`alert alert-${selAccent} mt-3`} role="alert">
              A simple primary alert—check it out!
            </div>

            <>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "25%" }} />
              </div>

              <h1>
                Example heading{" "}
                <span className={`badge bg-${selAccent}`}>New</span>
              </h1>
            </>
          </div>
        </div>
        <hr />
        {/* <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <label className="h5">Secondary Color</label>
                <input
                  type="color"
                  className="form-control"
                  value={"#6c757d"}
                  onChange={(e) => setColor("secondary", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <button className="btn btn-secondary">Normal Button</button>
            <button className="btn btn-outline-secondary">
              Outline Button
            </button>
            <div className="card bg-secondary mt-3">
              <div className="card-body">
                <h1>Card with secondary Background</h1>
              </div>
            </div>
            <h1 className="mt-3 text-secondary">Some secondary Text</h1>
            <label for="customRange1" class="form-label mt-3">
              Example range
            </label>
            <input type="range" class="form-range" id="customRange1"></input>
            <div class="alert alert-secondary mt-3" role="alert">
              A simple secondary alert—check it out!
            </div>

            <>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "0%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "25%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "50%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "75%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "100%" }}
                />
              </div>
              <h1>
                Example heading <span class="badge bg-secondary">New</span>
              </h1>
              <h2>
                Example heading <span class="badge bg-secondary">New</span>
              </h2>
              <h3>
                Example heading <span class="badge bg-secondary">New</span>
              </h3>
              <h4>
                Example heading <span class="badge bg-secondary">New</span>
              </h4>
              <h5>
                Example heading <span class="badge bg-secondary">New</span>
              </h5>
              <h6>
                Example heading <span class="badge bg-secondary">New</span>
              </h6>
            </>
          </div>
        </div>
        <hr />
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <label className="h5">Success Color</label>
                <input
                  type="color"
                  className="form-control"
                  value={"#198754"}
                  onChange={(e) => setColor("success", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <button className="btn btn-success">Normal Button</button>
            <button className="btn btn-outline-success">Outline Button</button>
            <div className="card bg-success mt-3">
              <div className="card-body">
                <h1>Card with success Background</h1>
              </div>
            </div>
            <h1 className="mt-3 text-success">Some success Text</h1>
            <label for="customRange1" class="form-label mt-3">
              Example range
            </label>
            <input type="range" class="form-range" id="customRange1"></input>
            <div class="alert alert-success mt-3" role="alert">
              A simple success alert—check it out!
            </div>

            <>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "0%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "25%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "50%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "75%" }}
                />
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "100%" }}
                />
              </div>
              <h1>
                Example heading <span class="badge bg-success">New</span>
              </h1>
              <h2>
                Example heading <span class="badge bg-success">New</span>
              </h2>
              <h3>
                Example heading <span class="badge bg-success">New</span>
              </h3>
              <h4>
                Example heading <span class="badge bg-success">New</span>
              </h4>
              <h5>
                Example heading <span class="badge bg-success">New</span>
              </h5>
              <h6>
                Example heading <span class="badge bg-success">New</span>
              </h6>
            </>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Customize;
