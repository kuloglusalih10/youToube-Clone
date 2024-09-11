import React from 'react'
import { useContext } from 'react'
import { Context } from '../../../../context/Context'

const index = () => {
    const {videos} = useContext(Context);
  return (
    <div>Main SAyfası</div>
  )
}

export default index