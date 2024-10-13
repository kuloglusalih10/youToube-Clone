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

    getData().then(async (response) => {
      const filteredResults = response.items.filter(item => item.snippet.thumbnails.maxres !== undefined);
    
      const resultsWithLogo = await Promise.all(filteredResults.map(async (item) => {
        const logo = await getChannelLogo(item.snippet.channelId);
        return { ...item, channelLogo: logo };
      }));
    
      setVideos(resultsWithLogo);
    });
      
   }, []);

  return (
    <Context.Provider value={{sidebar,setSidebar, videos}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider