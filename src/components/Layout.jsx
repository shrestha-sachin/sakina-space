import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'For Clients', path: '/clients' },
        { name: 'For Therapists', path: '/therapists' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-sakina-bg)] text-[var(--color-sakina-stone)] font-sans">
            {/* Top Bar — slim, sticky, glass */}
            <header className="sticky top-0 z-50 w-full border-b border-[var(--color-sakina-border)] bg-white/80 backdrop-blur-xl">
                <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
                        <Logo />
                        <span className="text-base font-semibold tracking-tight">Sakina Space</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-[13px] font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-[var(--color-sakina-brand)]'
                                    : 'text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-stone)]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -mr-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className={`w-5 h-[1.5px] bg-[var(--color-sakina-stone)] mb-[5px] transition-all ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                        <div className={`w-5 h-[1.5px] bg-[var(--color-sakina-stone)] mb-[5px] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-5 h-[1.5px] bg-[var(--color-sakina-stone)] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden border-t border-[var(--color-sakina-border)]"
                        >
                            <div className="px-6 py-4 flex flex-col gap-3 bg-white">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-sm py-1 text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-stone)]"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer — minimal */}
            <footer className="border-t border-[var(--color-sakina-border)] w-full mt-auto">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2.5 mb-1">
                                <Logo className="w-6 h-6" />
                                <span className="text-base font-semibold">Sakina Space</span>
                            </div>
                            <p className="text-xs text-[var(--color-sakina-stone-light)] max-w-xs leading-relaxed">
                                Culture-first mental health care.
                            </p>
                        </div>
                        <div className="flex gap-16">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-sakina-stone-light)] mb-1">Pages</h4>
                                <Link to="/" className="text-sm text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-stone)] transition-colors">Home</Link>
                                <Link to="/clients" className="text-sm text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-stone)] transition-colors">For Clients</Link>
                                <Link to="/therapists" className="text-sm text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-stone)] transition-colors">For Therapists</Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-sakina-stone-light)] mb-1">Contact</h4>
                                <a href="mailto:hello@sakinaspace.com" className="text-sm text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-stone)] transition-colors">hello@sakinaspace.com</a>
                                <div className="flex items-center gap-3 mt-2">
                                    <a href="https://instagram.com/sakinaspace" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-brand)] transition-colors" aria-label="Instagram">
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a href="https://x.com/sakinaspace" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-brand)] transition-colors" aria-label="Twitter">
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                    <a href="https://linkedin.com/company/sakinaspace" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-brand)] transition-colors" aria-label="LinkedIn">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a href="https://facebook.com/sakinaspace" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-brand)] transition-colors" aria-label="Facebook">
                                        <Facebook className="w-4 h-4" />
                                    </a>
                                    <a href="https://tiktok.com/@sakinaspace" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-brand)] transition-colors" aria-label="TikTok">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                                    </a>
                                    <a href="https://youtube.com/@sakinaspace" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sakina-stone-light)] hover:text-[var(--color-sakina-brand)] transition-colors" aria-label="YouTube">
                                        <Youtube className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[var(--color-sakina-border)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className="text-[11px] text-[var(--color-sakina-stone-light)]">
                            &copy; {new Date().getFullYear()} Sakina Space
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-[var(--color-sakina-stone-light)]">
                            Built by <a href="https://sachinshrestha.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sakina-brand)] transition-colors underline underline-offset-2">Sachin Shrestha</a>
                            <a href="https://linkedin.com/in/sachin-stha" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sakina-brand)] transition-colors" aria-label="LinkedIn">
                                <Linkedin className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
