import { getPostData, getSortedPostsData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, CalendarBlank } from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getPostData(params.slug);

    return {
        title: `${post.title} | StemLab`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['StemLab Team'],
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

import { BlogImage } from "@/components/ui/BlogImage";
import Image from "next/image";

const components = {
    BlogImage,
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostData(params.slug);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.excerpt,
        image: post.coverImage ? [post.coverImage] : [],
        author: {
            '@type': 'Organization',
            name: 'StemLab',
        },
    };

    return (
        <article className="bg-brand-dark min-h-screen pt-28 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium">
                    <ArrowLeft weight="bold" /> Back to Journal
                </Link>

                <header className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold uppercase tracking-wide mb-6">
                        <CalendarBlank weight="fill" className="text-brand-blue" /> {post.date}
                    </div>
                    <h1 className="font-mono text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-8">
                        {post.excerpt}
                    </p>
                    {post.coverImage && (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold prose-a:text-brand-blue hover:prose-a:text-blue-400">
                    <MDXRemote source={post.content} components={components} />
                </div>
            </div>
        </article>
    );
}
