import React, { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  CircularProgress,
  Fab,
  Pagination,
  Slider,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { Add, Mail, Navigation } from "@mui/icons-material";
import app_config from "../../config";

const MUICustomizer = ({ mainTheme, setMainTheme }) => {
  const [mode, setMode] = useState("light");

  const { options } = app_config;

  const [selAccent, setSelAccent] = useState("primary");
  const [borderRadius, setBorderRadius] = useState(0);
  const [fontFamily, setFontFamily] = useState("");
  const [breakPoints, setBreakPoints] = useState({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  });

  const [primary, setPrimary] = useState({
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff",
  });

  const [secondary, setSecondary] = useState({
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
    contrastText: "#fff",
  });

  const [error, setError] = useState({
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff",
  });

  const [warning, setWarning] = useState({
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff",
  });

  const [info, setInfo] = useState({
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#fff",
  });

  const [success, setSuccess] = useState({
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff",
  });

  const [grey, setGrey] = useState({
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",

    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  });

  const [text, setText] = useState({
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
    divider: "rgba(0, 0, 0, 0.12)",
  });

  const [background, setBackground] = useState({
    paper: "#fff",
    default: "#fff",
  });

  const updateColorPalette = (palette, setPalette, colorName, value) => {
    let temp = palette;
    temp[colorName] = value;
    setPalette(temp);

    setMainTheme({
      // ...mainTheme,
      palette: {
        primary,
        secondary,
        error,
        warning,
        info,
        success,
      },
    });
    // console.log(mainTheme);
  };

  const showAccent = () => {
    return options.materialUI.accent.map((accent, index) => (
      <button
        key={index}
        className={`btn btn-${accent}`}
        onClick={() => setSelAccent(accent)}
      >
        {accent}
      </button>
    ));
  };

  const getThemeObj = () => {
    if(selAccent === 'primary') return primary;
    else if(selAccent === 'secondary') return secondary;
    else if(selAccent === 'error') return error;
    else if(selAccent === 'warning') return warning;
    else if(selAccent === 'info') return info;
    else if(selAccent === 'success') return success;
  }

  const getThemeSetObj = () => {
    if(selAccent === 'primary') return setPrimary;
    else if(selAccent === 'secondary') return setSecondary;
    else if(selAccent === 'error') return setError;
    else if(selAccent === 'warning') return setWarning;
    else if(selAccent === 'info') return setInfo;
    else if(selAccent === 'success') return setSuccess;
  }

  function copyToClipboard(text) {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

  return (
    <div>
      <div className="container">
  {/* Button trigger modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-mdb-toggle="modal"
    data-mdb-target="#exampleModal"
  >
    Export MUI Theme
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Export MUI Theme
          </h5>
          <button
            type="button"
            className="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <textarea className="form-control w-100" rows={10} value={JSON.stringify(mainTheme)}></textarea>
          
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-mdb-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={e => copyToClipboard(JSON.stringify(mainTheme))}>
            Copy Theme
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      <hr />

      <div className="container">
        <h3>Selected Color : {selAccent}</h3>
        <select
          className="form-control my-3"
          value={selAccent}
          onChange={(e) => setSelAccent(e.target.value)}
        >
          {options.materialUI.accent.map((accent, index) => (
            <option key={index} value={accent}>
              {accent}
            </option>
          ))}
        </select>

        <div className="row mb-5">
          <div className="col-md-4">
            <label className="h5">{selAccent} Color</label>
            <input
              type="color"
              className="form-control"
              onChange={(e) =>
                updateColorPalette(getThemeObj(), getThemeSetObj(), "main", e.target.value)
              }
            />
          </div>
          <div className="col-md-8">
            <Button variant="contained" color={selAccent}>
              Primary
            </Button>
            <div className="p-3">
              <TextField
                color={selAccent}
                label="Outlined"
                variant="outlined"
              />
              <TextField color={selAccent} label="Filled" variant="filled" />
              <TextField
                color={selAccent}
                label="Standard"
                variant="standard"
              />
            </div>

            <div className="p-3">
              <ButtonGroup
                color={selAccent}
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </div>

            <div className="p-3">
              <Checkbox defaultChecked color={selAccent} />
              <Checkbox color={selAccent} />
              <Checkbox color={selAccent} disabled />
              <Checkbox color={selAccent} disabled checked />
            </div>
            <div className="row">
              <div className="col-md-3 p-3">
                <Fab size="small" color={selAccent} aria-label="add">
                  <Add />
                </Fab>
                <Fab size="medium" color={selAccent} aria-label="add">
                  <Add />
                </Fab>
                <Fab color={selAccent} aria-label="add">
                  <Add />
                </Fab>
              </div>
              <div className="col-md p-3">
                <Fab
                  variant="extended"
                  size="small"
                  color={selAccent}
                  aria-label="add"
                >
                  <Navigation sx={{ mr: 1 }} />
                  Extended
                </Fab>
                <Fab
                  variant="extended"
                  size="medium"
                  color={selAccent}
                  aria-label="add"
                >
                  <Navigation sx={{ mr: 1 }} />
                  Extended
                </Fab>
                <Fab variant="extended" color={selAccent} aria-label="add">
                  <Navigation sx={{ mr: 1 }} />
                  Extended
                </Fab>
                <Slider aria-label="Volume" color={selAccent} />
                <Switch label="MUI Switch" color={selAccent} defaultChecked />
                <Switch label="MUI Switch" color={selAccent} />
                <Switch
                  label="MUI Switch"
                  color={selAccent}
                  disabled
                  defaultChecked
                />
                <Switch label="MUI Switch" color={selAccent} disabled />

                <Badge badgeContent={4} color={selAccent}>
                  <Mail color="action" />
                </Badge>
                <Stack direction="row" spacing={1}>
                  <Chip label={selAccent} color={selAccent} />
                </Stack>
                <Alert severity={selAccent}>
                  This is an error alert — check it out!
                </Alert>
                <CircularProgress color={selAccent} />
                <Pagination count={10} color={selAccent} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row mb-5">
          <div className="col-md-4">
            <h3>Button</h3>
            <label className="h5">Secondary Color</label>
            <input
              type="color"
              className="form-control"
              onChange={(e) =>
                updateColorPalette(
                  secondary,
                  setSecondary,
                  "main",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-8">
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <div className="p-5">
              <TextField
                color="secondary"
                label="Outlined"
                variant="outlined"
              />
              <TextField color="secondary" label="Filled" variant="filled" />
              <TextField
                color="secondary"
                label="Standard"
                variant="standard"
              />
            </div>

            <div className="p-5">
              <ButtonGroup
                color="secondary"
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </div>

          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MUICustomizer;
