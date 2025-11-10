"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./shop.module.css";

/* ---- DATI MOCK ---- */
const products = [
  { id: 1, name: "Blazer Oversize", price: "€59.99", image: "/images/prod1.jpg" },
  { id: 2, name: "Abito in lino", price: "€49.99", image: "/images/prod2.jpg" },
  { id: 3, name: "Pantaloni Wide Fit", price: "€39.99", image: "/images/prod3.jpg" },
  { id: 4, name: "Camicia in raso", price: "€29.99", image: "/images/prod4.jpg" },
  { id: 5, name: "Gonna Midi", price: "€34.99", image: "/images/prod5.jpg" },
  { id: 6, name: "Top in Satin", price: "€19.99", image: "/images/prod6.jpg" },
  { id: 7, name: "Cardigan in maglia", price: "€44.99", image: "/images/prod7.jpg" },
  { id: 8, name: "Cappotto Lungo", price: "€89.99", image: "/images/prod8.jpg" },
];

/* ---- DROPDOWN CUSTOM ---- */
type Option = { label: string; value: string };

function CustomSelect({
  label,
  options,
  className,
}: {
  label: string;
  options: Option[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div ref={ref} className={`${styles.customSelect} ${className || ""}`}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span className={styles.chevron} aria-hidden>⌄</span>
      </button>

      <ul className={`${styles.menu} ${open ? styles.open : ""}`} role="listbox">
        {options.map((opt) => (
          <li key={opt.value} className={styles.option} role="option" tabIndex={0}
              onClick={() => setOpen(false)} onKeyDown={(e) => e.key === "Enter" && setOpen(false)}>
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ShopPage() {
  const filterOptions: Option[] = [
    { label: "Tutti", value: "all" },
    { label: "Abiti", value: "abiti" },
    { label: "Top", value: "top" },
    { label: "Pantaloni", value: "pantaloni" },
    { label: "Accessori", value: "accessori" },
  ];

  const sortOptions: Option[] = [
    { label: "Popolarità", value: "pop" },
    { label: "Prezzo crescente", value: "price_asc" },
    { label: "Prezzo decrescente", value: "price_desc" },
    { label: "Novità", value: "new" },
  ];

  return (
    <section className={styles.shop}>
      <h1>Shop</h1>

      {/* BAR: desktop = bottoni; mobile/tablet = dropdown custom */}
      <div className={styles.filtersBar}>
        {/* Desktop */}
        <div className={styles.filtersDesktop}>
          <button className={styles.active}>Tutti</button>
          <button>Abiti</button>
          <button>Top</button>
          <button>Pantaloni</button>
          <button>Accessori</button>
        </div>
        <div className={styles.sortDesktop}>
          <span>Ordina per:</span>
          <button className={styles.active}>Popolarità</button>
          <button>Prezzo ↑</button>
          <button>Prezzo ↓</button>
          <button>Novità</button>
        </div>

        {/* Mobile / Tablet */}
        <div className={styles.dropdownRow}>
          <CustomSelect label="Filtra per" options={filterOptions} className={styles.left} />
          <CustomSelect label="Ordina per" options={sortOptions} className={styles.right} />
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={p.image}
                alt={p.name}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
