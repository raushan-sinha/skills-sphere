import React, { useEffect, useRef, useState } from 'react'
import { HELPVALIDATION } from '../../utils/helpValidation';

const HelpDeskForm = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    //todo: Create a logic for Form input validations after submitting -
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const validationErrors = HELPVALIDATION(data);
        setError(validationErrors);

        if (Object.keys(validationErrors) === 0) {
            console.log('Form is valid', data);
        }
    };

    const resetData = () => {
        setError({});
    }


    return (
        <>
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
                            className="w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none" />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                        <button
                            type='reset'
                            onClick={resetData}
                            className="w-full sm:w-1/2 rounded-lg border border-white/30 py-2.5 text-sm text-white font-medium hover:bg-white/10 transition cursor-pointer">
                            Reset
                        </button>

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