'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import classes from './navbar.module.css';
import person from '../../../public/person.jpg';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();

  const handleShowDropdown = () => setShowDropdown(true);
  const handleHideDropdown = () => setShowDropdown(false);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link href="/">
          <div className={classes.logo}>
            <Image
              src="/Native Cloud Logo_Vertical_Orange Black 1.png"
              alt="Native Cloud Logo"
              width={137}
              height={68}
              quality={100}
            />
          </div>
        </Link>
        <div className={classes.navLinks}>
          <div
            className={classes.dropdownContainer}
            onMouseEnter={handleShowDropdown}
            onMouseLeave={handleHideDropdown}
          >
            <Link href="/solutions">
              <span className={classes.dropdownToggle}>Solutions</span>
            </Link>
            {showDropdown && (
              <div className={classes.dropdownMenu}>
                <div className={classes.dropdownColumn}>
                  <Link href="/solutions">
                    <h3>Solutions</h3>
                  </Link>
                  <Link href="#">Azure Cloudify</Link><br /><br />
                  <Link href="#">Managed Services</Link><br /><br />
                  <Link href="#" className={classes.seeAll}>See all our solutions</Link>
                </div>
                <div className={classes.dropdownColumn}>
                  <h3>Data Lifecycle Management</h3>
                  <Link href="#">Data Lifecycle Management</Link>
                </div>
                <div className={classes.dropdownColumn}>
                  <h3>Cloud Native</h3>
                  <Link href="#">Software Development</Link>
                </div>
                <div className={classes.dropdownColumn}>
                  <h3>Services</h3>
                  <Link href="#">Cloud Migration</Link><br /><br />
                  <Link href="#">Application Modernization</Link><br /><br />
                  <Link href="#">DevOps</Link><br /><br />
                </div>
              </div>
            )}
          </div>
          <Link href="/workshops">Workshops</Link>
          <Link href="/knowledge-base">Knowledge Base</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact">Get in Touch</Link>
        </div>
        <div className={classes.extra}>
          <AiOutlineSearch className={classes.searchIcon} />
          <select className={classes.languageSelect}>
            <option value="en" style={{ backgroundImage: "url('/path-to-en-flag.png')" }}>EN</option>
            <option value="es" style={{ backgroundImage: "url('/path-to-es-flag.png')" }}>ES</option>
            <option value="fr" style={{ backgroundImage: "url('/path-to-fr-flag.png')" }}>FR</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <ul className={classes.right}>
          {session?.user ? (
            <div>
              <Image
                onClick={handleShowDropdown}
                src={person}
                width="45"
                height="45"
                alt="Profile Picture"
              />
              {showDropdown && (
                <div className={classes.profileDropdown}>
                  <AiOutlineClose
                    className={classes.closeIcon}
                    onClick={handleHideDropdown}
                  />
                  <button
                    onClick={() => {
                      signOut();
                      handleHideDropdown();
                    }}
                    className={classes.logout}
                  >
                    Logout
                  </button>
                  <Link
                    onClick={handleHideDropdown}
                    href="/create-blog"
                    className={classes.create}
                  >
                    Create
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={signIn} className={classes.login}>
                Log in
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
