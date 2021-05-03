import styled from "styled-components";

import iconeQualificaImg from "../../../assets/icone-qualifica.png";

export const Section5Container = styled.section`
  position: relative;
  display: flex;
  background-color: var(--azul);
  padding: 0;
  width: 100%;
  color: var(--branco);

  @media (max-width: 700px) {
  }
`;

export const Section5Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  border: 1px solid red;

  .plano {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100;
    background-color: var(--branco);
    color: var(--azulprimaria);
    margin: 0 0.5rem 1.5rem;
    padding: 1rem;
    border-radius: 15px;

    .box1 {
      padding: 2rem 1rem;
      width: 20%;
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
      padding: 0.5rem 2rem;
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
        padding: 8px 3px;

        &::before {
          content: "";
          padding-left: 25px;
          width: 20px;
          height: 20px;
          background: url(${iconeQualificaImg}) no-repeat;
          background-size: contain;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 90px;
        margin: auto 0;
        justify-content: space-between;
        li {
          list-style: none;
          font-family: "Poppins";
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--azulprimaria);
          padding: 3px;
        }
      }
    }
    .box3 {
      display: flex;
      padding: 2rem 1rem;
      width: 36%;
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
        width: 165px;
        height: 50px;
        background-color: var(--acessibilidade);
        border-radius: 5px;
      }
    }
  }
`;