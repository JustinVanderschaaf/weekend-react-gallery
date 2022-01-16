import { useEffect, useState } from "react";

function GalleryItem({ gallery }) {
  let [togglePic, setTogglePic] = useState(
    <img src={gallery.path} onClick={() => imageClick()} />
  );
  console.log("GalleryItem, gallery", gallery);

  const imageClick = () => {
    setTogglePic(
      <div className="picDes" onClick={() => picUp()}>
        {gallery.description}
      </div>
    );
    console.log("click", gallery.id, togglePic);
  };
  const picUp = () => {
    setTogglePic(<img src={gallery.path} onClick={() => imageClick()} />);
  };

  return (
    <li>
      <label>
        <br></br>
        {togglePic}
        <br></br>
        Likes: {gallery.likes}
      </label>
    </li>
  );
}

export default GalleryItem;
