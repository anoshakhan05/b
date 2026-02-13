"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full transition-all duration-300 font-serif tracking-in",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-gold",
                    "disabled:pointer-events-none disabled:opacity-50 active:scale-95",
                    {
                        "bg-accent-gold text-primary hover:bg-light-gold hover:shadow-[0_0_20px_rgba(198,168,93,0.3)] border border-transparent": variant === "primary",
                        "bg-secondary text-text-primary border border-white/10 hover:border-accent-gold hover:text-accent-gold": variant === "secondary",
                        "bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary": variant === "outline",
                        "bg-transparent text-text-primary hover:text-accent-gold": variant === "ghost",
                        "h-10 px-6 text-sm": size === "sm",
                        "h-12 px-8 text-base": size === "md",
                        "h-14 px-10 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
