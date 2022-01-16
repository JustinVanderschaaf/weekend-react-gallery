function GalleryItem({ gallery }) {

    console.log('GalleryItem, gallery', gallery);

    return (
        <li>
            <label>
            <img src={gallery.path}/>
            <br></br>
                {gallery.description}
                <br></br>
                Likes: {gallery.likes}
            </label>
          
        </li>
    )
}

export default GalleryItem;