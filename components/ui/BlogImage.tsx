import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
    className?: string;
}

export function BlogImage({ src, alt, width = 800, height = 450, caption, className }: BlogImageProps) {
    return (
        <figure className={cn("my-8", className)}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-auto object-cover"
                />
            </div>
            {caption && (
                <figcaption className="text-center text-slate-500 text-sm mt-3 italic font-mono">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
