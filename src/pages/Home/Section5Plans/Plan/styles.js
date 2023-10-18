import styled from "styled-components";
//import { AnimatePresence } from "framer-motion";

import iconeQualificaImg from "../../../../assets/icone-qualifica.png";
import iconeDeezerImg from "../../../../assets/icone-deezer.webp";
import poligonoVerdeImg from "../../../../assets/poligono-verde.svg";

export const PlanDiv = styled.section`
  .plano {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100;
    background-color: var(--branco);
    color: var(--azulprimaria);
    margin: 0 0.5rem 1.5rem;
    padding: 1rem;
    border-radius: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      border: 5px solid ${"var(--acessibilidade)"};
      &:before {
        content: "Mais popular";
        transform: rotate(-90deg);
        position: absolute;
        top: 40%;
        left: -68px;
        color: white;
        background: ${"var(--acessibilidade)"};
        padding: 7px;
        border-radius: 5px;
        font-size: 0.9rem;
        font-weight: 800;
      }
    }

    .box1 {
      padding: 2rem 0.8rem;
      width: 22%;
      p {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--acessibilidade);
      }
      h1 {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--azulprimaria);
      }
      span {
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--azulprimaria);
      }
    }

    .box2 {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      flex-grow: 1;
      padding: 0.5rem 1.5rem;
      border-left-width: 2px;
      border-left-color: #e6e6e6;
      border-right-width: 2px;
      border-right-color: #e6e6e6;

      span {
        display: block;
        border-bottom-width: 2px;
        border-bottom-color: #e6e6e6;
        font-family: "Poppins";
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--azulprimaria);
        padding: 10px 3px;
        qualifica {
          &::before {
            content: "";
            padding-left: 25px;
            width: 20px;
            height: 20px;
            background: url(${iconeQualificaImg}) no-repeat;
            background-size: contain;
          }
        }
        deezer {
          &::before {
            content: "";
            padding-left: 25px;
            width: 20px;
            height: 20px;
            background: url(${iconeDeezerImg}) no-repeat;
            background-size: contain;
          }
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 90px;
        margin-top: 10px;
        justify-content: space-between;
        li {
          list-style: none;
          font-family: "Poppins";
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--azulprimaria);
          padding: 3px;
          margin-left: 8px;
          padding-left: 0;
          list-style-image: url(${poligonoVerdeImg});
        }
      }
    }
    .box3 {
      display: flex;
      padding: 2rem 1rem;
      width: 40%;
      justify-content: space-between;

      .preco {
        display: flex;
        align-items: flex-start;
        font-weight: 700;

        span:nth-child(1) {
          font-size: 1.2rem;
        }
        span:nth-child(2) {
          font-size: 3.75rem;
          font-weight: 900;
          color: var(--acessibilidade);
          line-height: 100%;
          margin-left: 5px;
        }
        span:nth-child(3) {
          font-size: 1.7rem;
          font-weight: 900;
          color: var(--acessibilidade);
        }
        span:nth-child(4) {
          font-size: 0.9rem;
          align-self: flex-end;
          margin-left: -35px;
          margin-bottom: 7px;
        }
      }
      button {
        color: var(--branco);
        font-size: 0.9rem;
        font-weight: 700;
        width: 165px;
        height: 50px;
        background-color: var(--acessibilidade);
        border-radius: 5px;
        transition: background-color 300ms ease;

        &:hover {
          background-color: #51a84e;
        }
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      margin: 1rem;
      &:nth-child(2) {
        border: 5px solid ${"var(--acessibilidade)"};
        margin-top: 50px;
        &:before {
          content: "Mais popular";
          transform: rotate(0deg);
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .box1,
      .box2,
      .box3 {
        width: 100%;
        display: block;
        text-align: center;
        border-width: 0;
        padding: 1rem;
      }
      .box1 {
      }
      .box2 {
        border-top-width: 2px;
        border-top-color: #e6e6e6;
        border-bottom-width: 2px;
        border-bottom-color: #e6e6e6;
        text-align: left;
        padding: 1.5rem 0.5rem;

        span {
          border: none;
          text-align: center;
          margin-bottom: 1rem;
        }
      }
      .box3 {
        .preco {
          justify-content: center;
          padding: 2rem;
        }
      }
    }
  }
`;
