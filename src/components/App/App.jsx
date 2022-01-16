import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {


  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGalleryList();
  }, []);
  
    const fetchGalleryList = () => {
      axios.get('/gallery')
        .then(res => {
          setGalleryList(res.data);
        })
        .catch(err => {
          console.error('GET /gallery failed', err);
        });
    }


    console.log(galleryList);

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList={galleryList}/> 

      </div>
    );
}

export default App;
