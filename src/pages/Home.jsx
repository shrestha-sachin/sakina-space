import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sprout, Handshake, Sparkles, Heart, MessageCircle, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    }),
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const Home = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">

            {/* ─── Hero Section ─── */}
            <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center bg-gradient-soft">
                {/* Decorative blobs */}
                <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-[var(--color-sakina-brand-soft)] blur-3xl opacity-60 animate-pulse-soft" />
                <div className="absolute top-40 left-[10%] w-72 h-72 rounded-full bg-[var(--color-sakina-sage-soft)] blur-3xl opacity-60 animate-pulse-soft" style={{ animationDelay: '2s' }} />

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.div
                        variants={fadeUp} initial="hidden" animate="visible" custom={0}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white border border-[var(--color-sakina-border)] shadow-sm"
                    >
                        <span className="text-xs font-semibold tracking-widest text-[var(--color-sakina-stone-light)] uppercase">
                            Culture-first mental health care
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp} initial="hidden" animate="visible" custom={1}
                        className="text-5xl md:text-7xl mb-8 leading-[1.1] tracking-tight text-[var(--color-sakina-stone)]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        Mental health care that feels{' '}
                        <span className="text-gradient-brand relative inline-block">
                            safe
                            <svg className="absolute -bottom-1 left-0 w-full text-[var(--color-sakina-brand-light)] opacity-50" height="8" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp} initial="hidden" animate="visible" custom={2}
                        className="text-lg text-[var(--color-sakina-stone-light)] mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Connect with therapists who understand your culture, identity, and lived experience without the need for over-explaining.
                    </motion.p>

                    <motion.div
                        variants={fadeUp} initial="hidden" animate="visible" custom={3}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/clients" className="btn-primary text-lg">
                            Find Support
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/therapists" className="btn-secondary text-lg">
                            Join as a Therapist
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── How It Works ─── */}
            <section className="py-28 w-full bg-[var(--color-sakina-bg)]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl mb-6 text-[var(--color-sakina-stone)]" style={{ fontFamily: 'var(--font-serif)' }}>
                            A simpler path to the right match
                        </h2>
                        <p className="text-[var(--color-sakina-stone-light)] max-w-lg mx-auto text-lg leading-relaxed">
                            We've removed the barriers between you and care that truly fits your life.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                step: '01',
                                title: 'Tell us about yourself',
                                desc: 'Share your preferences—language, cultural background, and what kind of support you need.',
                                Icon: Sprout,
                                accent: 'sage',
                            },
                            {
                                step: '02',
                                title: 'We find your match',
                                desc: 'Our matching considers identity, lived experience, and therapeutic approach to connect you.',
                                Icon: Handshake,
                                accent: 'brand',
                            },
                            {
                                step: '03',
                                title: "Start when ready",
                                desc: "No pressure. Begin your journey when it feels right. Your therapist already understands.",
                                Icon: Sparkles,
                                accent: 'sage',
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.step}
                                variants={fadeUp}
                                className="glass-card rounded-3xl p-10 relative group"
                            >
                                <div className={`w-14 h-14 rounded-2xl mb-8 icon-box icon-box-${item.accent} group-hover:scale-110 transition-transform`}>
                                    <item.Icon className="w-6 h-6" strokeWidth={2} />
                                </div>
                                <div className="text-xs font-bold tracking-widest uppercase mb-3 text-[var(--color-sakina-stone-light)] opacity-60">
                                    Step {item.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-[var(--color-sakina-stone)]">{item.title}</h3>
                                <p className="text-[var(--color-sakina-stone-light)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Why Sakina Space ─── */}
            <section className="py-28 w-full bg-[var(--color-sakina-bg-alt)]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <h2 className="text-4xl md:text-5xl mb-6 leading-tight text-[var(--color-sakina-stone)]" style={{ fontFamily: 'var(--font-serif)' }}>
                                Built on trust,<br />not transactions.
                            </h2>
                            <p className="text-lg text-[var(--color-sakina-stone-light)] mb-12 leading-relaxed">
                                We believe mental health care should feel safe from the very first click. It's about quality, connection, and respect.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Heart, title: "Culture is foundational", desc: "Your identity shapes your experience. We treat it as core to your care.", color: "brand" },
                                    { icon: MessageCircle, title: "No over-explaining", desc: "You shouldn't have to educate your therapist. We match you with those who get it.", color: "sage" },
                                    { icon: ShieldCheck, title: "Privacy first", desc: "Your data is never sold. Your sessions are encrypted. Safe space means safe data.", color: "brand" }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center icon-box-${feature.color}`}>
                                            <feature.icon className="w-5 h-5" strokeWidth={2} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-[var(--color-sakina-stone)]">{feature.title}</h4>
                                            <p className="text-[var(--color-sakina-stone-light)] text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                                    className="glass-card p-8 rounded-3xl min-h-[200px] sm:h-64 flex flex-col justify-between"
                                >
                                    <Users className="w-10 h-10 text-[var(--color-sakina-sage)]" />
                                    <div>
                                        <span className="block text-3xl font-serif mb-1">Community</span>
                                        <span className="text-sm text-[var(--color-sakina-stone-light)]">Built for us, by us</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                                    className="glass-card p-8 rounded-3xl min-h-[200px] sm:h-64 flex flex-col justify-between bg-[var(--color-sakina-brand-soft)]"
                                >
                                    <span className="block text-4xl font-serif text-[var(--color-sakina-brand)]">100%</span>
                                    <span className="text-sm font-medium">Verified & Vetted<br />Therapists</span>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                                className="glass-card p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-[var(--color-sakina-border)]"
                            >
                                <div>
                                    <h3 className="text-2xl font-serif mb-2">Start your journey</h3>
                                    <p className="text-[var(--color-sakina-stone-light)]">Find a therapist who truly understands you.</p>
                                </div>
                                <Link to="/clients" className="w-12 h-12 rounded-full bg-[var(--color-sakina-brand)] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Quote ─── */}
            <section className="py-36 w-full relative overflow-hidden bg-[var(--color-sakina-bg)]">
                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-5xl leading-tight font-serif mb-8 text-[var(--color-sakina-stone)]">
                            "Healing begins when you feel seen—not just heard, but truly understood in the fullness of who you are."
                        </h3>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-[var(--color-sakina-border)]" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-sakina-stone-light)]">The Sakina Space Team</span>
                            <div className="h-px w-12 bg-[var(--color-sakina-border)]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA Banner ─── */}
            <section className="py-24 bg-[var(--color-sakina-bg-alt)] text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl mb-6 font-serif text-[var(--color-sakina-stone)]">Ready to find your space?</h2>
                    <p className="text-[var(--color-sakina-stone-light)] text-lg mb-10 max-w-lg mx-auto">
                        Whether you're seeking support or offering it, we're here for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/clients" className="btn-primary text-lg">
                            I need support
                        </Link>
                        <Link to="/therapists" className="btn-secondary text-lg">
                            I'm a therapist
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
