import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { lightGreen } from "@mui/material/colors";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const SubButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lightGreen[500]),
  backgroundColor: lightGreen[400],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

function GalleryForm({ onCreate }) {
  const [description, setDescription] = useState("");
  const [path, setPath] = useState("");
  const onSubmit = (evt) => {
    evt.preventDefault();

    onCreate({
      description: description,
      path: path,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2 className="addH2">Add to Gallery</h2>
        <CssTextField
          label="URL"
          id="urlInput"
          className="custom-css-outlined-input"
          placeholder="URL"
          type="text"
          value={path}
          onChange={(evt) => setPath(evt.target.value)}
        />
        <br></br>
        <CssTextField
          label="Description"
          id="descInput"
          className="custom-css-outlined-input"
          placeholder="Description"
          type="text"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <br></br>

        <button className="submitBtn">Create!</button>
      </form>
    </>
  );
}

export default GalleryForm;
