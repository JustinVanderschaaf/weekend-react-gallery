import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({ galleryList, likeUp, onDelete }) {
  return (
      <ul>
        {galleryList.map((gallery) => (
          <GalleryItem
            key={gallery.id}
            gallery={gallery}
            likeUp={likeUp}
            onDelete={onDelete}

          />
        ))}
      </ul>
  );
}

export default GalleryList;
