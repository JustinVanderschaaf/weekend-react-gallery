import { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { lightGreen } from "@mui/material/colors";
import { red } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[700],
  "&:hover": {
    backgroundColor: lightGreen[700],
  },
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
  "&:hover": {
    backgroundColor: red[900],
  },
}));

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

      <Stack spacing={4} direction="row">
        <ColorButton
          variant="contained"
          className="likeBtn"
          onClick={() => likeUp(gallery)}
        >
          LIKE!!
        </ColorButton>
        <DeleteButton
          variant="contained"
          className="deleteBtn"
          onClick={() => onDelete(gallery.id)}
        >
          DELETE
        </DeleteButton>
      </Stack>
      <div className="liCont">{gallery.likes} People have Liked this</div>
    </>
  );
}

export default GalleryItem;
