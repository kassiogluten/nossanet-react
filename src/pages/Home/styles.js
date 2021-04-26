import styled from "styled-components";
import banner1Img from "../../assets/banner1-paravoce.jpg";

export const HomeContainer = styled.main`
  padding: 0 0.75rem;
  top: 100px;
  width: 100%;
  background: url(${banner1Img}) no-repeat center top;
  background-size: auto;
  @media (max-width: 1200px) {
    background-position: 25% top;
  }
`;
export const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1216px;
  margin: 0 auto;
  max-height: 700px;
  height: 120vw;
`;
