import axios from 'axios';

// axios.defaults.baseURL = 'https://youtube138.p.rapidapi.com';

// const options = {
//     params: { hl: 'tr', gl: 'TR' },
//     headers: {
//       'X-RapidAPI-Key':,
//       'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
//     },
// };


// export const getData = async (url) => {
    
//   try {
//     const res = await axios.get(url, options);
//     console.log(res.data)
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// };


const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7Qqb4IyULmo',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50',
    hl: 'tr', 
    gl: 'TR' 
  },
  headers: {
    
    'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getData = async () => {

  try {

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error(error);
  }

}