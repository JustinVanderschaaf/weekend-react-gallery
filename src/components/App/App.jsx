import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList.jsx";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGalleryList();
  }, []);

  const fetchGalleryList = () => {
    axios
      .get("/gallery")
      .then((res) => {
        setGalleryList(res.data);
      })
      .catch((err) => {
        console.error("GET /gallery failed", err);
      });
  };

  const likeUp = (galleryId) => {
    console.log("likeUp", galleryId);

    axios({
      method: "PUT",
      url: `/gallery/like/${galleryId}`,
    })
      .then((result) => {
        
      })
      .catch((err) => {
        console.error("PUT failed", err);
      });

    fetchGalleryList();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList galleryList={galleryList} likeUp={likeUp} />
    </div>
  );
}

export default App;
