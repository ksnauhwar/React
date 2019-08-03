import axios from 'axios';

const KEY = 'AIzaSyAWnkFkxB97meDOpv9OhQvgbqchVX-GLFM';


const youtube = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        key:KEY,
        part:"snippet"
    }
});


export default youtube;


