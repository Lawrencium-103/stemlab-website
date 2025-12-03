import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react/dist/ssr";

export default function BlogIndex() {
    const posts = getSortedPostsData();

    return (
        <div className="bg-brand-dark min-h-screen">
            <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold uppercase tracking-wide mb-4 border border-brand-blue/20">
                        Insights & Updates
                    </div>
                    <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6">
                        The StemLab <span className="text-brand-blue">Journal.</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Latest thoughts on data science, research methodologies, and career development.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-brand-card border border-slate-800 rounded-xl overflow-hidden hover:border-brand-blue transition-all">
                            <div className="h-48 bg-slate-800 relative">
                                {/* Placeholder for cover image if we had one, or a gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                    <CalendarBlank weight="fill" />
                                    {post.date}
                                </div>
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{post.title}</h2>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                                <div className="text-brand-blue text-sm font-bold flex items-center gap-2">
                                    Read Article <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
