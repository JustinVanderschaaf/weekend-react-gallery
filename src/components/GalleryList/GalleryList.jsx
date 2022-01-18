import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({ galleryList, likeUp, onDelete }) {
  return (
    <>
      {galleryList.map((gallery) => (
        <GalleryItem
          key={gallery.id}
          gallery={gallery}
          likeUp={likeUp}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default GalleryList;
