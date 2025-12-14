import React from 'react'

//todo:  Coding Problems features lists -
const featureLists = [
    'Frontend & UI-centric problem statements',
    'React & Next.js logic breakdowns',
    'Interview-focused thought process',
    'Clean, readable solutions',
    'Zero fluff, maximum signal',
];

const CodingProblemCard = () => {
    return (
        <div
            className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl
                 border border-white/10 transition-transform duration-500
                 hover:scale-[1.03]
                 hover:[transform:rotateX(6deg)_rotateY(-6deg)]"
        >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Coding Problems
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
                Real-world coding challenges focused on frontend and modern
                engineering interviews — optimized for clarity, logic, and
                practical thinking.
            </p>

            <ul className="space-y-3 text-gray-200 text-sm">
                {featureLists.map((list, idx) => (
                    <li key={idx} className='group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_20px_rgba(0,255,255,0.15)] animate-slideUp text-left font-mono'>• {list}</li>
                ))}
            </ul>

            <button
                className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 text-black
                   font-semibold transition hover:scale-105 cursor-pointer"
            >
                Explore Coding Problems
            </button>
        </div>
    )
}

export default CodingProblemCard;