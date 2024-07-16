import React from 'react'
import Navbar from '../../components/navbar' // Corrected import path

const Page = () => {
  return (
    <div className='flex flex-row'>
      <Navbar />
      <h3>Commands</h3>
    </div>
  )
}

export default Page;
