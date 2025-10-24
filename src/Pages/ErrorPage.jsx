import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <div className='flex flex-col justify-center items-center mb-15'>
                    <img src={error} alt="" />
                    <div className='text-center space-y-2.5'>
                        <h1 className='font-semibold text-5xl'>Oops, page not found!</h1>
                        <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
                        <Link to='/apps'>
                            <button className='py-4 px-8 rounded-sm text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;