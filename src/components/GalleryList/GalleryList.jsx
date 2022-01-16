import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({galleryList}){

    return(
        <>
            <h1>GalleryList</h1>

            <ul>
            {galleryList.map(gallery => (
                    <GalleryItem
                        key={gallery.id} 
                        gallery={gallery}
                        // onUpdate={onUpdate}   
                    />
                ))}

            </ul>
        
        
        
        
        
        </>
    )
}







export default GalleryList;