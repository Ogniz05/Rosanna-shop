"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const [openCol1, setOpenCol1] = useState(false);
  const [openCol2, setOpenCol2] = useState(false);
  const [openCol3, setOpenCol3] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* COLONNA 1 */}
        <div className={`${styles.column} ${openCol1 ? styles.open : ""}`}>
          <h3 onClick={() => setOpenCol1(!openCol1)}>Ti serve una mano?</h3>
          <ul>
            <li>
              <Link href="#">Assistenza clienti</Link>
            </li>
            <li>
              <Link href="#">Spedizioni e resi</Link>
            </li>
            <li>
              <Link href="#">Pagamenti</Link>
            </li>
          </ul>
        </div>

        {/* COLONNA 2 */}
        <div className={`${styles.column} ${openCol2 ? styles.open : ""}`}>
          <h3 onClick={() => setOpenCol2(!openCol2)}>Shop Rosa</h3>
          <ul>
            <li>
              <Link href="#">Chi siamo</Link>
            </li>
            <li>
              <Link href="#">Lavora con noi</Link>
            </li>
            <li>
              <Link href="#">Negozi</Link>
            </li>
          </ul>
        </div>

        {/* COLONNA 3 */}
        <div className={`${styles.column} ${openCol3 ? styles.open : ""}`}>
          <h3 onClick={() => setOpenCol3(!openCol3)}>Ti consigliamo</h3>
          <ul>
            <li>
              <Link href="#">Nuovi arrivi</Link>
            </li>
            <li>
              <Link href="#">Best seller</Link>
            </li>
            <li>
              <Link href="#">Saldi</Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className={styles.social}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className={styles.icon} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.legalLinks}>
          <Link href="#">Termini e condizioni</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
        <div className={styles.copyright}>
          <span>© {new Date().getFullYear()} Shop Rosa</span>
        </div>
      </div>
    </footer>
  );
}
