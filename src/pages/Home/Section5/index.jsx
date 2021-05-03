import { Section5Container, Section5Content } from "./styles";
import { useState } from "react";

import { Top } from "./Top";

export default function Section5() {
  const cidades = [
    "Ipaba, MG",
    "Periquito, MG",
    "Naque, MG",
    "Perpétuo Socorro, MG",
    "Belo Oriente, MG",
    "Vale Verde, MG",
    "Boachá, MG",
  ];

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cidades[0]);

  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
  }

  return (
    <Section5Container>
      <Section5Content>
        <Top
          isSelectOpen={isSelectOpen}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cidades={cidades}
          toggleSelect={toggleSelect}
          setIsSelectOpen={setIsSelectOpen}
        />
        <div className="plano">
          <div className="box1">
            <p>Nossanetfibra</p>
            <h1>30 Mega</h1>
            <span>+20 mega bônus</span>
          </div>
          <div className="box2">
            <ul>
              <li>Fibra Óptica</li>
              <li>Instalação Grátis</li>
              <li>Suporte Técnico 24h</li>
              <li>Wi-Fi Grátis</li>
              <li>Download: 30Mbps</li>
              <li>Upload: 30Mbps</li>
            </ul>
          </div>
          <div className="box3">
            <div className="preco">
              <span>R$ </span>
              <span> 179</span>
              <span>,90</span>
              <span>por mês</span>
            </div>
            <button type="button">Quero esse</button>
          </div>
        </div>
        <div className="plano">
          <div className="box1">
            <p>Nossanetfibra</p>
            <h1>30 Mega</h1>
            <span>+20 mega bônus</span>
          </div>
          <div className="box2">
            <span>Incluso Qualifica</span>
            <ul>
              <li>Fibra Óptica</li>
              <li>Instalação Grátis</li>
              <li>Suporte Técnico 24h</li>
              <li>Wi-Fi Grátis</li>
              <li>Download: 30Mbps</li>
              <li>Upload: 30Mbps</li>
            </ul>
          </div>
          <div className="box3">
            <div className="preco">
              <span>R$ </span>
              <span> 79</span>
              <span>,90</span>
              <span>por mês</span>
            </div>
            <button type="button">Quero esse</button>
          </div>
        </div>
      </Section5Content>
    </Section5Container>
  );
}
