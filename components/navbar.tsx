
import React from 'react'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile } from '@clerk/nextjs'




export default async function Navbar() {
    const { userId } = await auth()
    console.log("userID", userId)
    return (
        <nav className="bg-gradient-to-br from-indigo-500 to-cyan-500 p-4">
            <div className="flex justify-between">
                <Link href="/">
                    <span className="text-white font-bold text-xl">ReAmplify</span>
                </Link>
                <div>
                    <Link href="/features">
                        <span className="text-white mr-4">Features</span>
                    </Link>
                    <Link href="/pricing">
                        <span className="text-white mr-4">Pricing</span>
                    </Link>
                    <Link href="/about">
                        <span className="text-white mr-4">About</span>
                    </Link>
                    <Link href="/contact">
                        <span className="text-white mr-4">Contact</span>
                    </Link>
                </div>
                <div>
                    <SignedIn>
                        <>
                            <Link href="/dashboard">
                                <span className="text-white mr-4">Dashboard</span>
                            </Link>
                            <UserButton />
                        </>
                    </SignedIn>
                    <SignedOut><Link href="/sign-in">
                        <span className="text-white mr-4"><SignInButton /></span>
                    </Link></SignedOut>

                </div>
            </div>
        </nav>
    )
}
