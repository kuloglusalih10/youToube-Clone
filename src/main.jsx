import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.scss"
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes}/>
)
