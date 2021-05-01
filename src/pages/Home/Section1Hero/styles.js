import styled from "styled-components";
import banner1Img from "../../../assets/banner1-paravoceB.jpg";

export const Section1HeroContainer = styled.main`
  padding: 0 0.75rem;
  width: 100%;
  background: url(${banner1Img}) no-repeat center top;
  background-size: auto;
  color: var(--branco);
  @media (max-width: 1200px) {
    background-position: center top;
    background-size: cover;
  }
`;
export const Section1HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 1216px;
  margin: 0 auto;
  height: 700px;

  @media (max-width: 700px) {
    height: 600px;
    justify-content: flex-end;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    width: 469px;
    margin-top: 210px;
    line-height: 110%;

    @media (max-width: 700px) {
      width: 90vw;
      font-size: 2.5rem;
      // margin-top: 175px;
    }

    span {
      color: var(--verdesecundaria);
    }
  }
  button {
    font-size: 1.125rem;
    margin-top: 100px;
    font-weight: 700;
    max-width: 90%;

    @media (max-width: 700px) {
      margin: 40px 0;
    }
  }
`;
