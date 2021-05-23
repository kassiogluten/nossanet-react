import { TopContainer } from "./styles";
import iconeSelectImg from "../../../../assets/icone-select.svg";

export function Top({
  city,
  cidades,
  toggleSelect,
  isSelectOpen,
  setIsSelectOpen,
  setCity
}) {
  return (
    <TopContainer>
      <h1>Vamos escolher um plano para você?</h1>
      <div className="select">
        <button type="button" onClick={toggleSelect}>
          <span>{city}</span>
          <img src={iconeSelectImg} alt="Selecione a cidade" />
        </button>
        {isSelectOpen && (
          <div className="list">
            <ul>
              {cidades.map((cidade, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setCity(cidade);
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
