import React from 'react'
import { Link } from 'react-router'
import AppCard from '../Components/AppCard'
import useApps from '../Hooks/useApps'


const Home = () => {
  // const app = useLoaderData()
  const { apps, loading, error } = useApps()
  // console.log(data)
  const featuredApp = apps.slice(0, 8)
  //  console.log(app)
  return (
    <div>
     
     <div className='text-center'>
          <h1 className='font-bold text-5xl'>Trending Apps</h1>
          <p className='text-[#627382] mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>
        </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
        {featuredApp.map(app => (
          <AppCard key={app.id} app={app} />


        ))}
      </div>
      <div className='flex justify-center mt-12 mb-16'><Link to='/Apps' className='  px-12 py-3 
        bg-purple-600 hover:bg-purple-700 
        text-white 
        font-semibold text-lg
        rounded-lg shadow-xl 
        transform hover:scale-105 transition-all duration-300'>See All </Link></div>
    </div>
  )
}

export default Home
