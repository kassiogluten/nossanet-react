import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  position: absolute;
  padding: 0 0.75rem;
  height: 190px;
  left: 0px;
  top: 0px;
  width: 100%;
  background: linear-gradient(180deg, #081150 0.52%, rgba(15, 24, 88, 0) 100%);
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1216px;
  margin: 0 auto;
  height: 100px;

  div {
    display: flex;

    button {
      color: var(--branco);
      font-size: 1.15rem;
      font-weight: 700;
      background-color: var(--acessibilidade);
      width: 169px;
      height: 44px;
      margin-left: 25px;

      @media (max-width: 700px) {
        display: none;
      }

      &:hover {
        background-color: #51a84e;
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;
    color: var(--branco);
    gap: 0.5rem;

    li {
      font-size: 1.1rem;
      font-weight: 700;
      padding: 0.5rem;
      list-style: none;
      transition: border 500ms ease;

      @media (max-width: 700px) {
        display: none;
      }
    }
    a {
      &:hover {
        border-bottom-width: 3px;
        border-bottom-color: var(--acessibilidade);
      }
    }

    svg {
      display: none;
    }

    @media (max-width: 700px) {
      svg {
        display: block;
      }
    }
  }
`;

export const MobileMenu = styled(motion.nav)`
  @media (max-width: 700px) {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    //background-color: var(--acessibilidade);
    background-color: #081150cc;
    backdrop-filter: blur(10px);
    padding: 2rem 1rem;
    color: var(--branco);

    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 50px 0;

        li {
          font-size: 1.1rem;
          font-weight: 700;
          padding: 0.5rem;
          list-style: none;
          transition: border 500ms ease;
        }
        a {
          &:hover {
            border-bottom-width: 3px;
            border-bottom-color: var(--acessibilidade);
          }
        }
      }
      a {
        button {
          color: var(--branco);
          font-size: 1.15rem;
          font-weight: 700;
          background-color: var(--acessibilidade);
          width: 169px;
          height: 44px;

          &:hover {
            background-color: #51a84e;
          }
        }
      }
    }
  }

  .atalhos {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: var(--azul);
    padding: 50px 0;
    overflow-y: auto;
    .boxes {
      display: flex;
      background-color: var(--branco);
      font-family: "Poppins", sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      width: 120px;
      height: 120px;
      margin: 0.5rem;
      padding: 1rem;
      border-radius: 1rem;
      align-items: flex-start;
      justify-content: space-between;

      img {
        width: 50%;
      }
    }
  }
`;
