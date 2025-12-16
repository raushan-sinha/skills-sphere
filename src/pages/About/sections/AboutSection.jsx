import React from 'react';

//todo: Paragraph information -
const paragraphInfo = [
    {
        class: 'text-gray-300 leading-relaxed max-w-3xl',
        text: 'I build fast, scalable, and visually immersive digital experiences using React, Next.js, TypeScript, and modern frontend architectures. I’m obsessed with clean UI, maintainable code, and engineering systems that feel effortless on the surface but smart underneath.'
    },
    {
        class: 'text-gray-300 mt-4 max-w-3xl',
        text: 'Through SkillSphere, I share everything I learn — frontend patterns, debugging journeys, architectural thinking — crafted to help developers level up without the noise.'
    }
];

//todo: List information -
const featurePoints = [
    "2+ years building production-ready interfaces",
    "Performance & DX focused engineering",
    "React ecosystem & problem-solving mindset",
    "Exploring system design & engineering culture",
];

const AboutSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-linear-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white overflow-hidden">

            <div className="floating-cube cube-2"></div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Hey, I’m Raushan —
                <span className="text-cyan-400 font-mono"> Frontend Engineer & Technical Creator</span>
            </h2>

            {paragraphInfo.map((para, index) => (
                <p key={index} className={para.class}>{para.text}</p>
            ))}

            <div className="mt-10 w-full max-w-xl mx-auto">
                <ul className="flex flex-col gap-4">
                    {featurePoints.map((item, idx) => (
                        <li key={idx}
                            className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_20px_rgba(0,255,255,0.15)] animate-slideUp text-left font-mono">
                            <span className="font-medium tracking-wide">
                                •   {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default AboutSection;