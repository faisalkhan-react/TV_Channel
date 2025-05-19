import React from 'react'
import { useSelector } from 'react-redux'

const AdminUpload = () => {
  const isOpend = useSelector(state => state?.modal)
  return (
    isOpend && (
      <div className='absolute top-0 left-0 z-10 h-screen w-screen flex justify-center items-center'>Admin_upload</div>
    )
  )
}

export default AdminUpload