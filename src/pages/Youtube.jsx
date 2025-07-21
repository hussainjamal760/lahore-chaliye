import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FinderBanner from "../components/FinderBanner"
import bannerImage from "../assets/youtube-banner-image.svg"

function Youtube() {
  const title = "YouTube Finder"
  const data = "Search YouTube Videos"
  const [input, setInput] = useState("")
  const [videos, setVideos] = useState([])

  const handleClick = async () => {
    if (input.trim() === "") return

    const apiKey = "AIzaSyBmsqM8h7JEq1R4rDPg7XQ2xxYB03_3GTc"
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${input}&key=${apiKey}`

    const response = await fetch(apiUrl)
    const data = await response.json()

    const videoArray = data.items.map((video) => ({
      title: video.snippet.title,
      channel: video.snippet.channelTitle,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      thumbnail: video.snippet.thumbnails.medium.url,
    }))

    setVideos(videoArray)
  }

  return (
    <>
      <Navbar />
      <FinderBanner title={title} bannerImage={bannerImage} data={data} />

      {/* Search Bar */}
      <div className="w-full max-w-xl mx-auto mt-10 px-4 flex gap-2">
        <input
          type="search"
          placeholder="Search YouTube videos..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-3 mb-6 rounded-lg text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-red-50"
        />
        <button
          onClick={handleClick}
          className="px-6 py-3 mb-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Search
        </button>
      </div>

      {videos.length > 0 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-wrap justify-center items-center gap-6 z-50 p-4 overflow-auto">
          <button
            onClick={() => setVideos([])}
            className="absolute top-3 right-5 text-red-900 text-4xl hover:text-gray-300"
          >
            &times;
          </button>

          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl w-80 shadow-lg text-center"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full rounded-lg mb-2"
              />
              <h3 className="font-bold text-lg">{video.title}</h3>
              <p className="text-gray-500 mb-2">📺 {video.channel}</p>
              <a
                href={video.url}
                target="_blank"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Watch
              </a>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </>
  )
}

export default Youtube
