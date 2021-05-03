import styled from "styled-components";
import efeitoCirculosSuperior from "../../../../assets/efeito-circulos-horizontal.svg";

export const TopContainer = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -30px;
  background: url(${efeitoCirculosSuperior}) no-repeat center;
  height: 291px;

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    width: 311px;
  }
  .select {
    position: relative;
    button {
      color: var(--azulprimaria);
      padding: 0 10px;
      font-weight: 700;
      background-color: var(--branco);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 240px;
      height: 45px;
      border-radius: 5px;
    }
    .list {
      font-family:'UniNeue';
      position: absolute;
      top: 55px;
      right:0;
      color: var(--azulprimaria);
      padding: 20px;
      font-weight: 600;
      background-color: var(--branco);
      width: 300px;
      border-radius: 5px;
      box-shadow: 0px 0px 63px rgba(0, 0, 0, 0.24);
      ul {
        list-style: none;
        li {
          padding: 3px;
          font-weight: 600;
          &:hover::before {
            content: "•";
            padding-right: 10px;
            margin-left: -14px;
            font-weight: 900;
          }
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .top {
    h1 {
      width: 90%;
    }
  }
`;
