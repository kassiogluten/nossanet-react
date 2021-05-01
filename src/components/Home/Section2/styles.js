import styled from "styled-components";
import efeitoPatternImg from "../../../assets/efeito-pattern.svg";
import poligonoBrancoImg from "../../../assets/poligono-branco.svg";
import { motion } from "framer-motion";

export const Section2Container = styled.section`
  background: url(${efeitoPatternImg}) no-repeat;
  background-color: var(--acessibilidade);
  padding: 0 0.75rem;
  width: 100%;
  background-position: right 20% top 40%;
  transition: background-position 1s ease;

  @media (max-width: 1500px) {
    background-position: right 5% top 40%;
  }
`;

export const Section2Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  max-width: 1216px;
  margin: 0 auto;
`;

export const Shorcut = styled(motion.div)`
  display: flex;
  color: var(--azulprimaria);
  margin-top: -3.45rem;

  .boxes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--branco);

    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    width: 8.75rem;
    height: 9.18rem;
    margin-left: 1.25rem;
    padding: 1.25rem;
    padding-right: 0.575rem;
    border-radius: 1rem;
    transition: transform 0.5s ease, box-shadow 0.5s;

    &:hover {
      transform: translateY(-5px);
      -webkit-box-shadow: 0px 10px 20px 5px rgba(75, 75, 75, 0.1);
      -moz-box-shadow: 0px 10px 20px 5px rgba(75, 75, 75, 0.1);
      box-shadow: 0px 10px 20px 5px rgba(75, 75, 75, 0.1);
    }

    img {
      width: fit-content;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const Content = styled(motion.div)`
  color: var(--branco);
  display: flex;
  justify-content: space-evenly;
  align-self: start;
  margin-top: 63px;
  width: 100%;

  .box1 {
    margin-top: 30px;
    padding: 40px 48px;
    width: 547px;
    height: 284px;
    background: linear-gradient(
      104.94deg,
      rgba(85, 188, 81, 0.42) 0.37%,
      #64cf60 115.02%
    );
    border-radius: 15px;

    ul {
      display: flex;
      font-family: "Poppins";
      font-size: 0.9rem;
      font-weight: 400;
      list-style:none;
      margin-bottom:1rem;

      li + li {
        margin-left: 28px;
        padding-left: 5px;
        list-style-image: url(${poligonoBrancoImg});
        
        }
      }
    }
    h1 {
      font-size: 3rem;
      font-weight: 800;
    }
    button{
      font-weight: 700;
      font-size: 1.125rem;
      position: relative;
      bottom: -40px;
    }
  }

  .box2 {
    position: relative;
    bottom: -64px;
    img {
      position: relative;

      mix-blend-mode: normal;
      filter: drop-shadow(0px 0px 118px rgba(0, 0, 0, 0.15));
      z-index: 1;
    }
  
`;
