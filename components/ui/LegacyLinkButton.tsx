// components/UI/LegacyLinkButton.tsx

"use client"; // CRITICAL: This must be a Client Component

import Link from 'next/link';
import React from 'react';

interface LegacyLinkButtonProps {
    href: string;
    children: React.ReactNode;
    className: string;
}

export default function LegacyLinkButton({ href, children, className }: LegacyLinkButtonProps) {
    return (
        <Link href={href} passHref legacyBehavior>
            <a className={className}>
                {children}
            </a>
        </Link>
    );
}