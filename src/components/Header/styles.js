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
      color:var(--branco);
      font-size: 1.15rem;
      font-weight: 600;
      background-color: var(--acessibilidade);
      width:169px;
      height:44px;
      margin-left:25px;

      @media (max-width: 700px) {
        display: none;
      }

      &:hover {
        background-color: #51A84E;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    color: var(--branco);

    li {
      font-size: 1.1rem;
      font-weight: 600;
      padding: 0 0.75rem;
      list-style: none;

      @media (max-width: 700px) {
        display: none;
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
