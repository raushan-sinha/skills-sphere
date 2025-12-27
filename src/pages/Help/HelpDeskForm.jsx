import React, { useEffect, useRef, useState } from 'react'
import { HELPVALIDATION } from '../../utils/helpValidation';
import { Helmet } from 'react-helmet-async';
import { HELPSERVICEAPI } from '../../services/helpService';

const HelpDeskForm = () => {
    //todo: Add auto focus in input field -
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    //todo: Create a logic for Form input validations after submitting -
    const [error, setError] = useState({});
    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const validationErrors = HELPVALIDATION(data);
        setError(validationErrors);

        if (Object.keys(validationErrors).length !== 0) {
            return;
        }

        try {
            await HELPSERVICEAPI(data);
            setSuccessMsg('Message sent successfully.');
            setTimeout(() => {
                setSuccessMsg('')
            }, 3000);
            form.reset();
        } catch (error) {
            setError({ api: error.message || 'Network connection is poor' });
        }
    };

    //todo: Submit form by the key -
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            const form = e.currentTarget.form;
            if (form) {
                form.requestSubmit();
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Help | SkillSphere</title>
                <meta
                    name="description"
                    content="In this Help page, you can contact or take help with me. You can share your coding issues, this website feedback and anything."
                />
                <meta
                    name="keywords"
                    content="SkillSphere, about SkillSphere, developer platform, frontend learning, tech community, developer growth"
                />
                <meta name="author" content="SkillSphere" />
            </Helmet>

            {/* Card */}
            <div className="relative w-full max-w-md sm:max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-5 sm:p-8 animate-fadeIn mt-4">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Help Desk
                    </h1>
                    <p className="text-gray-300 mt-1 text-xs sm:text-sm">
                        We’re here to unblock you. Drop your issue and let’s sync.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <span className="text-cyan-600 font-bold text-xl">
                        {successMsg}
                    </span>
                </div>
                <br />

                {/* Form */}
                <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                    {Object.values(error).map((msg, i) => (
                        <p key={i} className='text-red-500 text-center font-bold'>{msg}</p>
                    ))}

                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-base font-medium text-gray-300 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            autoComplete='on'
                            ref={inputRef}
                            placeholder="Your full name"
                            className="w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            autoComplete='on'
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-base font-medium text-gray-300 mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            id='subject'
                            name='subject'
                            autoComplete='off'
                            placeholder="Subject"
                            className="w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-base font-medium text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            id='message'
                            name='message'
                            autoComplete='off'
                            placeholder="Send Message...."
                            onKeyDown={handleKeyDown}
                            className="w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none" />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full sm:w-1/2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-sm text-white font-semibold hover:opacity-90 transition cursor-pointer">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default HelpDeskForm;