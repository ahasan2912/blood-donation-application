import React from 'react';

const Banner = () => {
    return (
        <main className="flex-grow container mx-auto px-4 py-8 pt-24">
            <div className="hero min-h-[70vh] rounded-xl bg-gradient-to-br from-blood-red to-red-700 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold mb-5">Every Drop Counts</h1>
                        <p className="mb-8">
                            Your donation can save up to three lives. Join our community of donors and make a difference today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn bg-white text-blood-red hover:bg-gray-100 border-none">
                                Donate Now
                            </button>
                            <button className="btn btn-outline text-white hover:bg-white hover:text-blood-red">
                                Find Blood
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;