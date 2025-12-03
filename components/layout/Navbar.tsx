"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Research Support", path: "/research" },
    { name: "Business Analytics", path: "/business" },
    { name: "Data Analysis", path: "/data" },
    { name: "Career Dev", path: "/career" },
    { name: "Blog", path: "/blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "glass-nav h-20" : "bg-transparent h-24",
                isOpen && "bg-brand-dark"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
                {/* LOGO */}
                <Link href="/" className="font-mono font-bold text-2xl tracking-tight flex items-center gap-2 text-white group">
                    <div className="w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_10px_#3B82F6] group-hover:scale-110 transition-transform"></div>
                    STEM<span className="text-brand-blue">LAB.</span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden xl:flex gap-2 items-center">
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path}>
                            <button
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all border border-transparent uppercase tracking-wide",
                                    pathname === item.path
                                        ? "bg-brand-blue/15 text-white border-brand-blue/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {item.name}
                            </button>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Button variant="secondary" size="sm" className="font-bold">
                        Get Started
                    </Button>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    className="xl:hidden text-2xl text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <List />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-lg font-medium py-2 border-b border-slate-800",
                                pathname === item.path ? "text-brand-blue" : "text-slate-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>
                        Get Started
                    </Button>
                </div>
            )}
        </nav>
    );
}
