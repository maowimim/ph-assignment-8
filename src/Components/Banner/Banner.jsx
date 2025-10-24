import React from 'react';
import playStore from '../../assets/play.png'
import storeImg from '../../assets/appstore.png'
import heroImg from '../../assets/hero.png'
const Banner = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mt-20'>
                    <h1 className='text-6xl font-black mb-8'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
                    <p className='text-[#627382] mb-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex items-center justify-center gap-4 mb-10'>
                    <a href="https://play.google.com/store/apps?hl=en " target='_blank'>
                        <button className='flex items-center py-4 px-5 bg-[#FFFFFF] rounded-xl border border-[#D2D2D2]'>
                            <img src={playStore} alt="" />
                            <p className='ml-2 font-semibold text-xl'>Google Play</p>
                        </button>
                    </a>
                    <a href="https://www.apple.com/app-store/" target='_blank'>
                        <button className='flex items-center py-4 px-5 bg-[#FFFFFF] rounded-xl border border-[#D2D2D2]'>
                            <img src={storeImg} alt="" />
                            <p className='ml-2 font-semibold text-xl'>App Store</p>
                        </button>
                    </a>
                </div>
                <div className='flex  justify-center'>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mb-10 md:20'>
                <h1 className='text-white text-center font-bold text-2xl py-15'>Trusted by Millions, Built for You</h1>
                <div className='block md:flex justify-center gap-x-14 pb-10'>
                    <div className='text-white text-center'>
                        <p>Total Downloads</p>
                        <h1 className='font-black text-5xl my-4'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-white text-center'>
                        <p>Total Downloads</p>
                        <h1 className='font-black text-5xl my-4'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-white text-center'>
                        <p>Total Downloads</p>
                        <h1 className='font-black text-5xl my-4'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;