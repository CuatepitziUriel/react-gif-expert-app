import axios from "axios";

const baseURL = "https://api.giphy.com/v1/gifs/search";
const apiKey = "VSYOIp0mw5NZi5SorEmM7Hei6i7gECk2"

export const getGifs = async (category) => {
    const {data:array} = await axios.get(`${baseURL}`,
        {
            params: {
                api_key: apiKey,
                q: category,
                limit: 12,
            }
        });
    const gifs = array.data.map(gif => (
        {
            id:gif.id,
            title:gif.title,
            url:gif.images.downsized_medium.url
        }
    ));
    console.log(gifs)
    return gifs;
}