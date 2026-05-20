'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href , children , className}) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return <Link href={href} className={`${isActive ? "text-[#00655C] font-semibold border-[#00655C] border-b-2 " : ""} ${className}`}>{children}</Link>
};

export default Navlink;