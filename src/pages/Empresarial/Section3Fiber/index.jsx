import { Section3Container, Section3Content } from "./styles";
import iconeDownloadImg from "../../../assets/icone-download.svg";
import iconeEquipeImg from "../../../assets/icone-equipe.svg";
import iconeConexaoImg from "../../../assets/icone-conexao.svg";
import iconeBurocraciaImg from "../../../assets/icone-burocracia.svg";
import iconeWifiImg from "../../../assets/icone-wifi.svg";

export default function Section3() {
  return (
    <Section3Container>
      <div className="wifi">
        <img src={iconeWifiImg} alt="Wifi" />
      </div>
      <Section3Content>
        <h1>
          Aproveite o poder da infraestrutura da <span>fibra óptica.</span>
        </h1>
        <div className="cards">
          <div className="card">
            <img src={iconeDownloadImg} alt="Download" />
            <p>Baixe arquivos em ultravelocidade</p>
          </div>
          <div className="card">
            <img src={iconeEquipeImg} alt="Streaming" />
            <p>Alta velocidade para todos da equipe</p>
          </div>
          <div className="card">
            <img src={iconeConexaoImg} alt="Conexão" />
            <p>Sem interrupções com conexão estável </p>
          </div>
          <div className="card">
            <img src={iconeBurocraciaImg} alt="" />
            <p>Sem burocracia. Evite perda de tempo</p>
          </div>
        </div>
      </Section3Content>
    </Section3Container>
  );
}
