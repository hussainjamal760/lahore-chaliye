import React from 'react'
function Testimonials() {
  const testimonials = [
    {
      name: "Sana Malik",
      role: "Software Engineer @Upwork",
      quote:
        "Finder Hub is my go-to tool when I need quick GitHub insights or trending videos to learn from. It saves me time and keeps my research efficient.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ali Qureshi",
      role: "React Developer @Fiverr",
      quote:
        "I’ve tried dozens of dev tools, but Finder Hub stands out with its simplicity and stunning UI. It’s intuitive, fast, and built like a real-world product.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Mariam Javed",
      role: "Full Stack Intern @CodeVerse",
      quote:
        "As a student, I use Finder Hub daily to explore developer profiles and project inspiration. It’s clean, reliable, and beautifully responsive.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]

  return (
    <section className="bg-gray-100 py-20 px-6 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">What Developers Say</h2>
        <p className="text-gray-500 mt-2">Real stories from real users</p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed">“{item.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
