import { useEffect, useState } from "react";

function GalleryItem({ gallery, likeUp, onDelete }) {
  let [togglePic, setTogglePic] = useState(
    <img src={gallery.path} onClick={() => imageClick()} />
  );

  const imageClick = () => {
    setTogglePic(
      <div className="picDes" onClick={() => picUp()}>
        {gallery.description}
      </div>
    );
  };
  const picUp = () => {
    setTogglePic(<img src={gallery.path} onClick={() => imageClick()} />);
  };

  return (
    <>
      <li className="liCont">
        <label>
          <br></br>
          {togglePic}
          <br></br>
        </label>
      </li>
      <button className="likeBtn" onClick={() => likeUp(gallery)}>
        LIKE!!
      </button>
      <button className="deleteBtn" onClick={() => onDelete(gallery.id)}>
        DELETE
      </button>
      <div className="liCont">{gallery.likes} People have Liked this</div>
    </>
  );
}

export default GalleryItem;
