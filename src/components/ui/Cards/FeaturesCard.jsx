import React, { useContext } from 'react'
import { FeatureContext } from '../../../context/FeatureContext';

const FeaturesCard = () => {
    const data = useContext(FeatureContext);

    return (
        <section className="flex flex-wrap gap-6 p-8">
            {data.map((item, id) => {
                const Icon = item.icon;

                return (
                    <article
                        key={id}
                        className="relative group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between">
                        <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                            <Icon fontSize="large" />
                        </div>

                        <h2 className="text-xl font-semibold mb-3">
                            {item.title}
                        </h2>

                        <p className="text-gray-300 text-sm leading-relaxed flex-1">
                            {item.description}
                        </p>

                        <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-tr from-blue-500/10 to-purple-500/10" />
                    </article>
                );
            })}
        </section>
    );
}

export default FeaturesCard;