import Display from "@/components/Display";
import Slider from "@/components/Slider";
import React from "react";
import styles from './page.module.css'

function page() {
  return (
    /**
     * Un meme aqui
     * Navegación:
     * Cerca
     * Ahora
     * Tendencias
     * Próximos eventos
     */
    <div className={styles.main}>
      <Slider>
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
        <Display />
      </Slider>
    </div>
    /**
     * Por presupuesto
     * Por zona
     * Por cantidad de personas
     * Por tipo de evento
     * Por orientación sexual
     * Por universidad
     * Por tipo de música
     * Por tipo de bebida
     * Por tipo de comida
     * Por reseñas
     * Para introvertidos/extrovertidos
     * Fotos de los usuarios
     */
  );
}

export default page;
