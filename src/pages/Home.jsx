import React from "react"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import Banner from "../components/Banner"

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home
