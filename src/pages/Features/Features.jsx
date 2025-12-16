import { memo } from "react";
import { Article, Newspaper, LaptopMac, Groups } from "@mui/icons-material";

/* Feature Data (scalable + reusable) */
const features = [
    {
        id: 1,
        title: "Tech Blogs",
        description:
            "Deep-dive articles on frontend, backend, system design, and real-world engineering practices — curated for developers who build, not just read.",
        icon: <Article fontSize="large" />,
    },
    {
        id: 2,
        title: "Tech News",
        description:
            "Stay ahead of the curve with bite-sized updates on frameworks, browsers, AI tools, startups, and industry shifts that actually matter.",
        icon: <Newspaper fontSize="large" />,
    },
    {
        id: 3,
        title: "Coding Gear",
        description:
            "Handpicked dev tools, keyboards, productivity stacks, and software recommendations to optimize your coding workflow.",
        icon: <LaptopMac fontSize="large" />,
    },
    {
        id: 4,
        title: "Project & Startup Collaboration",
        description:
            "Collaborate with builders, designers, and founders to work on real projects, open-source ideas, or early-stage startups.",
        icon: <Groups fontSize="large" />,
    },
];

const Features = () => {
    return (
        <>
            <head>
                <title>Features | SkillSphere</title>
                <meta
                    name="description"
                    content="Explore SkillSphere features including tech blogs, tech news, coding gear, and project collaboration for developers and startups."
                />
            </head>

            <main className="w-full bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white">
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
                <section
                    className="max-w-7xl mx-auto px-6 pb-24"
                    aria-label="SkillSphere Features"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item) => (
                            <article
                                key={item.id}
                                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                {/* Icon */}
                                <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-semibold mb-3">
                                    {item.title}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Accent Glow */}
                                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></span>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default memo(Features);