"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "../product.module.css";

export default function ProductPage() {
  const { id } = useParams();

  const product = {
    id,
    name: "Black T-shirt & Trouser",
    price: "€49.00",
    description:
      "Maglietta oversize in cotone organico con pantalone coordinato. Tessuto morbido e taglio rilassato per un look casual ma sofisticato.",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/prod1.jpg", "/images/prod2.jpg", "/images/prod3.jpg"],
  };

  return (
    <section className={styles.productPage}>
      {/* COLONNA SINISTRA */}
      <div className={styles.details}>
        <button className={styles.backButton} onClick={() => history.back()}>
          ← Indietro
        </button>

        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.price}>{product.price}</p>

        {/* Taglie */}
        <div className={styles.sizes}>
          <span>Taglia:</span>
          <div className={styles.sizeOptions}>
            {product.sizes.map((size) => (
              <button key={size}>{size}</button>
            ))}
          </div>
        </div>

        {/* Descrizione */}
        <div className={styles.description}>
          <h3>Descrizione</h3>
          <p>{product.description}</p>
        </div>

        {/* Bottone */}
        <div className={styles.actions}>
          <button className={styles.addToBag}>Aggiungi al carrello</button>
        </div>
      </div>

      {/* GALLERY DESTRA (orizzontale su desktop) */}
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.sideImages}>
          {product.images.slice(1).map((img, i) => (
            <div key={i} className={styles.sideImage}>
              <Image
                src={img}
                alt={`${product.name} ${i}`}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
