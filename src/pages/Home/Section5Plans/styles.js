import styled from "styled-components";

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
  transition: all 1s ease;
`;
