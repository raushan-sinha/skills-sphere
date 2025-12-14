import React from 'react'
import CodingProblemCard from '../../../components/ui/Cards/CodingProblemCard';
import CollaborationCard from '../../../components/ui/Cards/CollaborationCard';

const CodingCollaborationSection = () => {
    return (
        <section className="relative w-full py-28 px-6
                        bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-[#020617]
                        text-white overflow-hidden">

            {/* Ambient 3D Background */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-2xl blur-2xl animate-pulse" />
            <div className="absolute bottom-20 right-16 w-40 h-40 bg-indigo-500/20 rounded-2xl blur-2xl animate-pulse" />

            {/* Section Header */}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Practice. Collaborate.
                    <span className="text-cyan-400"> Build Forward.</span>
                </h2>

                <p className="mt-5 text-gray-300 max-w-3xl mx-auto">
                    Strengthen your problem-solving mindset while collaborating
                    with builders who value clean architecture, clarity, and impact.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                <CodingProblemCard />
                <CollaborationCard />
            </div>
        </section>
    )
}

export default CodingCollaborationSection;