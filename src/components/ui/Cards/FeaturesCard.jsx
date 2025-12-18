import React from 'react'

const FeaturesCard = ({ icon, title, description }) => {
    return (
        
            <article className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Icon */}
                <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition">
                    {icon}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Accent Glow */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></span>
            </article>
    )
}

export default FeaturesCard;