import { memo } from "react";
import { Helmet } from "react-helmet-async";
import FeaturesCard from "../../components/ui/Cards/FeaturesCard";

const Features = () => {
    return (
        <>
            <Helmet>
                <title>Features | SkillSphere</title>
                <meta
                    name="description"
                    content="Explore SkillSphere features including tech blogs, tech news, coding gear, and project collaboration for developers and startups."
                />
            </Helmet>

            <main className="w-full min-h-screen bg-linear-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white">
                <div className="floating-cube cube-1"></div>
                <div className="floating-cube cube-2"></div>
                <div className="floating-cube cube-3"></div>

                <section className="max-w-7xl mx-auto px-6 py-18 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3">
                        Explore What I Offer
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg animate-slideUp">
                        SkillSphere is built to empower developers, creators, and founders
                        with content, tools, and collaboration opportunities — all in one ecosystem.
                    </p>
                </section>

                <FeaturesCard />
            </main>
        </>
    );
};

export default memo(Features);