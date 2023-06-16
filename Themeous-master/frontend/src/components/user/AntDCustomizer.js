import React, { useState } from 'react';
import { Button, Menu, Pagination, Space, Steps, Table, Tag, Tooltip, theme } from 'antd';
import { Add, Mail, Navigation } from '@mui/icons-material';
import { AppstoreOutlined, LoadingOutlined, MailOutlined, PoweroffOutlined, SearchOutlined, SettingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import app_config from '../../config';

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true
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
            key: 'setting:1'
          },
          {
            label: 'Option 2',
            key: 'setting:2'
          }
        ]
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3'
          },
          {
            label: 'Option 4',
            key: 'setting:4'
          }
        ]
      }
    ]
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay'
  }
];

const data= [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const AntDCustomizer = ({ mainTheme, setMainTheme }) => {
  const [mode, setMode] = useState('light');

  const { options } = app_config;

  const [selAccent, setSelAccent] = useState('primary');
  const [borderRadius, setBorderRadius] = useState(0);
  const [fontFamily, setFontFamily] = useState('');
  const [breakPoints, setBreakPoints] = useState({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  });

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const [primary, setPrimary] = useState({
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff'
  });

  const [secondary, setSecondary] = useState({
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#fff'
  });

  const [error, setError] = useState({
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#fff'
  });

  const [warning, setWarning] = useState({
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#fff'
  });

  const [info, setInfo] = useState({
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#fff'
  });

  const [success, setSuccess] = useState({
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#fff'
  });

  const [grey, setGrey] = useState({
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',

    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  });

  const [text, setText] = useState({
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)'
  });

  const [background, setBackground] = useState({
    paper: '#fff',
    default: '#fff'
  });

  const updateColorPalette = (key, value) => {
    let temp = mainTheme.token;
    temp = { ...temp, [key]: value };
    // setPalette(temp);

    setMainTheme({
      ...mainTheme,
      token: temp
    });
  };

  const showAccent = () => {
    return options.materialUI.accent.map((accent, index) => (
      <button key={index} className={`btn btn-${accent}`} onClick={() => setSelAccent(accent)}>
        {accent}
      </button>
    ));
  };

  const getThemeObj = () => {
    if (selAccent === 'primary') return primary;
    else if (selAccent === 'secondary') return secondary;
    else if (selAccent === 'error') return error;
    else if (selAccent === 'warning') return warning;
    else if (selAccent === 'info') return info;
    else if (selAccent === 'success') return success;
  };

  const getThemeSetObj = () => {
    if (selAccent === 'primary') return setPrimary;
    else if (selAccent === 'secondary') return setSecondary;
    else if (selAccent === 'error') return setError;
    else if (selAccent === 'warning') return setWarning;
    else if (selAccent === 'info') return setInfo;
    else if (selAccent === 'success') return setSuccess;
  };

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
        <button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
          Export Ant Design Theme
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Export AntDesign Theme
                </h5>
                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <textarea className="form-control w-100" rows={10} value={JSON.stringify(mainTheme)}></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={(e) => copyToClipboard(JSON.stringify(mainTheme))}>
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
        <select className="form-control my-3" value={selAccent} onChange={(e) => setSelAccent(e.target.value)}>
          {options.antDesign.accent.map((accent, index) => (
            <option key={index} value={accent}>
              {accent}
            </option>
          ))}
        </select>

        <div className="row mb-5">
          <div className="col-md-4">
            <label className="h5">{selAccent} Color</label>
            <input type="color" className="form-control" onChange={(e) => updateColorPalette('color' + selAccent.charAt(0).toUpperCase() + selAccent.slice(1), e.target.value)} />
          </div>
          <div className="col-md-8">
            <Button type="primary" warning>
              Primary Button
            </Button>
            <Button type="default">Primary Button</Button>
            <Button type="dashed">Primary Button</Button>
            <Button disabled>Primary Button</Button>
            <Button type="text">Primary Button</Button>
            <Button type="link">Primary Button</Button>
            <br />
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
            <div className="row">
              <div className="col-md-4">
                <Menu onClick={onClick} style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items} />
              </div>
              <div className="col-md-8">
                <Space direction="vertical">
                  <Space wrap>
                    <Tooltip title="search">
                      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">
                      A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                      Search
                    </Button>
                    <Tooltip title="search">
                      <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                  </Space>
                  <Space wrap>
                    <Tooltip title="search">
                      <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>
                      Search
                    </Button>
                    <Button icon={<SearchOutlined />} href="https://www.google.com" />
                  </Space>
                </Space>
                <Space direction="vertical">
                  <Space wrap>
                    <Button type="primary" loading>
                      Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                      Loading
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                  </Space>

                  <Space wrap>
                    <Button type="primary" loading={false}>
                      Click me!
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading={false}>
                      Click me!
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading={false} />
                  </Space>
                </Space>
              </div>
            </div>
            <Space wrap>
              <Button type="primary" danger>
                Primary
              </Button>
              <Button danger>Default</Button>
              <Button type="dashed" danger>
                Dashed
              </Button>
              <Button type="text" danger>
                Text
              </Button>
              <Button type="link" danger>
                Link
              </Button>
            </Space>
            <h1></h1>
            <Pagination showQuickJumper defaultCurrent={2} total={500} />
            <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} disabled />
            <Steps
              items={[
                {
                  title: 'Login',
                  status: 'finish',
                  icon: <UserOutlined />
                },
                {
                  title: 'Verification',
                  status: 'finish',
                  icon: <SolutionOutlined />
                },
                {
                  title: 'Pay',
                  status: 'process',
                  icon: <LoadingOutlined />
                },
                {
                  title: 'Done',
                  status: 'wait',
                  icon: <SmileOutlined />
                }
              ]}
            />

<Steps
        type="navigation"
        size="small"
        current={current}
        className="site-navigation-steps"
        items={[
          {
            title: 'Step 1',
            subTitle: '00:00:05',
            status: 'finish',
            description: 'This is a description.',
          },
          {
            title: 'Step 2',
            subTitle: '00:01:02',
            status: 'process',
            description: 'This is a description.',
          },
          {
            title: 'Step 3',
            subTitle: 'waiting for longlong time',
            status: 'wait',
            description: 'This is a description.',
          },
        ]}
      />
      <Steps
        type="navigation"
        current={current}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'Step 1',
          },
          {
            status: 'process',
            title: 'Step 2',
          },
          {
            status: 'wait',
            title: 'Step 3',
          },
          {
            status: 'wait',
            title: 'Step 4',
          },
        ]}
      />
      <Steps
        type="navigation"
        size="small"
        current={current}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'finish 1',
          },
          {
            status: 'finish',
            title: 'finish 2',
          },
          {
            status: 'process',
            title: 'current process',
          },
          {
            status: 'wait',
            title: 'wait',
            disabled: true,
          },
        ]}
      />

<Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntDCustomizer;
