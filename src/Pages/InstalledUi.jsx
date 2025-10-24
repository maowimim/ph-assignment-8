import React from 'react';
import imgOfDnld from '../assets/icon-downloads.png'
import imgOfRV from '../assets/icon-review.png'

const InstalledUi = ({app,handleForRemove}) => {


    return (
        <div className='flex justify-between items-center bg-[#FFFFFF] p-5 rounded-2xl'>
            <div className='flex items-center'>
                <img className='w-[100px] h-[100px]' src={app.image} alt="" />
                <div className='ml-5'>
                    <h1 className='font-semibold text-2xl'>{app.title}</h1>
                    <div className='flex space-x-5'>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[16px] h-[16px]' src={imgOfDnld} alt="" />
                            <p>{app.downloads}</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[16px] h-[16px]' src={imgOfRV} alt="" />
                            <p>{app.reviews}</p>
                        </div>
                        <div>
                            <p>{app.size}MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleForRemove(app.id)}  className='py-3 px-4 bg-[#00D390] text-white font-semibold rounded-xl'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledUi;