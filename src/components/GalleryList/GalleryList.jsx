import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({ galleryList, likeUp}) {
  return (
      <ul>
        {galleryList.map((gallery) => (
          <GalleryItem
            key={gallery.id}
            gallery={gallery}
            likeUp={likeUp}

          />
        ))}
      </ul>
  );
}

export default GalleryList;
