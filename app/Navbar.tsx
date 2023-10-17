'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { status, data: session } = useSession()

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <div className="mr-5">
          <Link href="/api/auth/signout" className="ml-3">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar