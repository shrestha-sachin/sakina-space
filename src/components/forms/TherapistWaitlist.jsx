import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TherapistWaitlistForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        licenseType: '',
        statesLicensed: '',
        culturalAlignment: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Therapist Waitlist Submission:', formData);
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
                <h3 className="text-2xl font-serif text-[var(--color-sakina-sage)] mb-2">Welcome.</h3>
                <p className="opacity-80">We appreciate your interest in joining our network. We'll reach out shortly.</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">Full Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition bg-white"
                    placeholder="Dr. Maya Angelou"
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
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition bg-white"
                    placeholder="maya@example.com"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">License Type</label>
                <select
                    required
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition bg-white"
                >
                    <option value="">Select license</option>
                    <option value="LCSW">LCSW</option>
                    <option value="LMFT">LMFT</option>
                    <option value="LPC">LPC</option>
                    <option value="PsyD/PhD">PsyD / PhD</option>
                    <option value="MD/DO">MD / DO</option>
                    <option value="Associate/Intern">Associate / Intern</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">States Licensed In</label>
                <input
                    required
                    type="text"
                    name="statesLicensed"
                    value={formData.statesLicensed}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition bg-white"
                    placeholder="e.g. CA, NY, TX"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium opacity-70">Cultural / Language Alignment</label>
                <textarea
                    rows="3"
                    name="culturalAlignment"
                    value={formData.culturalAlignment}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-stone-200 focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition bg-white resize-none"
                    placeholder="Briefly describe the communities you serve or languages you speak."
                />
            </div>

            <button
                type="submit"
                className="mt-4 bg-[var(--color-sakina-sage)] text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition transform active:scale-95 shadow-md"
            >
                Join Practitioner Network
            </button>
        </form>
    );
};

export default TherapistWaitlistForm;
