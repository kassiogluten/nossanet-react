import styled from "styled-components";
import box3Img from "../../../assets/box3.jpg";

export const Section4Container = styled.section`
  position: relative;
  display: flex;
  background-color: var(--acessibilidade);
  padding: 0;
  width: 100%;
  color: var(--branco);

  .circulos {
    position: absolute;
    top: 0;
    left: calc(-960px + 50vw);
  }

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Section4Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: flex-end;
  height: 480px;

  .box1 {
    width: 100%;
    max-width: 600px;
    align-self: center;
    justify-self: center;

    p {
      font-family: "Poppins";
      font-weight: 400;
      font-size: 0.9rem;
    }
    h1 {
      font-weight: 800;
      font-size: 2.25rem;
      width: 90%;
      margin: 10px 0 40px;
    }
    button {
      font-weight: 700;
      font-size: 1.125rem;
      position: relative;
      max-width: 90%;
    }
  }

  .box2 {
    background: url(${box3Img}) no-repeat center center;
    background-size: cover;
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    height: 317px;
    justify-content: center;

    .box1 {
      align-self: center;
      justify-self: center;
    }
    .box2 {
      height: 317px;
    }
  }
`;
