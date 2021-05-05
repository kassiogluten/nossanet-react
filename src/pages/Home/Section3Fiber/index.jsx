import { Section3Container, Section3Content } from "./styles";
import iconeDownloadImg from "../../../assets/icone-download.svg";
import iconeStreamingImg from "../../../assets/icone-play.svg";
import iconeConexaoImg from "../../../assets/icone-conexao.svg";
import iconeLatenciaImg from "../../../assets/icone-latencia.png";
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
            <img src={iconeStreamingImg} alt="Streaming" />
            <p>Streaming em alta qualidade sem travar</p>
          </div>
          <div className="card">
            <img src={iconeConexaoImg} alt="Conexão" />
            <p>Sem interrupções com conexão estável </p>
          </div>
          <div className="card">
            <img src={iconeLatenciaImg} alt="" />
            <p>Jogue online com baixa latência</p>
          </div>
        </div>
      </Section3Content>
    </Section3Container>
  );
}
