import { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <h2 className="addH2">Add to Gallery</h2>
      <input
        placeholder="URL"
        type="text"
        value={path}
        onChange={(evt) => setPath(evt.target.value)}
      />
      <br></br>
      <input
        placeholder="Description"
        type="text"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
      />
      <br></br>
      <button className="submitBtn">Create!</button>
    </form>
  );
}

export default GalleryForm;
