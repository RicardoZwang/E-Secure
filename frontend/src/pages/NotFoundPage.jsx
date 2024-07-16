import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>404 - Page Not found</h1>
        <p className='mt-4'>the page you are looking for might have being removed or is temporarily unavailable</p>
        <a href='/' className='mt-6 text-blue-500 hover:underline'>Go to Homepage</a>
      </div>
    </div>
  )
}

export default NotFoundPage