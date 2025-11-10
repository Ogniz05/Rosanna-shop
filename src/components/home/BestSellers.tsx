"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BestSellers.module.css";

const products = [
  { id: 1, name: "Blazer Oversize", price: "€59.99", image: "/images/prod1.jpg" },
  { id: 2, name: "Abito in lino", price: "€49.99", image: "/images/prod2.jpg" },
  { id: 3, name: "Pantaloni Wide Fit", price: "€39.99", image: "/images/prod3.jpg" },
  { id: 4, name: "Camicia in raso", price: "€29.99", image: "/images/prod4.jpg" },
];

export default function BestSellers() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.bestSellers} ${visible ? styles.visible : ""}`}
    >
      <h2>I più venduti</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={styles.image}
              />
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link href="/shop" className={styles.button}>
              Scopri
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ Bottone “Sfoglia il catalogo” sotto le card */}
      <div className={styles.catalogButtonWrapper}>
        <Link href="/shop" className={styles.catalogButton}>
          Sfoglia il catalogo
        </Link>
      </div>
    </section>
  );
}
