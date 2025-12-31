import React from 'react'
import { Helmet } from "react-helmet-async";
import { termsOfService } from '../../data/termsOfService.data';

const TermsService = () => {
    return (
        <>
            {/* SEO Optimization */}
            <Helmet>
                <title>Terms of Service | SkillSphere</title>
                <meta
                    name="description"
                    content="Read SkillSphere's Terms of Service to understand your rights, responsibilities, and how we ensure a safe, transparent, and reliable learning platform."
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 py-16 px-5 sm:px-10 lg:px-32">
                <div className="max-w-5xl mx-auto mt-10">

                    {/* Header */}
                    <header className="mb-12 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Effective Date: January 2025
                        </p>
                    </header>

                    {/* Content */}
                    <div className="space-y-10 text-sm sm:text-base leading-relaxed">
                        {termsOfService.map((item, id) => (
                            <section key={id}>
                                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                    {id + 1}. {item.title}
                                </h2>
                                <p>{item.para}</p>
                            </section>
                        ))}

                        {/* <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                3. User Responsibilities
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Provide accurate and up-to-date information</li>
                                <li>Use the platform for lawful purposes only</li>
                                <li>Respect intellectual property and community guidelines</li>
                                <li>Do not attempt to harm, exploit, or disrupt the platform</li>
                            </ul>
                        </section> */}

                    </div>

                    {/* Footer Note */}
                    <div className="mt-16 text-center text-gray-500 text-xs sm:text-sm">
                        © {new Date().getFullYear()} SkillSphere. All rights reserved.
                    </div>

                </div>
            </section>
        </>
    )
}

export default TermsService;