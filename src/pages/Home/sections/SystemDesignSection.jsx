import React from 'react'

//todo: Lists for System Design for Frontend Engineers -
const featureLists = [
    'Designing a scalable UI component system',
    'System design of a modern dashboard',
    'SSR vs SSG vs ISR vs CSR',
    'State architecture for large-scale apps',
];

const SystemDesignSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-8 bg-linear-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white overflow-hidden">

            <h2 className="text-4xl font-bold mb-6">
                System Design for Frontend Engineers
            </h2>

            <p className="text-gray-300 max-w-3xl mb-10">
                Structured documents breaking down real-world frontend system design —
                component systems, dashboards, rendering strategies, caching flows & more.
            </p>

            <ul className="text-gray-200 space-y-2">
                {featureLists.map((list, idx) => (
                    <li key={idx} className='group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_20px_rgba(0,255,255,0.15)] animate-slideUp text-left font-mono'>• {list}</li>
                ))}
            </ul>

            <button className="mt-10 px-6 py-3 bg-cyan-500 rounded-xl text-black font-semibold hover:scale-105 transition cursor-pointer">
                Open System Design Docs
            </button>
        </section>
    )
}

export default SystemDesignSection;