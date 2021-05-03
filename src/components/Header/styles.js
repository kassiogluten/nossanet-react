import styled from "styled-components";

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
      margin-left: 0.5rem;
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
