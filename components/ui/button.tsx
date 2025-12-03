import * as React from "react";

import { cn } from "@/lib/utils";

// Note: We haven't installed cva or radix-ui/react-slot yet, but I'll implement a simpler version first 
// or I should install them. For now, I'll stick to a simple component to avoid more installs if possible, 
// but cva is great. I'll use standard props for now to keep it simple and robust without more deps.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-900/20",
            secondary: "bg-white text-black hover:bg-zinc-200",
            outline: "border border-slate-700 text-white hover:bg-white hover:text-black",
            ghost: "text-slate-400 hover:text-white hover:bg-white/5",
            link: "text-brand-blue underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-10 px-6 py-2 text-sm",
            lg: "h-12 px-8 text-base",
        };

        const Comp = "button";

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
