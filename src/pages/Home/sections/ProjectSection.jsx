import React from 'react'

//todo: Project information -
const projectHighlights = [
    "React + Next.js Apps",
    "UI/UX Engineering Experiments",
    "Performance-Optimized Frontend Builds",
    "System Design for Frontend UI Systems",
    "Internal Tools & Dashboards",
];

const ProjectSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-8 bg-linear-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white overflow-hidden">

            <div className="floating-cube cube-1"></div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Projects That Showcase My <span className='text-cyan-400'>Engineering</span> Craft
            </h2>

            <p className="text-gray-300 max-w-2xl md:max-w-3xl text-base sm:text-lg mb-12 px-2">
                A curated collection of frontend builds, real applications, UI experiments,
                and system design explorations — each backed by architecture thinking and
                real implementation notes.
            </p>


            <ul className="flex flex-col gap-4 text-gray-200">
                {projectHighlights.map((list, idx) => (
                    <li
                        key={idx}
                        className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_20px_rgba(0,255,255,0.15)] animate-slideUp text-left font-mono cursor-pointer"
                    >
                        • {list}
                    </li>
                ))}
            </ul>

            <button className="mt-14 px-8 py-3 bg-cyan-500 rounded-xl text-black font-semibold hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 drop-shadow-[0_4px_20px_rgba(34,211,238,0.25)] cursor-pointer">
                View All Projects
            </button>

        </section>
    )
}

export default ProjectSection;