import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientWaitlistForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        language: '',
        culturalBackground: '',
        supportType: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Client Waitlist Submission:', formData);
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-[var(--color-sakina-bg)] rounded-xl border border-[var(--color-sakina-sage)]"
            >
                <h3 className="text-2xl font-serif text-[var(--color-sakina-sage)] mb-2">Thank you.</h3>
                <p className="opacity-80">We've added you to our early access list. We'll be in touch soon.</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">First Name</label>
                <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition bg-white"
                    placeholder="Jane"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">Email Address</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition bg-white"
                    placeholder="jane@example.com"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">Preferred Language</label>
                <select
                    required
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition bg-white"
                >
                    <option value="">Select a language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Urdu">Urdu</option>
                    <option value="French">French</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">Cultural Background (Optional)</label>
                <input
                    type="text"
                    name="culturalBackground"
                    value={formData.culturalBackground}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition bg-white"
                    placeholder="e.g. South Asian, Latinx, Black..."
                />
                <span className="text-xs opacity-50">Helps us match you better.</span>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">Type of Support</label>
                <select
                    required
                    name="supportType"
                    value={formData.supportType}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition bg-white"
                >
                    <option value="">What are you looking for?</option>
                    <option value="Individual Therapy">Individual Therapy</option>
                    <option value="Couples Therapy">Couples Therapy</option>
                    <option value="Group Support">Group Support</option>
                    <option value="Coaching">Coaching</option>
                </select>
            </div>

            <button
                type="submit"
                className="mt-4 bg-[var(--color-sakina-brand)] text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition transform active:scale-95 shadow-md"
            >
                Join Waitlist
            </button>
        </form>
    );
};

export default ClientWaitlistForm;
