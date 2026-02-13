import TextPage from "@/components/ui/TextPage";

export default function FAQPage() {
    return (
        <TextPage title="Frequently Asked Questions">
            <h2>Order Processing</h2>
            <p>All orders are processed within 1-2 business days. You will receive a confirmation email once your order has shipped.</p>

            <h2>International Shipping</h2>
            <p>Yes, we ship worldwide via DHL Express. Shipping times vary by location but typically take 3-5 business days.</p>

            <h2>Returns & Exchanges</h2>
            <p>We accept returns within 30 days of delivery. Items must be unused and in their original packaging.</p>
        </TextPage>
    );
}
