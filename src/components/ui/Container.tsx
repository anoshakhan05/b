import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn("mx-auto max-w-[1440px] px-6 md:px-12", className)} {...props}>
            {children}
        </div>
    );
}
