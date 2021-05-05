import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: block;
  background-color: var(--azul);
  .circulos {
    position: absolute;
    top: 0;
    left: calc(-960px + 50vw);
    opacity: 0.8;
    //left: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  //padding-top: 90px;

  .logo {
    display: flex;
    width: 40%;
    justify-content: start;
    align-items: center;
    padding: 0 0 100px 50px;
  }
  .links {
    padding: 80px 1rem 20px;
    display: flex;
    width: 60%;
    flex-wrap: wrap;

    h3 {
      font-size: 1.1rem;
      font-weight: 700;
    }

    h2 {
      font-family: "UniNeue";
      font-size: 1.5rem;
      font-weight: 800;
      margin-bottom: 7px;
    }
    .line {
      height: 3px;
      width: 94px;
      margin: 10px 0 20px;
      background-color: var(--acessibilidade);
    }

    button {
      background: var(--acessibilidade);
      margin: 10px 10px 0 0;
      svg {
        width: 25px;
        height: 25px;
      }
    }

    a:hover {
      text-decoration: underline;
    }

    a,
    span,
    p {
      font-family: "Poppins";
      font-weight: 400;
      font-size: 0.9rem;
      padding: 2px 0;
    }
    svg {
      display: inline;
    }

    .col1,
    .col2,
    .col3 {
      flex: 1;
    }
    .col4 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-top: 1px solid #f1f1f144;
      margin-top: 80px;
      padding: 20px;
      a {
        font-size: 0.8rem;
        svg {
          font-size: 1.3rem;
          margin: 0 5px;
        }
      }
    }

    a {
      display: block;
    }
  }
  @media (max-width: 700px) {
    .logo {
      display: none;
    }
    .links {
      width: 100%;
      .col1,
      .col2 {
        width: 50%;
        flex: none;
      }
      .col3 {
        margin-top: 50px;
        display: block;
        position: relative;
        .tel {
          position: absolute;
          right: 10px;
          top: 50%;
          @media (max-width: 330px) {
            position: initial;
          }
        }
      }
      .col4 {
        flex-direction: column;
        text-align: center;
      }
    }
  }
`;
