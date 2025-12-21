import React from 'react'
import { Link } from 'react-router-dom';

//todo: Lists for Career Support Designed for Developers -
const featureLists = [
    'Career roadmap guidance',
    'Resume & portfolio feedback',
    'Coding problem explanations',
    '1:1 project collaboration',
    'Startup partnership opportunities',
];

const HelpDeskSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-8 bg-linear-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white overflow-hidden">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className='text-cyan-400'>Career Support Designed</span> for Developers
            </h2>

            <p className="text-gray-300 max-w-3xl mb-8">
                A space for devs needing clarity — interview prep, learning paths, debugging
                help, portfolio feedback, project collaboration & more.
            </p>

            <ul className="text-gray-200 space-y-2">
                {featureLists.map((list, idx) => (
                    <li key={idx} className='group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_20px_rgba(0,255,255,0.15)] animate-slideUp text-left font-mono'>• {list}</li>
                ))}
            </ul>

            <Link className="mt-10 px-6 py-3 bg-cyan-500 rounded-xl text-black font-semibold hover:scale-105 transition cursor-pointer" to='/help'>
                Visit Help Desk
            </Link>
        </section>
    )
}

export default HelpDeskSection;