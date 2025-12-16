import React from 'react'
import { GitHub, LinkedIn, Mail, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

//todo: Heading logic -
const heading = 'SkillSphere';

//todo: Quick links for Footer -
const quickLinks = {
    heading: 'Quick Links',
    links: ['Home', 'Features',]
};

//todo: Website Information through links -
const webInfoLinks = {
    heading: 'Information',
    links: [
        { link: '/about', name: 'About' },
        { link: '/docs', name: 'Docs' },
        { link: '/blog', name: 'Blog' },
        { link: '/help', name: 'Help' },
    ]
};

//todo: Social Media Links -
const socialLinks = [
    { icon: <GitHub /> },
    { icon: <LinkedIn /> },
    { icon: <Twitter /> },
    { icon: <Mail /> },
];


const Footer = () => {
    return (
        <footer className="bg-[#0a0f1f] text-slate-300">
            <div className="max-w-7xl mx-auto px-6 py-14">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold font-mono tracking-tight cursor-pointer">
                            {heading.split('').map((char, idx) => (
                                <span key={idx} className={`${idx > 4 ? 'text-cyan-600 ml-0.5' : ''}`}>{char}</span>
                            ))}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            A next-gen learning platform focused on real-world skills, career
                            clarity, and industry-ready growth.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white">
                            {quickLinks.heading.toUpperCase()}
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {quickLinks.links.map((link, idx) => (
                                <li key={idx} className="hover:text-white cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Website Information */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white">
                            {webInfoLinks.heading.toUpperCase()}
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {webInfoLinks.links.map((url, idx) => (
                                <li key={idx}>
                                    <Link to={url.link} className="hover:text-white cursor-pointer">{url.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Connect
                        </h3>

                        <div className="mt-4 flex items-center gap-4">
                            {socialLinks.map((link, idx) => (
                                <a key={idx} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition cursor-pointer">
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        <p className="mt-5 text-sm text-slate-400">
                            support@skillsphere.dev
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} SkillSphere. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-slate-400">
                        <span className="hover:text-white cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="hover:text-white cursor-pointer">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;