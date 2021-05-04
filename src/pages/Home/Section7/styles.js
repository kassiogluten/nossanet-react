import styled from "styled-components";
import circuloVerdeImg from "../../../assets/circulo-verde.svg";

export const Section7Container = styled.section`
  display: flex;
  position: relative;
  background-color: var(--azul);
  padding: 0;
  width: 100%;
  color: var(--branco);

  @media (max-width: 700px) {
  }
`;

export const Section7Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 1rem;

  .box1 {
    h1 {
      font-size: 2.25rem;
      font-weight: 800;
      width: 80%;
      margin-bottom: 2rem;
    }
    p {
      display: flex;
      align-items: center;
      padding: 1rem;
      width: 384px;
      height: 65px;
      margin: 10px;

      font-family: "Poppins";
      font-size: 0.85rem;
      font-weight: 400;

      background: linear-gradient(
        160.8deg,
        #111d6c 0%,
        rgba(8, 17, 80, 0) 100.77%
      );
      border-radius: 15px;
    }

    span {
      font-family: "Poppins";
      font-size: 0.85rem;
      font-weight: 400;
      padding: 2rem;
      display: inline;
    }
    img {
      display: inline;
    }
  }

  .box2 {
    background: url(${circuloVerdeImg}) no-repeat center;
    background-size: auto;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1rem;
    .box1 {
      h1 {
        width: 100%;
      }
      p {
        width: 100%;
      }
      span,
      img {
        width: 50%;
        padding: 0;
        margin: 2rem 0;
      }
    }
    .box2 {
      background: url(${circuloVerdeImg}) no-repeat center;
      background-size: 80%;
    }
  }
`;
