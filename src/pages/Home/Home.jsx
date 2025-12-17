import React from 'react';
import HeroSection from './sections/HeroSection';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>
                    SkillSphere – Frontend Engineering, React & Next.js Insights by Raushan
                </title>

                <meta
                    name="description"
                    content="SkillSphere is a frontend engineering hub by Raushan featuring React, Next.js, system design docs, coding problems, tech blogs, and career guidance."
                />
            </Helmet>

            <main>
                <HeroSection />
            </main>
        </>
    );
}