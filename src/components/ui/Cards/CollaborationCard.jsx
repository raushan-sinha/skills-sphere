import React from 'react'

//todo: Collaboration features lists -
const featureLists = [
    'Startup & SaaS collaborations',
    'Frontend & UI system partnerships',
    'Technical documentation support',
    'Long-term product thinking',
    'Community-driven engineering',
];

const CollaborationCard = () => {
    return (
        <div
            className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl
                 border border-white/10 transition-transform duration-500
                 hover:scale-[1.03]
                 hover:[transform:rotateX(6deg)_rotateY(6deg)]"
        >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                Collaboration
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
                A space for builders who want to ship meaningful products / websites / apps —
                from early-stage startups to open-source and focused side projects. 
            </p>

            <ul className="space-y-3 text-gray-200 text-sm">
                {featureLists.map((list, idx) => (
                    <li key={idx} className='group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_20px_rgba(0,255,255,0.15)] animate-slideUp text-left font-mono'>• {list}</li>
                ))}
            </ul>

            <button
                className="mt-8 px-6 py-3 rounded-xl bg-indigo-500 text-black
                   font-semibold transition hover:scale-105 cursor-pointer"
            >
                Start a Collaboration
            </button>
        </div>
    )
}

export default CollaborationCard;