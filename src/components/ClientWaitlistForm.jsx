import React, { useState } from 'react';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || '/api/notion-proxy';

const ClientWaitlistForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        language: '',
        culturalBackground: '',
        supportType: '',
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
                body: JSON.stringify({ type: 'client', data: formData }),
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
                <h3 className="text-2xl font-serif text-[var(--color-sakina-sage)] mb-2">Thank you.</h3>
                <p className="opacity-80 text-[var(--color-sakina-stone)]">We've added you to our early access list. We'll be in touch soon.</p>
            </motion.div>
        );
    }

    return (
        <div className="glass-card p-8 md:p-10 rounded-3xl text-left">
            <h3 className="text-2xl font-serif mb-6 text-[var(--color-sakina-stone)]">Join the priority waitlist</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">First Name</label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition"
                        placeholder="Jane"
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
                        className="p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition"
                        placeholder="jane@example.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">Preferred Language</label>
                    <div className="relative">
                        <select
                            required
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition appearance-none"
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
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[var(--color-sakina-stone-light)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">Cultural Background <span className="font-normal opacity-60 text-xs ml-1">(Optional)</span></label>
                    <input
                        type="text"
                        name="culturalBackground"
                        value={formData.culturalBackground}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition"
                        placeholder="e.g. South Asian, Latinx, Black..."
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-sakina-stone)]">Type of Support</label>
                    <div className="relative">
                        <select
                            required
                            name="supportType"
                            value={formData.supportType}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-[var(--color-sakina-border)] bg-white/50 focus:bg-white focus:border-[var(--color-sakina-brand)] focus:ring-1 focus:ring-[var(--color-sakina-brand)] outline-none transition appearance-none"
                        >
                            <option value="">What are you looking for?</option>
                            <option value="Individual Therapy">Individual Therapy</option>
                            <option value="Couples Therapy">Couples Therapy</option>
                            <option value="Group Support">Group Support</option>
                            <option value="Coaching">Coaching</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[var(--color-sakina-stone-light)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    className="mt-4 btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {submitting ? 'Submitting...' : 'Join Waitlist'}
                </button>
            </form>
        </div>
    );
};

export default ClientWaitlistForm;
