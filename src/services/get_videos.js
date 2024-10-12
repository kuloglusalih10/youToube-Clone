import axios from 'axios';


const options = {
  method: 'GET',
  url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${import.meta.env.VITE_API_KEY}&maxResults=25`,
};

export const getData = async () => {

  try {

    const response = await axios.request(options);
    
    return response.data;

  } catch (error) {
    console.error(error);
  }

}