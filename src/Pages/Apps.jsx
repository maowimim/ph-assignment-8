import React, { useState } from 'react'
import useApps from '../Hooks/useApps'
import AppCard from '../Components/AppCard'

const Apps = () => {
  const { apps, loading } = useApps()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term ? apps.filter(app => app.title && app.title.toLocaleLowerCase().includes(term))
    : apps;




  return (
    <div>
      <div className='text-center mt-10 md:mt-15 space-y-4'>
        <h1 className='font-bold text-5xl'>Our All Applications</h1>
        <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className="text-2xl font-bold">All  apps <span className='text-sm text-gray-600'>({searchedApps.length}) Apps Found</span></h1>

        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search' placeholder='Search For App Here' />
        </label>
      </div>
      {
        loading ?
          <div className='flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
          :
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
            {searchedApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
      }
    </div>
  )
}

export default Apps
