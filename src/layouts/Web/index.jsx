import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../companents/Header"
import ContextProvider from '../../context/Context'

const index = () => {
  return (
      <div>
        <ContextProvider>
          <Header/>
          <Outlet/>
        </ContextProvider>
      </div>
  )
}

export default index