import { createContext } from "react";
import { useState,useEffect } from "react";
import { getData } from "../services/get_videos";


export const Context = createContext();

const ContextProvider = ({children}) => {

  const [sidebar, setSidebar] = useState(true);

  const [selected, setSelected] = useState({
    name: 'Anasayfa',
    type: 'home',
  });

  const [videos, setVideos] = useState(null);

  // useEffect(() => {
  //   setVideos(null);

  //   if (selected.type === 'home') {

  //     // anasyafa 
  //     getData('/home/').then((data) => setVideos(data.contents));

  //   } else {

  //     // kategori 
  //     getData(`/search/?q=${selected.name.toLowerCase()}`).then(
  //       (data) => setVideos(data.contents) //! contents'i unutmuşuz
  //     );
      
  //   }
  // }, [selected]);

  return (
    <Context.Provider value={{sidebar,setSidebar,selected, setSelected, videos}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider