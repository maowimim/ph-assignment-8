import React, { useState } from 'react';
import InstalledUi from './InstalledUi';


const Install = () => {

    const [installed, setInstalled] = useState(JSON.parse(localStorage.getItem("apps")));

    const [sort, setSort] = useState("");

    const handleForRemove = (id) => {
        const latestApp = installed.filter(p => p.id !== id)
        setInstalled(latestApp)
    }

    const handleSorting = () => {
        if(sort === "size-asc"){
            return [...installed].sort((a, b) => a.size-b.size);
        }
        else if(sort === "size-desc"){
            return [...installed].sort((a,b) => b.size-a.size);
        }
        else{
            return installed;
        }
    }
    return (
        <div className='bg-[#f4f4f4]'>
            <div className='max-w-[1440px] mx-auto pb-20'>
                <div className='text-center space-y-3 mt-10'>
                    <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div>
                    <div className='flex justify-between items-center mb-5'>
                        <h1 className='font-semibold text-2xl'>{installed.length} Apps Found</h1>
                      <label className='form-control w-full max-w-xs'>
                            <select className='select' value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="none">Sort By Size</option>
                                <option value="size-desc">High to Low</option>
                                <option value="size-asc">Low To High</option>
                            </select>
                        </label>
                    </div>
                    <div className='space-y-3'>
                        {
                            handleSorting().map(app => <InstalledUi handleForRemove={handleForRemove} app={app}></InstalledUi>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Install;