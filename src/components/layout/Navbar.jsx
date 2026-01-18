import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PortfolioBtn from "../ui/Buttons/PortfolioBtn";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { GitHub, LogoDev, Reddit } from "@mui/icons-material";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    //todo: Navbar Title
    const title = "SkillSphere";

    //todo: Navbar Links for iterate each page
    const navItems = [
        { link: '/', name: 'Home' },
        { link: '/features', name: 'Features' },
    ];

    //todo: Social Icons links -
    const socialLinks = [
        { icon: <GitHub />, url: 'https://github.com/raushan-sinha' },
        { icon: <Reddit />, url: 'https://www.reddit.com/u/raushan_sinha2004/s/Tf3CeNSC0k' },
        { icon: <LogoDev />, url: 'https://dev.to/raushan_sinha_8efb05c7b1c' },
    ];

    return (
        <nav className="fixed top-4 w-[95%] left-1/2 -translate-x-1/2 bg-[#0f172a] text-white z-50 shadow-lg rounded-2xl backdrop-blur-xl border border-gray/10">
            {/* Desktop + Mobile container */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <h1 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight cursor-pointer">
                    {title.split('').map((char, idx) => (
                        <span key={idx} className={`${idx > 4 ? 'text-cyan-600 ml-0.5' : ''}`} onClick={() => navigate('/')}>
                            {char}
                        </span>
                    ))}
                </h1>

                {/* Desktop Menu */}
                <div className="flex flex-row gap-5 justify-center items-center">
                    <ul className="hidden md:flex flex-row items-center gap-8 text-lg">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link} className={useMatch(item.link) ? 'underline underline-offset-4 text-cyan-400 transition-all font-mono font-bold' : 'cursor-pointer font-mono font-bold'}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Social Connect icons */}
                        <div className="bg-linear-to-b from-[#f1eaff] to-[#ffeded] rounded-xl px-4 py-1 flex items-center justify-center gap-6">
                            {socialLinks.map((link, id) => (
                                <a key={id} href={link.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform duration-200 mb-1 text-black">{link.icon}</a>
                            ))}
                        </div>
                        {/* <PortfolioBtn children='Visit Portfolio' onClick={handleNavigate} /> */}
                    </ul>

                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`md:hidden bg-[#0f172a] transition-all duration-300 overflow-hidden font-mono ${open ? "max-h-96 py-4" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-4 px-6 text-lg">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link} className="cursor-pointer hover:text-indigo-400 transition-all" onClick={() => setOpen(false)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <div className="bg-linear-to-b from-[#f1eaff] to-[#ffeded] rounded-xl px-4 py-1 flex items-center justify-start gap-6 max-w-min">
                        {socialLinks.map((link, id) => (
                            <a key={id} href={link.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform duration-200 mb-1 text-black">{link.icon}</a>
                        ))}
                    </div>
                    {/* <PortfolioBtn children='Visit My Portfolio' onClick={handleNavigate} /> */}
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;