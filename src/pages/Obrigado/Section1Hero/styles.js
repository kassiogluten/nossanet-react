import styled from "styled-components";
import banner1Img from "../../../assets/banner1-paravoceB.jpg";

export const Section1HeroContainer = styled.main`
  width: 100%;
  background: url(${banner1Img}) no-repeat center top;
  background-color: var(--azul);
  background-size: auto;
  color: var(--branco);
  @media (max-width: 1200px) {
    background-position: 67% top;
    background-size: cover;
    height: 500px;
  }
`;
export const Section1HeroContent = styled.div`
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1216px;
  margin: 0 auto;
  height: 700px;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    max-width: 469px;
    line-height: 110%;

    span {
      color: var(--verdesecundaria);
    }
  }
  h2 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 0.9rem;
    max-width: 384px;
    margin-top: 3rem;
  }
`;
