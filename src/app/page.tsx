import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import BestSellers from "@/components/home/BestSellers";

export default function HomePage() {
  return (
    <main className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/hero.jpg"
            alt="Shop Rosa - Nuova Collezione"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.overlay}></div>
        </div>

        <div className={styles.heroText}>
          <h1>Shop Rosa</h1>
          <p>Nuova Collezione 2025</p>
          <Link href="/shop" className={styles.button}>
            Scopri ora
          </Link>
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <BestSellers />
    </main>
  );
}
