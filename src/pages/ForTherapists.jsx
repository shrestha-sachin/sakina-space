import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HeartHandshake, Users, Globe2, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import TherapistWaitlistForm from '../components/TherapistWaitlistForm';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
};

const ForTherapists = () => {
    return (
        <div className="flex flex-col w-full">

            {/* ─── Hero Section ─── */}
            <section className="relative py-24 px-6 bg-gradient-soft">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
                            className="glass-card p-1 rounded-3xl"
                        >
                            <div className="bg-[var(--color-sakina-bg-alt)] rounded-2xl h-[400px] w-full flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--color-sakina-brand-light)] rounded-full blur-3xl opacity-30 animate-pulse-soft" />
                                <div className="absolute bottom-10 left-10 w-40 h-40 bg-[var(--color-sakina-sage-light)] rounded-full blur-3xl opacity-30 animate-pulse-soft" />
                                <p className="text-[var(--color-sakina-stone-light)] relative z-10 font-serif text-2xl opacity-50">
                                    (Therapist Portrait)
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--color-sakina-sage)] mb-4">
                                For Therapists
                            </span>
                            <h1 className="text-5xl md:text-6xl mb-6 leading-[1.1] text-[var(--color-sakina-stone)]" style={{ fontFamily: 'var(--font-serif)' }}>
                                Your background is your{' '}
                                <span className="text-gradient-sage">superpower.</span>
                            </h1>
                            <p className="text-lg text-[var(--color-sakina-stone-light)] mb-8 leading-relaxed">
                                Connect with clients who are specifically looking for YOU. We value your lived experience as a critical part of your clinical expertise.
                            </p>

                            <div className="flex flex-col gap-3 mb-8">
                                {['Fair & Transparent Pay', 'Flexible Schedule', 'Curated Matches'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-sakina-sage)]" />
                                        <span className="text-[var(--color-sakina-stone)] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#apply" className="btn-primary">
                                Join our Network
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Benefits Grid ─── */}
            <section className="py-24 bg-[var(--color-sakina-bg)]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl mb-4 text-[var(--color-sakina-stone)]" style={{ fontFamily: 'var(--font-serif)' }}>
                            Why therapists choose Sakina Space
                        </h2>
                        <p className="text-[var(--color-sakina-stone-light)]">Built by clinicians, for clinicians.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Clients who fit", desc: "Stop screening out 90% of consultations. We send you clients who are already a good match.", color: "sage" },
                            { icon: Building2, title: "Private practice support", desc: "We handle the marketing, billing, and admin so you can focus on care.", color: "brand" },
                            { icon: Globe2, title: "Cultural alignment", desc: "Work with clients who value your specific cultural and linguistic background.", color: "sage" },
                            { icon: HeartHandshake, title: "Fair compensation", desc: "We believe in sustainable rates for therapists. No low-ball offers.", color: "brand" },
                            { icon: Sparkles, title: "Community events", desc: "Join monthly case consultations and support circles with peers.", color: "sage" },
                            { icon: GraduationCap, title: "Clinical growth", desc: "Opportunities for supervision hours and specialized training.", color: "brand" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-3xl group"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 icon-box-${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-[var(--color-sakina-stone)]">{item.title}</h3>
                                <p className="text-sm text-[var(--color-sakina-stone-light)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Who We Are Looking For ─── */}
            <section className="py-24 bg-[var(--color-sakina-bg-alt)]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-[var(--color-sakina-border)] shadow-sm">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl mb-4 font-serif text-[var(--color-sakina-stone)]">Who we're looking for</h2>
                            <p className="text-[var(--color-sakina-stone-light)]">We are building a diverse coalition of healers.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Licensed professionals (LCSW, LMFT, LPC, PsyD, PhD, MD)",
                                "Associate clinicians under supervision",
                                "Therapists with genuine cultural competence",
                                "Clinicians fluent in languages other than English"
                            ].map((req, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-sakina-bg-alt)]">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--color-sakina-sage)] mt-0.5 flex-shrink-0" />
                                    <span className="text-[var(--color-sakina-stone)] font-medium">{req}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Application Form ─── */}
            <section className="py-24 px-6 bg-[var(--color-sakina-bg)]" id="apply">
                <div className="max-w-2xl mx-auto text-center">
                    <TherapistWaitlistForm />
                </div>
            </section>

        </div>
    );
};

export default ForTherapists;
