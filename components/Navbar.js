'use client'
import "../styles/Navbar.css"
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar(props) {
    return (
        <nav className='nav'>
            <Link href="/">
                {/* <Image
                    src=""
                    height={80}
                    width={160}
                    alt="Logo"
                /> */}
                SETH
            </Link>
            <div className='links'>
                <span>All</span>
                <span>About</span>
                <span>Projects</span>
                <span>Socials</span>
            </div>

            <div className='contact'>
                Contact
            </div>
        </nav>
    );
};