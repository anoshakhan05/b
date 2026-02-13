import { Container } from "@/components/ui/Container";

interface TextPageProps {
    title: string;
    children: React.ReactNode;
}

export default function TextPage({ title, children }: TextPageProps) {
    return (
        <div className="pt-32 pb-20 bg-primary min-h-screen">
            <Container className="max-w-3xl">
                <h1 className="font-serif text-4xl text-text-primary mb-8">{title}</h1>
                <div className="prose prose-invert prose-headings:font-serif prose-a:text-accent-gold">
                    {children}
                </div>
            </Container>
        </div>
    );
}
