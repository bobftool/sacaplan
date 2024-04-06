import React from "react";
import styles from "../styles/display.module.css";

function Display() {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src="https://lh5.googleusercontent.com/p/AF1QipODDzbsM0ObNGrQmgyS-kb9POgGH6S7OUuxvRPw"
          alt=""
        />
      </div>

      <div className={styles.info_container}>
        <div className={styles.info_section}>
          <div className={styles.info_subsection}>
            <h2 className={styles.title}>Shine</h2>
            <p className={styles.description}>A 243 metros de distancia</p>
          </div>
        </div>
        <div className={styles.info_section}>
          <div className={styles.info_subsection}>
            <h3 className={styles.description}>Género principal</h3>
            <p className={styles.subtitle}>Reguetón</p>
          </div>
          <div className={styles.info_subsection}>
            <button className={styles.details_button}>
              Playlist del lugar
            </button>
          </div>
        </div>
        <div className={styles.info_section}>
          <div className={styles.info_subsection}>
            <h3 className={styles.description}>Presupuesto</h3>
            <p className={styles.subtitle}>$200 - $500</p>
          </div>
          <div className={styles.info_subsection}>
            <button className={styles.details_button}>Ver precios</button>
          </div>
        </div>
        <div className={styles.info_section}>
          <div className={styles.info_subsection}>
            <h3 className={styles.description}>Se pone bueno a las</h3>
            <p className={styles.subtitle}>11:00pm</p>
          </div>
        </div>
        <div className={styles.info_section}>
          <div className={styles.info_subsection}>
            <h3 className={styles.description}>Calificación general</h3>
            <p className={styles.subtitle}>8.9/10</p>
          </div>
          <div className={styles.info_subsection}>
            <button className={styles.details_button}>Más detalles</button>
          </div>
        </div>
      </div>
      <div className={styles.action_container}>
        <div className={styles.action_section}>
          <button className={styles.action_button}>Jalo</button>
        </div>
      </div>
    </div>
    /**
     * Playlist de ejemplo por cada lugar sugerido
     * LGBT friendly
     * Mejor hora para ir (se pone bueno a las 12)
     * Timepo de espera para entrar
     * Videos del lugar (tiktoks)
     * Buscador por canciones
     * Recompensas con puntos (te pagamos el cover / el uber de regreso)
     * Chat del evento
     * Stories en el lugar
     * Fotos de los usuarios
     * Conexión con shazam
     * Conexión con uber
     * Conexión con spotify
     * Conexión con google maps
     * Conexión con tiktok
     * Conexión con instagram
     * Hay desconecte?
     * Hay morrxs chidxs?
     * Gente que ha ido a este lugar también ha ido a...
     * Gente que ha ido a este lugar también ha escuchado...
     * Gente que ha ido a este lugar también ha comido...
     * Gente que ha ido a este lugar también ha bebido...
     * Gente que ha ido a este lugar también ha bailado...
     * Gente que ha ido a este lugar también ha cantado...
     * Gente que ha ido a este lugar también ha platicado...
     * Gente que ha ido a este lugar también ha jugado...
     * Género musical del lugar
     * Tipo de bebida del lugar
     * Tipo de comida del lugar
     *
     */
  );
}

export default Display;