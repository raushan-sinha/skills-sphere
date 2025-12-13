import React from 'react';
import { HeroSection, AboutSection, ProjectSection, BlogSection, SystemDesignSection, HelpDeskSection } from './sections';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection />
            <SystemDesignSection />
            <HelpDeskSection />
        </>
    );
}