import { createContext } from "react";
import { useState,useEffect } from "react";
import { getData } from "../services/get_videos";
import { getChannelLogo } from "../services/get_channel_logo";


export const Context = createContext();

const ContextProvider = ({children}) => {

  const [sidebar, setSidebar] = useState(true);

  const [videos, setVideos] = useState(null);

   useEffect(() => {

    setVideos(null);

    // getData().then(
    //   (response) => {
    //     const filteredResults = response.items.filter(item => item.snippet.thumbnails.maxres  != undefined);

    //     filteredResults.map((item, i)=> {
    //         getChannelLogo(item.snippet.channelId).then((res)=> {
    //           filteredResults[i].channelLogo = res
    //         });
    //     })

    //     console.log('filtered results : ', filteredResults);
    //     setVideos(filteredResults)
    // }
    // );

    getData().then(async (response) => {
      const filteredResults = response.items.filter(item => item.snippet.thumbnails.maxres !== undefined);
    
      // Tüm logoların yüklenmesini Promise.all ile bekleyelim
      const resultsWithLogo = await Promise.all(filteredResults.map(async (item) => {
        const logo = await getChannelLogo(item.snippet.channelId);
        return { ...item, channelLogo: logo };
      }));
    
      console.log('results with logo: ', resultsWithLogo);
      setVideos(resultsWithLogo); // Veriyi state'e logosuyla birlikte set et
    });
      
   }, []);

  return (
    <Context.Provider value={{sidebar,setSidebar, videos}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider