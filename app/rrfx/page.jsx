"use client";
import "./styles.css";
import React, { Component } from "react";

class HomeChat extends Component {
  componentDidMount() {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "RRFX.png";
    document.title = "RRFX PROJECT";
  }
  render() {
    return (
      <div className="main-container">
        <div className="navbar-container">
          <h2>RRFX PROJECT</h2>
          <hr />
          <div className="navbar-links">
            <a href="#discord">Discord</a>
            <a href="#about">About</a>
            <a href="#disclaimer">Disclaimer</a>
          </div>
          <hr />
        </div>
        <div className="discord-container" id="discord">
          <div className="background-discord"></div>
          <p className="discord-title">Diario de un trader.</p>
          <p className="discord-description">
            En este servidor de Discord encontrarás un documento de todos mis
            trades con sus resultados, análisis y razones. También podrás
            hacerme preguntas e incluso conocer y hablar con la gente que se irá
            sumando a esta comunidad de RRFX.
          </p>
          <a
            href="https://discord.gg/bjZuKAZN9M"
            target="_blank"
            className="discord-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.5"
              height="22.5"
              fill="currentColor"
              className="bi bi-discord"
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
            </svg>
            ACCEDER AL DISCORD
          </a>
          <p className="discord-subtitle">
            *No tengo nada para venderte allí dentro.
          </p>
        </div>
        <hr />
        <div id="about" className="about">
          <p>
            <b>RRFX PROJECT</b> es un documento donde muestro todo mi proceso y
            día a día en mi camino como trader.
          </p>
          <p>
            Llevo en los mercados desde el 2018, pasando por todo tipo de
            situaciones que se dan a un trader, como lo fue la frustración,
            incertidumbre, duda, miedo, pérdidas y muchas otras que nacen en
            consecuencia de las mencionadas.
          </p>
          <p>
            Actualmente trabajo como ingeniero de software, no necesito venderte
            nada para poder vivir, y si en algún momento decido hacerlo, será
            solo cuando haya construido aquello que quiero. Este solo es un
            documento de mi side project mientras hago todo lo demás en mi vida.
            Entonces, para los entendidos, un proyecto opensource, pero de
            trading.
          </p>
          <p>
            Pero esto no va de mí, va de ustedes y del Joaco del pasado que le
            hubiese gustado tener a alguien que le diera ayuda sincera, sin
            interés y mostrándole la verdad y realidad del proceso sobre todo lo
            demás. Puedes seguir mas a detalle mi proceso en mi canal de{" "}
            <a
              href="https://www.youtube.com/channel/UChepHxgZmukOteW-6c796wQ?sub_confirmation=1"
              target="_black"
            >
              {" "}
              YouTube
            </a>
            .
          </p>
          <p>
            <b>NO TENGO NADA PARA VENDERTE.</b>
          </p>
          <p>
            Con cariño ❤️ <a href="/">Joaquín</a>
          </p>
        </div>
        <hr />
        <div className="disclaimer" id="disclaimer">
          <p>
            DISCLAIMER DESCARGO DE RESPONSABILIDAD. Este proyecto, RRFX PROJECT,
            tiene fines educativos y descriptivos únicamente. La información
            proporcionada no constituye asesoramiento financiero ni
            recomendaciones de inversión. Cada individuo es responsable de sus
            propias decisiones financieras, y se recomienda realizar una
            investigación exhaustiva antes de tomar cualquier acción. El
            contenido de este documento refleja la experiencia personal del
            autor como trader, pero no garantiza resultados futuros. El mercado
            financiero está sujeto a riesgos, y el rendimiento pasado no
            garantiza el éxito futuro. El autor no se hace responsable de las
            consecuencias financieras o de cualquier otra índole que puedan
            surgir como resultado de seguir o interpretar la información
            proporcionada en este documento. Se insta a los usuarios a buscar
            asesoramiento financiero profesional antes de tomar decisiones
            basadas en la información presentada. Este proyecto no tiene la
            intención de promover productos o servicios financieros, ni se
            garantiza la precisión o exhaustividad de la información
            proporcionada. Al acceder a este contenido, aceptas que el autor no
            asume responsabilidad alguna por las decisiones que tomes con
            respecto a tus actividades financieras.
          </p>
        </div>
      </div>
    );
  }
}

export default HomeChat;
