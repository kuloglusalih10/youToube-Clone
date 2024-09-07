import { createContext } from "react";
import { useState } from "react";


export const Context = createContext();

const ContextProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <Context.Provider value={{sidebar,setSidebar}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider