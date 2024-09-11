import axios from 'axios';


axios.defaults.baseURL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: { hl: 'tr', gl: 'TR' },
    headers: {
      'X-RapidAPI-Key':`${import.meta.env.VITE_RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
};


export const getData = async (url) => {
    
  try {
    const res = await axios.get(url, options);
    console.log(res.data)
    return res.data;
  } catch (err) {
    console.log(err);
  }
};