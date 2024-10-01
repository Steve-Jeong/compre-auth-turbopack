"use client";
import Link from "next/link";
import React, { useState } from "react";
const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  return (
    <div className="navbar bg-blue-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleDropdown}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-50 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li onClick={closeDropdown}>
                <Link href="/">Homepage</Link>
              </li>
              <li onClick={closeDropdown}>
                <Link href="/features">Features</Link>
              </li>
              <li onClick={closeDropdown}>
                <Link href="/customers">Customers</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-end space-x-2">
        <Link href="/api/auth/signin" className="btn btn-ghost btn-circle">
          Login
        </Link>
        <Link href="/api/auth/signup" className="btn btn-ghost btn-circle">
          Signup
        </Link>
      </div>
    </div>
  );
};
export default Appbar;
