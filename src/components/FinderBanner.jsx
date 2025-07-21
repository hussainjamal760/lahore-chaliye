import React from 'react'



const FinderBanner = ({title , bannerImage , data}) => {
    return (
        <section className="bg-gradient-to-r from-gray-950 to-indigo-900 text-white min-h-screen flex items-center justify-center px-4 md:px-12">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">

                {/* Left Side Image */}
                <div className="flex justify-center">
                    <img
                        src={bannerImage}
                        alt="Search Illustration"
                        className="w-[90%] md:w-[80%]"
                    />
                </div>

                {/* Right Side Text */}
                <div className="px-4 md:px-0">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to {title}</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        A modern React web app where you can explore {data} . Designed for speed, beauty, and accuracy.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default FinderBanner