"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccessoriesPage() {
    const router = useRouter();

    useEffect(() => {
        router.push("/shop?category=accessories");
    }, [router]);

    return null;
}
