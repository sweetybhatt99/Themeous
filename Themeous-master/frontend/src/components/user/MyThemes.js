import React, { useEffect, useState } from 'react'
import app_config from '../../config';

const MyThemes = () => {
    const { apiUrl } = app_config;
    const [extList, setExtList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  
    const fetchUserExtensions = () => {
      setLoading(true);
      fetch(`${apiUrl}/theme/getbyuser/${currentUser._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setExtList(data.result);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
    }
  
    useEffect(() => {
      fetchUserExtensions();
    }, [])
  
    const displayExtensions = () => {
      if(!extList.length) return (<h1 className='text-center display-4'>No Extensions Found</h1>);
      return extList.map((ext, index) => (
        <div key={index} className='card'>
            <div className="card-body">
              <h5 className="card-title">{ext.name}</h5>
            </div>
          </div>
      ))
    }
  
    return (
      <div>
        <h1 className='text-center display-4'>My Extensions</h1>
        <hr />
  
        {
          displayExtensions()
        }
      </div>
    )
  }

export default MyThemes