import React, { useState } from "react";
import { Button, Menu, theme } from "antd";
import { Add, Mail, Navigation } from "@mui/icons-material";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import app_config from "../../config";

const items= [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

const AntDCustomizer = ({ mainTheme, setMainTheme }) => {
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

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

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

  const updateColorPalette = (key, value) => {
    let temp = mainTheme.token;
    temp = {...temp, [key]: value};
    // setPalette(temp);

    setMainTheme({
      ...mainTheme,
      token: temp,
    });
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
    if (selAccent === "primary") return primary;
    else if (selAccent === "secondary") return secondary;
    else if (selAccent === "error") return error;
    else if (selAccent === "warning") return warning;
    else if (selAccent === "info") return info;
    else if (selAccent === "success") return success;
  };

  const getThemeSetObj = () => {
    if (selAccent === "primary") return setPrimary;
    else if (selAccent === "secondary") return setSecondary;
    else if (selAccent === "error") return setError;
    else if (selAccent === "warning") return setWarning;
    else if (selAccent === "info") return setInfo;
    else if (selAccent === "success") return setSuccess;
  };

  function copyToClipboard(text) {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
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
                  Export AntDesign Theme
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control w-100"
                  rows={10}
                  value={JSON.stringify(mainTheme)}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => copyToClipboard(JSON.stringify(mainTheme))}
                >
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
          {options.antDesign.accent.map((accent, index) => (
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
                updateColorPalette(
                  'color'+selAccent.charAt(0).toUpperCase() + selAccent.slice(1),
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-8">
            <Button type="primary" warning>Primary Button</Button>
            <Button type="default">Primary Button</Button>
            <Button type="dashed">Primary Button</Button>
            <Button disabled>Primary Button</Button>
            <Button type="text">Primary Button</Button>
            <Button type="link">Primary Button</Button>
              <br />
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

          </div>
        </div>
      </div>
    </div>
  );
};

export default AntDCustomizer;
