import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PortfolioBtn from "../ui/Buttons/PortfolioBtn";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const title = "SkillSphere";
    const navItems = ["Home", "Features",];

   //todo: navigate to portfolio
    const handleNavigate = () => {
        window.open('https://portfolio-raushan-gold.vercel.app/', '_blank');
    };

    return (
        <nav className="fixed top-4 w-[95%] left-1/2 -translate-x-1/2 bg-[#0f172a] text-white 
                z-50 shadow-lg rounded-2xl backdrop-blur-xl border border-white/10">
            {/* Desktop + Mobile container */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <h1 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight cursor-pointer">
                    {title.split('').map((char, idx) => (
                        <span key={idx} className={`${idx > 4 ? 'text-cyan-600 ml-0.5' : ''}`}>
                            {char}
                        </span>
                    ))}
                </h1>

                {/* Desktop Menu */}
                <div className="flex flex-row gap-5 justify-center items-center">
                    <ul className="hidden md:flex flex-row items-center gap-8 text-lg">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer hover:text-indigo-400 transition-all font-mono font-bolder hover:underline underline-offset-4"
                            >
                                {item}
                            </li>
                        ))}
                        <PortfolioBtn children='Visit Portfolio' onClick={handleNavigate} />
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
                        <li
                            key={index}
                            className="cursor-pointer hover:text-indigo-400 transition-all"
                        >
                            {item}
                        </li>
                    ))}
                    <PortfolioBtn children='Visit My Portfolio' onClick={handleNavigate} />
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;