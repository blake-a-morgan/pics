import axios from 'axios';

const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID I9aD9GtbS98yD9UI77S6uO0H-qv1gjkQSRGp40ye1bI'

        },
        params: {
            query: term,
        }
    });
    
    return response.data.results;
};
export default searchImages;