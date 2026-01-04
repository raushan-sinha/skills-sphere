import { memo } from "react";
import { Helmet } from "react-helmet-async";
import FeaturesCard from "../../components/ui/Cards/FeaturesCard";
import { FEATURES } from "../../data/features.data";

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

            <main className="w-full bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white">
                <div className="floating-cube cube-1"></div>
                <div className="floating-cube cube-2"></div>
                <div className="floating-cube cube-3"></div>
                
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 animate-fadeIn">
                        Explore What We Offer
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg animate-slideUp">
                        SkillSphere is built to empower developers, creators, and founders
                        with content, tools, and collaboration opportunities — all in one ecosystem.
                    </p>
                </section>

                {/* Features Grid */}
                <section className="max-w-7xl mx-auto px-6 pb-24" aria-label="SkillSphere Features">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {FEATURES.map(({ id, icon: Icon, ...rest }) => (
                            <FeaturesCard key={id} icon={<Icon fontSize="large" />} {...rest} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default memo(Features);