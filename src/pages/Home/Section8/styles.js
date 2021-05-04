import styled from "styled-components";

export const Section8Container = styled.section`
  position: relative;
  display: flex;
  background-color: var(--acessibilidade);
  padding: 0;
  width: 100%;
  color: var(--branco);

  .efeito {
    position: absolute;
    top: 70px;
    left: calc(-650px + 50vw);
  }

  .divider {
    position: absolute;
    //top: -50px;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    .divider {
      transform: scale(0.7) translate(-75%, -75%);
    }
  }
`;

export const Section8Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 80px auto;
  width: 1200px;

  .box1 {
    width: 488px;
    height: 747px;
    background: #ffffff;
    box-shadow: 0px 0px 118px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 2rem;

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
    .box2A {
      margin: 30px 0;
      padding: 40px 48px;
      width: 547px;
      height: 284px;
      background: linear-gradient(
        104.94deg,
        rgba(85, 188, 81, 0.42) 0.37%,
        #64cf60 115.02%
      );
      border-radius: 15px;

      p {
        font-family: "Poppins";
        font-weight: 500;
        font-size: 0.9rem;
      }

      h1 {
        font-size: 2.25rem;
        font-weight: 800;
        width: 90%;
      }
      button {
        font-weight: 600;
        font-size: 1rem;
        margin-top: 2rem;
      }
    }
    li {
      list-style: none;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 0.9rem;
      padding: 12px;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;

    .box1 {
      align-self: center;
      justify-self: center;
      width: 90%;
      margin: 5rem;
    }
    .box2 {
      width: 90%;
      height: 100%;

      .box2A {
        width: 100%;
        padding: 2rem 1.75rem;
        height: 100%;
        h1,
        button {
          width: 100%;
        }
        h1 {
          font-size: 1.8rem;
        }
      }
    }
  }
`;
