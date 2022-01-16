import { useEffect, useState } from "react";

function GalleryItem({ gallery, likeUp }) {
  let [togglePic, setTogglePic] = useState(
    <img src={gallery.path} onClick={() => imageClick()} />
  );
  
  const imageClick = () => {
    setTogglePic(<div 
    className="picDes" onClick={() => picUp()}>{gallery.description}
</div>
    );
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
        <button onClick={() => likeUp(gallery.id)}className="likeBtn">LIKE!!</button > {gallery.likes} 
      </label>    
    </li>
  );
}

export default GalleryItem;
