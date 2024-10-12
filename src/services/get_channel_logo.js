import axios from 'axios';




export const getChannelLogo = async (channel_id) => {

  try {

    const options = {
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channel_id}&key=${import.meta.env.VITE_API_KEY}`,
    };

    const response = await axios.request(options);
    
    return response.data.items[0].snippet.thumbnails.default.url;

  } catch (error) {
    console.error(error);
  }

}