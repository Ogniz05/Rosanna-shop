"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.container}>
        {/* HAMBURGER (mobile) */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        </button>

        {/* LINK DESKTOP */}
        <ul className={styles.links}>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.active : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={pathname === "/shop" ? styles.active : undefined}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? styles.active : undefined}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* AZIONI A DESTRA */}
        <div className={styles.actions}>
          <button className={styles.actionButton}>Accedi</button>
          <button className={styles.actionButton}>🛒</button>
        </div>
      </nav>

      {/* MENU MOBILE OVERLAY */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
        </ul>

        <button className={styles.closeButton} onClick={closeMenu}>
          ✕
        </button>
      </div>
    </header>
  );
}
