import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FinderBanner from "../components/FinderBanner"
import bannerImage from "../assets/github-banner-image.svg"

function Github() {
  const title = "Github Finder"
  const data = "Github Users"

  const [input, setInput] = useState("")
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [showCard, setShowCard] = useState(false)

  const handleClick = async () => {
    const userRes = await fetch(`https://api.github.com/users/${input}`)
    const userData = await userRes.json()
    setUserData(userData)

    const repoRes = await fetch(
      `https://api.github.com/users/${input}/repos?sort=updated&per_page=100`
    )
    const repoData = await repoRes.json()
    setRepos(repoData)

    setShowCard(true)
  }

  const handleClose = () => {
    setShowCard(false)
    setInput("")
    setRepos([])
  }

  return (
    <>
      <Navbar />
      <FinderBanner title={title} bannerImage={bannerImage} data={data} />

      {/* Search Bar */}
      <div className="w-full max-w-xl mx-auto mt-10 px-4">
        <div className="flex">
          <input
            type="search"
            placeholder="Search GitHub username..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow mb-6 px-4 py-3 rounded-l-lg text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-amber-50"
          />
          <button
            onClick={handleClick}
            className="bg-indigo-600 mb-6 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg font-semibold transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Profile Card Popup */}
      {showCard && userData && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-xl shadow-xl p-6 w-full max-w-md text-center overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-lg font-bold"
            >
              ✕
            </button>

            {/* User Info */}
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-indigo-500"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {userData.name || userData.login}
            </h2>
            <p className="text-gray-600">{userData.bio}</p>
            <div className="flex justify-around mt-6 text-sm text-gray-700">
              <p>👥 Followers: {userData.followers}</p>
              <p>📦 Repos: {userData.public_repos}</p>
            </div>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-indigo-600 hover:underline font-semibold"
            >
              View Profile
            </a>

            {/* Repositories List */}
            {repos.length > 0 && (
              <div className="mt-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🔗 Recent Repositories:
                </h3>
                <ul className="space-y-2">
                  {repos.map((repo) => (
                    <li
                      key={repo.id}
                      className="border p-3 rounded-md bg-gray-100"
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 font-medium hover:underline"
                      >
                        {repo.name}
                      </a>
                      <p className="text-sm text-gray-600">
                        {repo.description || "No description"}
                      </p>
                      <span className="text-sm text-yellow-600 font-semibold">
                        ⭐ {repo.stargazers_count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Github
