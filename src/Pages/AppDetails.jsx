import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useApps from '../Hooks/useApps'
import downloadImage from "../assets/icon-downloads.png"
import iconrating from "../assets/icon-ratings.png"
import iconreview from "../assets/icon-review.png"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const AppDetails = () => {
  const [install, setInstall]= useState(false)
  const { id } = useParams()
  const { apps } = useApps()

  const app = apps.find(p => p.id === parseInt(id))

  if (!app) {
    return <p>Loading or app not found...</p>
  }
  
const handleAddtoStorage=(app)=>{
   
  let installedApp = JSON.parse(localStorage.getItem("apps")) || []
  let updatedApps = [];
  if(installedApp){
    const copyApp = installedApp.some(p=> p.id === app.id)
    if(copyApp) return alert("This App Already installed")
     updatedApps= [...installedApp,app]
  }
  else{
    updatedApps.push(app)
  }
 
  localStorage.setItem("apps",JSON.stringify(updatedApps))
}
  return (
    <div className='max-w-[1440px] mx-auto mb-10 md:mb-20'>
      <div className='flex flex-col md:flex-row p-3 mt-10 md:mt-16 space-y-2'>
        <div className='md:w-1/3'>
          <img className='w-[300px] md:w-[300px] h-[300px]' src={app.image} alt="" />
        </div>
        <div className='ml-5 space-y-2 md:w-2/3'>
          <h1 className='font-bold text-4xl'>{app.title}</h1>
          <p className='text-[#627382] text-xl'>Developed by <span className='text-[#632EE3] font-semibold'>{app.companyName}</span></p>
          <hr className='my-7' />

          <div className='flex space-x-15'>
            <div className='space-y-2'>
              <img src={downloadImage} alt="" />
              <p>Downloads</p>
              <h1 className='font-extrabold text-4xl'>{app.downloads}</h1>
            </div>
            <div className='space-y-2'>
              <img src={iconrating} alt="" />
              <p>Average Ratings</p>
              <h1 className='font-extrabold text-4xl'>{app.ratingAvg}</h1>
            </div>
            <div className='space-y-2'>
              <img src={iconreview} alt="" />
              <p>Total Reviews</p>
              <h1 className='font-extrabold text-4xl'>{app.reviews}</h1>
            </div>
           
          </div>
           <button onClick={()=>{
            handleAddtoStorage(app),setInstall(true)
           }} className='py-3 px-6 bg-[#00D390] text-white font-bold rounded-xl text-xl mt-8'> {install? 'Installed': `Install Now(${app.size}MB)`} </button>
        </div>
      </div>
      <hr className='my-12' />
      <div className='mx-5'>
        <h1 className='text-2xl font-semibold'>Ratings</h1>
        <div className='w-full h-[300px] md:h-[400px]'>
          <ResponsiveContainer width="100%" height="100%" >
            <BarChart data={[...app.ratings].reverse()} layout='vertical' >
              <XAxis type='number'></XAxis>
              <YAxis type='category' dataKey={'name'}></YAxis>
              <Bar dataKey={'count'} fill="#FF8811" barSize={30}></Bar>
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>
      <hr className='my-12' />
      <div className='space-y-2 mx-3'>
        <h2 className='font-semibold text-2xl'>Description</h2>
        <p className='text-[#627382] text-xl'>{app.description}</p>
      </div>
    </div>
  )
}

export default AppDetails

