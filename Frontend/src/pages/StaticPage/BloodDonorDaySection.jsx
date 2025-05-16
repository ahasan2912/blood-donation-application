import React from 'react';
import { Link } from 'react-router-dom';

const BloodDonorDaySection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="min-h-[30vh] rounded-xl bg-red-500 flex flex-col items-center justify-center">
                <div className='flex items-center gap-3 px-3'>
                    <h1 className='text-white text-4xl md:text-6xl font-bold hover:text-yellow-400'>WORLD Blood Donor Day | 14 June</h1>
                </div>
                <a href="https://www.who.int/campaigns/world-blood-donor-day" target='-blank'>
                    <button className='btn mt-5 text-base'>Read More</button>
                </a>
            </div>
        </div>
    );
};

export default BloodDonorDaySection;