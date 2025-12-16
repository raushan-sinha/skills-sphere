import React from 'react'
import { AboutSection, BlogSection, CodingCollaborationSection, HelpDeskSection, ProjectSection, SystemDesignSection } from './sections';

export default function About() {
    return (
        <main>
            <AboutSection />
            <ProjectSection />
            <BlogSection />
            <SystemDesignSection />
            <CodingCollaborationSection />
            <HelpDeskSection />
        </main>
    );
}