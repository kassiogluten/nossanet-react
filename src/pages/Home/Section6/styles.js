import styled from "styled-components";
import efeitoCirculosInferior from "../../../assets/efeito-circulos-horizontal-inferior.svg";

export const Section6Container = styled.section`
  display: flex;
  position: relative;
  background-color: var(--azul);
  padding: 0;
  width: 100%;
  color: var(--branco);

  @media (max-width: 700px) {
  }
`;

export const Section6Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 75px;
  transition: all 1s ease;
  //justify-content: space-between;
  align-items: center;
  background: url(${efeitoCirculosInferior}) no-repeat 100% top;
  background-size: contain;

  h1 {
    font-size: 2.25rem;
    font-weight: 800;

    &:nth-child(2) {
      color: var(--acessibilidade);
      margin-bottom: 75px;
    }
  }

  .faq {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-family: "Poppins";
    font-size: 0.85rem;
    width: 100%;
    font-weight: 400;
    color: var(--azulprimaria);

    button {
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      color: var(--azulprimaria);
      height: 55px;
      padding: 1rem;

      font-weight: 500;
      background-color: var(--branco);
      justify-content: space-between;
      border-radius: 5px;
    }
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      font-family: "Poppins";
      padding: 2rem;
      button {
        font-size: 1rem;
      }
    }
  }
`;
