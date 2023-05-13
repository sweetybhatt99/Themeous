import React, { useState } from 'react'
import app_config, { structureData } from '../../config'

const CodeGenerator = () => {

    const url = app_config.apiUrl;
    const [fileUrl, setFileUrl] = useState('');
    const selOptions = JSON.parse(sessionStorage.getItem('selOptions'));
    console.log(structureData[selOptions]);

    const generateBoilerplate = async () => {
        const res = await fetch(url + '/util/generateCode');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setFileUrl(url+'/'+data.filename);
    }

    const generateCodeFromData = async () => {
      const res = await fetch(url + '/util/generateCodeFromData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...structureData[selOptions], name : 'test'})

      });
      console.log(res.status);
      const data = await res.json();
      console.log(data);
      setFileUrl(url+'/'+data.filename);

    }

  return (
    <div>
      <h1>CodeGenerator</h1>
      <hr />
      <button onClick={generateBoilerplate}>Generate Boilerplate</button>
      <br />
      <button className='btn btn-primary mt-5' onClick={generateCodeFromData}>Generate Boilerplate</button>
      
      <a href={fileUrl}>Download File</a>
    </div>
  )
}

export default CodeGenerator