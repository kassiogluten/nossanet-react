import { TopContainer } from "./styles";
import iconeSelectImg from "../../../../assets/icone-select.svg";

export function Top({
  selectedCity,
  setSelectedCity,
  cidades,
  toggleSelect,
  isSelectOpen,
  setIsSelectOpen,
}) {
  return (
    <TopContainer>
      <h1>Vamos escolher um plano para você?</h1>
      <div className="select">
        <button type="button" onClick={toggleSelect}>
          <span>{selectedCity}</span>
          <img src={iconeSelectImg} alt="Selecione a cidade" />
        </button>
        {isSelectOpen && (
          <div className="list">
            <ul>
              {cidades.map((cidade, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedCity(cidade);
                    setIsSelectOpen(false);
                  }}
                >
                  {cidade}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </TopContainer>
  );
}
