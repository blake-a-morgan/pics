import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import ImageList from "./Components/ImageList";
import { useState } from "react";

function App(){
    const [images,setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        //console.log('do a search with '+ term);
        setImages(result);
    }
    return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
    </div>
    );
}
export default App;