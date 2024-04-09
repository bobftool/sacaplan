import Display from "@/components/Display";
import Slider from "@/components/Slider";
import React from "react";
import styles from "./page.module.css";
import Section from "@/components/Section";
import Content from "@/components/Content";

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
      <Content>
        <Section title="📍 En tu zona">
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
        </Section>

        <Section title="🎵 Que pongan">
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
        </Section>

        <Section title="💸 Presupuesto de">
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
        </Section>
      </Content>
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
