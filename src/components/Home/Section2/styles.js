import styled from "styled-components";

export const Section2Container = styled.section`
  background-color: var(--acessibilidade);
  padding: 0 0.75rem;
  width: 100%;
`;
export const Section2Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  max-width: 1216px;
  margin: 0 auto;
  height: 700px;
`;

export const Shorcut = styled.div`
  display: flex;
  color: var(--azulprimaria);
  margin-top: -3.45rem;

  .boxes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--branco);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    width: 8.75rem;
    height: 9.18rem;
    margin-left: 1.25rem;
    padding: 1.25rem;
    padding-right: 0.575rem;
    border-radius: 1rem;
    transition: transform 0.5s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: fit-content;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }
`;
