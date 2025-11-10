"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Attiva lo stato "scrolled" solo dopo un certo punto
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          {/* HAMBURGER */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Apri menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          {/* LINK DESKTOP */}
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>

          {/* AZIONI DESTRA */}
          <div className={styles.actions}>
            <button className={styles.actionButton}>Accedi</button>
            <button className={styles.actionButton}>🛍️</button>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
      >
        <ul>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        </ul>

        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
          aria-label="Chiudi menu"
        >
          ✕
        </button>
      </div>
    </>
  );
}
