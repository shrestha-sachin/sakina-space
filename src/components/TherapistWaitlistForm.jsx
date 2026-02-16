import React, { useState } from 'react';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || '/api/notion-proxy';

const TherapistWaitlistForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        licenseType: '',
        statesLicensed: '',
        culturalAlignment: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'therapist', data: formData }),
            });

            if (!res.ok) throw new Error('Submission failed');
            setSubmitted(true);
        } catch (err) {
            console.error('Submit error:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-[var(--color-sakina-sage-soft)] rounded-xl border border-[var(--color-sakina-sage)]"
            >
                <h3 className="text-2xl font-serif text-[var(--color-sakina-sage)] mb-2">Welcome.</h3>
                <p className="opacity-80 text-[var(--color-sakina-stone)]">We appreciate your interest in joining our network. We'll reach out shortly.</p>
            </motion.div>
        );
    }

    return (
        <div className="glass-card p-8 md:p-10 rounded-3xl text-left border-l-4 border-l-[var(--color-sakina-sage)]">
            <h3 className="text-2xl font-serif mb-6 text-[var(--color-sakina-stone)]">Apply to join network</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">Full Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition"
                        placeholder="Dr. Maya Angelou"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">Email Address</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition"
                        placeholder="maya@example.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">License Type</label>
                    <div className="relative">
                        <select
                            required
                            name="licenseType"
                            value={formData.licenseType}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition appearance-none"
                        >
                            <option value="">Select license</option>
                            <option value="LCSW">LCSW</option>
                            <option value="LMFT">LMFT</option>
                            <option value="LPC">LPC</option>
                            <option value="PsyD/PhD">PsyD / PhD</option>
                            <option value="MD/DO">MD / DO</option>
                            <option value="Associate/Intern">Associate / Intern</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[var(--color-sakina-stone-light)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">States Licensed In</label>
                    <input
                        required
                        type="text"
                        name="statesLicensed"
                        value={formData.statesLicensed}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition"
                        placeholder="e.g. CA, NY, TX"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">Cultural / Language Alignment</label>
                    <textarea
                        rows="3"
                        name="culturalAlignment"
                        value={formData.culturalAlignment}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-sage)] focus:ring-1 focus:ring-[var(--color-sakina-sage)] outline-none transition resize-none"
                        placeholder="Briefly describe the communities you serve or languages you speak."
                    />
                </div>

                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    className="mt-4 w-full justify-center text-lg py-4 inline-flex items-center gap-2 bg-[var(--color-sakina-sage)] text-white rounded-full font-medium shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
};

export default TherapistWaitlistForm;
