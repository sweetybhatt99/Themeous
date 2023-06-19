import logo from './logo.svg';
import './App.css';
import Preview from './components/Preview';
import { useEffect, useState } from 'react';
import app_config from './config';

function App() {

  const [selAccent, setSelAccent] = useState('indigo');

  const accentOptions = [
    'indigo',
    'red',
  ];

  const updateColor = (color) => {
    document.documentElement.style.setProperty(`--accent-${selAccent}`, color);
  }

  const downloadConfig = () => {
    const configCode = app_config.generateConfig();
    const element = document.createElement("a");
    const file = new Blob([configCode], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "tailwind.config.js";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();

  }

  useEffect(() => {
    // initVars();
  }, [])
  

  return (
    <div>
      <header>
        <div className="container">
          <h1 className="text-5xl">Customizer</h1>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className='p-8'>
              <h3>Choose Theme Color</h3>
              <select onChange={e => setSelAccent(e.target.value)}>
                {
                  accentOptions.map((accent) => (
                    <option value={accent}>{accent}</option>
                  ))
                }
              </select>

              <h3>Sel Color</h3>
              <input type='color' onChange={e => updateColor(e.target.value)} />

              <button onClick={downloadConfig}>Download Config</button>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <h1 className="text-5xl">Preview</h1>
        <Preview />
      </div>
    </div>
  );
}

export default App;
