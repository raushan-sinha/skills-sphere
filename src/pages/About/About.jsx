import React from 'react'
import { AboutSection, BlogSection, CodingCollaborationSection, HelpDeskSection, ProjectSection, SystemDesignSection } from './sections';
import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us | SkillSphere</title>
                <meta
                    name="description"
                    content="Learn about SkillSphere — a developer-focused platform built to empower modern engineers through practical learning, real-world projects, and community-driven growth."
                />
                <meta
                    name="keywords"
                    content="SkillSphere, about SkillSphere, developer platform, frontend learning, tech community, developer growth"
                />
                <meta name="author" content="SkillSphere" />
            </Helmet>

            <main>
                <AboutSection />
                <ProjectSection />
                <BlogSection />
                <SystemDesignSection />
                <CodingCollaborationSection />
                <HelpDeskSection />
            </main>
        </>
    );
}