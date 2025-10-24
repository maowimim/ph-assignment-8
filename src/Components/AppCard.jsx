import React from 'react'
import { Link } from 'react-router'

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app
  return (
    <Link to = {`/app/${id}`}>
      <div>
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
          <figure className='h-48 overflow-hidden'>
            <img
              src={image}
              className='w-full h-full object-contain rounded-lg'
              alt={title} />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-lg font-semibold text-center text-gray-800">{title}</h2>
            <div className='flex justify-between items-center '>
              <button className='bg-[#00D390] py-2 px-3 rounded-sm text-white'>{downloads}</button>
              <button className='bg-[#00D390] py-2 px-3 rounded-sm text-white' >{ratingAvg}</button>
            </div>

          </div>
        </div>
      </div>
    </Link>
  )
}

export default AppCard
