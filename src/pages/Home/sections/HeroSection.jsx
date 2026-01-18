import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const heading = 'SkillSphere';
    const [title, setTitle] = useState('');

    //todo: Heading Animations in Heading paragraph -
    useEffect(() => {
        let idx = 0;

        const startAnimation = () => {
            const interval = setInterval(() => {
                setTitle(heading.slice(0, idx + 1));
                idx++;

                if (idx === heading.length) {
                    clearInterval(interval);

                    //? animation restart
                    setTimeout(() => {
                        idx = 0;
                        setTitle('');   //? first clear heading
                        startAnimation();  //? animation start
                    }, 2000);
                }
            }, 300);
        }

        //? start animation after 4 seconds 
        const delay = setTimeout(startAnimation, 2000);
        return () => clearTimeout(delay);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white overflow-hidden">
            <div className="floating-cube cube-1"></div>
            <div className="floating-cube cube-2"></div>
            <div className="floating-cube cube-3"></div>

            <div className='flex flex-col items-center justify-center'>
                <h1 className="text-3xl whitespace-nowrap md:text-7xl font-bold leading-tight">
                    Level Up Your Tech with
                </h1>
                <span className="text-cyan-400 text-4xl md:text-7xl font-mono font-bold leading-tight">- {title} -</span>
            </div>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl">
                Where engineering insights, real-world problem solving, and
                career-ready guidance converge — powered by hands-on experience
                and practical execution.
            </p>

            <p className="mt-3 text-gray-400 max-w-xl">
                Explore my work, learn from deep-dive docs, and accelerate your
                dev journey with actionable resources crafted for modern engineers.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap justify-center">
                <a className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition cursor-pointer" href='https://portfolio-raushan-gold.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    Explore My Portfolio
                </a>

                <a className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 font-semibold hover:scale-105 transition cursor-pointer">
                    Access Career Help Desk
                </a>
            </div>
        </section>
    )
}

export default HeroSection;