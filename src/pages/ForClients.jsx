import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, HandHeart, Lock, Clock, BadgeCheck, CheckCircle2 } from 'lucide-react';
import ClientWaitlistForm from '../components/ClientWaitlistForm';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const ForClients = () => {
    return (
        <div className="flex flex-col w-full">

            {/* ─── Hero Section ─── */}
            <section className="relative py-24 px-6 bg-gradient-soft">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--color-sakina-brand)] mb-4">
                                For Clients
                            </span>
                            <h1 className="text-5xl md:text-6xl mb-6 leading-[1.1] text-[var(--color-sakina-stone)]" style={{ fontFamily: 'var(--font-serif)' }}>
                                Find a therapist who <br />
                                <span className="text-gradient-brand">already understands.</span>
                            </h1>
                            <p className="text-lg text-[var(--color-sakina-stone-light)] mb-8 leading-relaxed max-w-lg">
                                Stop explaining your existence. Start healing. We match you with therapists who share your cultural context, language, and lived experience.
                            </p>

                            <div className="flex flex-col gap-3">
                                {['Culturally matched care', 'Private & Secure', 'No subscription fees'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-sakina-brand)]" />
                                        <span className="text-[var(--color-sakina-stone)] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
                            className="glass-card p-1 rounded-3xl"
                        >
                            <div className="bg-[var(--color-sakina-bg-alt)] rounded-2xl h-[400px] w-full flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-sakina-brand-light)] rounded-full blur-3xl opacity-30 animate-pulse-soft" />
                                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--color-sakina-sage-light)] rounded-full blur-3xl opacity-30 animate-pulse-soft" />
                                <p className="text-[var(--color-sakina-stone-light)] relative z-10 font-serif text-2xl opacity-50">
                                    (Space for Illustration)
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Features Grid ─── */}
            <section className="py-24 bg-[var(--color-sakina-bg)]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl mb-4 text-[var(--color-sakina-stone)]" style={{ fontFamily: 'var(--font-serif)' }}>
                            What makes us different?
                        </h2>
                        <p className="text-[var(--color-sakina-stone-light)]">We designed every part of this experience with your comfort in mind.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: Globe, title: "Identity-based matching", desc: "We consider culture, ethnicity, gender, and faith when connecting you.", color: "brand" },
                            { icon: MessageSquare, title: "Language that feels like home", desc: "Speak your first language. Express yourself naturally.", color: "sage" },
                            { icon: HandHeart, title: "Your faith, your terms", desc: "Spirituality is honored but never assumed. Faith context is always optional and client-led.", color: "brand" },
                            { icon: Lock, title: "Privacy & safety first", desc: "Your information is never shared without consent. Encrypted & secure.", color: "sage" },
                            { icon: Clock, title: "No pressure, ever", desc: "We never rush you into booking. Take your time exploring.", color: "brand" },
                            { icon: BadgeCheck, title: "Licensed & vetted", desc: "Every therapist is licensed, verified, and committed to culturally aligned care.", color: "sage" }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-8 rounded-2xl hover:bg-white transition-colors group">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 icon-box-${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-[var(--color-sakina-stone)]">{item.title}</h3>
                                <p className="text-sm text-[var(--color-sakina-stone-light)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Timeline / How It Works ─── */}
            <section className="py-24 bg-[var(--color-sakina-bg-alt)]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl mb-12 text-center text-[var(--color-sakina-stone)]" style={{ fontFamily: 'var(--font-serif)' }}>
                        What to expect
                    </h2>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-sakina-border)] before:to-transparent">
                        {[
                            { num: 1, title: "Join the waitlist", desc: "Tell us a little about what you're looking for. It takes 2 minutes." },
                            { num: 2, title: "We review your needs", desc: "Our team carefully considers your preferences to find the best alignment." },
                            { num: 3, title: "Get matched", desc: "We'll introduce you to a therapist who shares your background." },
                            { num: 4, title: "Begin on your terms", desc: "Schedule your first session when you feel ready. No deadlines." }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-sakina-brand)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                    {step.num}
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                                    <h3 className="text-lg font-semibold mb-2 text-[var(--color-sakina-stone)]">{step.title}</h3>
                                    <p className="text-sm text-[var(--color-sakina-stone-light)]">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA / Form Section ─── */}
            <section className="py-24 px-6 bg-[var(--color-sakina-bg)]">
                <div className="max-w-2xl mx-auto text-center" id="waitlist">
                    <ClientWaitlistForm />
                </div>
            </section>

        </div>
    );
};

export default ForClients;
