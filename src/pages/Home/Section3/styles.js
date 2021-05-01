import styled from "styled-components";
import iconeWifiImg from "../../../assets/icone-wifi.svg";

export const Section3Container = styled.section`
  //background: url(${iconeWifiImg}) no-repeat;
  position: relative;
  background-color: var(--azul);
  padding: 0 0.75rem;
  width: 100%;
  color: var(--branco);
  transition: background-position 1s ease;
  z-index: 0;
  overflow: visible;

  .wifi {
    position: absolute;
    top: -55px;
    left: calc(-960px + 50vw);
  }
`;

export const Section3Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  max-width: 950px;
  margin: 0 auto;
  padding: 10rem 1rem;

  h1 {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 150%;
    width: 488px;

    span {
      color: var(--acessibilidade);
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    margin-top: 60px;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem 1rem 1rem;
      width: 208px;
      height: 127px;
      background: linear-gradient(
        136.8deg,
        #111d6c 0%,
        rgba(8, 17, 80, 0) 100.77%
      );
      border-radius: 15px;

      p {
        font-family: "Poppins";
        font-size: 0.9rem;
        font-weight: 400;
      }

      img {
        width: fit-content;
      }
    }
  }
  @media (max-width: 700px) {
    h1 {
      width: 90%;
    }
    .cards {
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.2rem;
      .card {
        width: 141px;
        height: 145px;
      }
    }
    padding: 5rem 1rem;
  }
`;
