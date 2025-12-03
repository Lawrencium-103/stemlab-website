import Link from "next/link";
import { Envelope, Phone, MapPin, LinkedinLogo, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-800 py-20 text-sm text-zinc-500">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                <div className="col-span-2">
                    <div className="font-mono font-bold text-2xl text-white mb-4">
                        STEM<span className="text-brand-blue">LAB.</span>
                    </div>
                    <p className="max-w-sm mb-8 leading-relaxed">
                        Decoding data, empowering research. The bridge between academic theory and high-end industry application.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-white hover:text-brand-blue transition-colors">
                            <LinkedinLogo size={24} weight="fill" />
                        </Link>
                        <Link href="#" className="text-white hover:text-brand-blue transition-colors">
                            <TwitterLogo size={24} weight="fill" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
                    <ul className="space-y-3">
                        <li><Link href="/research" className="hover:text-brand-blue transition-colors">Research Support</Link></li>
                        <li><Link href="/business" className="hover:text-brand-blue transition-colors">Business Analytics</Link></li>
                        <li><Link href="/data" className="hover:text-brand-blue transition-colors">Data Science</Link></li>
                        <li><Link href="/career" className="hover:text-brand-blue transition-colors">Career Development</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <Envelope size={18} className="text-brand-blue" weight="fill" />
                            oladeji.lawrence@gmail.com
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-brand-blue" weight="fill" />
                            +234 903 881 9790
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={18} className="text-brand-blue" weight="fill" />
                            Lagos, Nigeria
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-zinc-900 mt-16 pt-8 text-center text-xs">
                &copy; {new Date().getFullYear()} StemLab. All rights reserved.
            </div>
        </footer>
    );
}
