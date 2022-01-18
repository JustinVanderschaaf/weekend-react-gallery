import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList.jsx";
import GalleryForm from "../GalleryForm/GalleryForm.jsx";
import Swal from "sweetalert2";

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
    console.log("likeUp", galleryId.id);

    axios({
      method: "PUT",
      url: `/gallery/like/${galleryId.id}`,
      data: galleryId,
    })
      .then((result) => {
        fetchGalleryList();
      })
      .catch((err) => {
        console.error("PUT failed", err);
      });
  };

  const createGalleryItem = (galleryItem) => {
    console.log("in createGalleryItem", galleryItem);
    axios
      .post("/gallery", galleryItem)
      .then(() => {
        fetchGalleryList();
      })
      .catch((err) => {
        console.error("POST failed", err);
      });
  };

  const showAlert = (msg) => {
    Swal.fire(msg);
  };

  const onDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete this item?",
      showDenyButton: true,
      confirmButtonText: "DELETE",
      denyButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!");

        axios({
          method: "DELETE",
          url: `/gallery/${id}`,
        })
          .then((response) => {
            fetchGalleryList();
          })
          .catch((err) => {
            showAlert("error getting Item");
            console.log(err);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved");
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm onCreate={createGalleryItem} />
      <GalleryList
        galleryList={galleryList}
        likeUp={likeUp}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
