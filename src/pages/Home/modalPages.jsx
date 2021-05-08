import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { ModalBody } from "@chakra-ui/modal";
import { Radio, RadioGroup } from "@chakra-ui/radio";

import { cidades } from "../../components/cities";
import { planos } from "../../components/planos";

import iconeControle from "../../assets/calculator/icone-controle.svg";
import iconeDesktop from "../../assets/calculator/icone-desktop.svg";
import iconeEstuda from "../../assets/calculator/icone-estuda.svg";
import iconeMarker from "../../assets/calculator/icone-marker.svg";
import iconeProfile from "../../assets/calculator/icone-profile.svg";
import iconeResponsive from "../../assets/calculator/icone-responsive.svg";
import iconeVideo from "../../assets/calculator/icone-video.svg";

import "./modalPages.css";
import { FiArrowRight } from "react-icons/fi";

export function Pages({
  setPag,
  pag,
  setCity,
  city,
  myPlan,
  setMyPlan,
  pessoas,
  setPessoas,
  jogaOnline,
  setJogaOnline,
  usaTrabalho,
  setUsaTrabalho,
  dispositivos,
  setDispositivos,
  streaming,
  setStreaming,
  estudar,
  setEstudar,
}) {
  const pontuacao =
    parseInt(pessoas) +
    parseInt(jogaOnline) +
    parseInt(usaTrabalho) +
    parseInt(dispositivos) +
    parseInt(streaming) +
    parseInt(estudar);

  function Pag1() {
    return (
      <>
        <ModalBody>
          <img
            width="20px"
            height="20px"
            src={iconeMarker}
            alt="Qual sua cidade ?"
          />
          <h3>Qual sua cidade ?</h3>
          <RadioGroup defaultValue={city} onChange={setCity} value={city}>
            {cidades.map((cidade) => (
              <Radio key={cidade} value={cidade}>
                {cidade}
              </Radio>
            ))}
          </RadioGroup>
          <img
            width="20px"
            height="20px"
            src={iconeProfile}
            alt="Quantas pessoas moram na casa ?"
          />
          <h3>Quantas pessoas moram na casa ?</h3>
          <RadioGroup
            defaultValue={pessoas}
            onChange={setPessoas}
            value={pessoas}
          >
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
            <Radio value="5">5</Radio>
            <Radio value="6">6 ou +</Radio>
          </RadioGroup>
          <img
            width="20px"
            height="20px"
            src={iconeControle}
            alt="Alguém tem o hábito de jogar online?"
          />
          <h3>Alguém tem o hábito de jogar online?</h3>
          <RadioGroup
            defaultValue={jogaOnline}
            onChange={setJogaOnline}
            value={jogaOnline}
          >
            <HStack>
              <Radio value={"1"}>Sim</Radio>
              <Radio value={"0"}>Não</Radio>
            </HStack>
          </RadioGroup>
          <img
            width="20px"
            height="20px"
            src={iconeDesktop}
            alt="Alguém usa a internet para trabalhar?"
          />
          <h3>Alguém usa a internet para trabalhar?</h3>
          <RadioGroup
            defaultValue={usaTrabalho}
            onChange={setUsaTrabalho}
            value={usaTrabalho}
          >
            <HStack>
              <Radio value={"1"}>Sim</Radio>
              <Radio value={"0"}>Não</Radio>
            </HStack>
          </RadioGroup>
        </ModalBody>
      </>
    );
  }
  function Pag2() {
    return (
      <>
        <ModalBody>
          <img
            width="20px"
            height="20px"
            src={iconeResponsive}
            alt="Quantos dispositivos serão conectados? (Celular, SmartTV,
            Computadores..."
          />
          <h3>
            Quantos dispositivos serão conectados? (Celular, SmartTV,
            Computadores...)
          </h3>
          <RadioGroup
            defaultValue={dispositivos}
            onChange={setDispositivos}
            value={dispositivos}
          >
            <Radio value="1">1 à 3</Radio>
            <Radio value="2">4 ou 5 </Radio>
            <Radio value="3">6 ou 7</Radio>
            <Radio value="4">8 ou +</Radio>
          </RadioGroup>
          <img
            width="20px"
            height="20px"
            src={iconeVideo}
            alt="Utiliza serviços de streaming de filmes e séries? (Netflix, Amazom,
            Globoplay, Telecine...)"
          />
          <h3>
            Utiliza serviços de streaming de filmes e séries? (Netflix, Amazom,
            Globoplay, Telecine...)
          </h3>
          <RadioGroup
            defaultValue={streaming}
            onChange={setStreaming}
            value={streaming}
          >
            <HStack>
              <Radio value={"1"}>Sim</Radio>
              <Radio value={"0"}>Não</Radio>
            </HStack>
          </RadioGroup>
          <img
            width="20px"
            height="20px"
            src={iconeEstuda}
            alt="Alguém utiliza para estudar? (escola, faculdade...)"
          />
          <h3>Alguém utiliza para estudar? (escola, faculdade...)</h3>
          <RadioGroup
            defaultValue={estudar}
            onChange={setEstudar}
            value={estudar}
          >
            <HStack>
              <Radio value={"1"}>Sim</Radio>
              <Radio value={"0"}>Não</Radio>
            </HStack>
          </RadioGroup>
        </ModalBody>
      </>
    );
  }
  function Pag3() {
    return (
      <>
        <ModalBody>
          {/* =IFS(   30; "30 Mega";    60; "50 Mega";   80; "100 Mega";    90; "200 Mega";   89; "300 Mega") */}

          {planos
            .filter(
              (plano) =>
                plano.cidade === city &&
                (plano.tipo === "fibra"
                  ? pontuacao < 4
                    ? plano.plano === 30
                    : pontuacao < 7
                    ? plano.plano === 100
                    : pontuacao < 10
                    ? plano.plano === 200
                    : plano.plano === 300
                  : pontuacao < 4
                  ? plano.plano === 3
                  : pontuacao < 6 && pontuacao > 3
                  ? plano.plano === 5
                  : plano.plano === 7)
            )
            .map((plano) => (
              <div className="wrapper" key={plano.cidade}>
                <h3>Seu plano ideal</h3>
                <div className="planoIdeal" key={plano.cidade}>
                  <div className="box1">
                    <p>NossaNet {plano.tipo}</p>
                    <h1>{plano.plano} Mega</h1>
                  </div>
                  <div className="box2">
                    <span>Incluso Qualifica</span>
                    <ul>
                      <li>
                        {" "}
                        {plano.tipo === "fibra"
                          ? "Fibra óptica"
                          : "Internet via rádio"}
                      </li>
                      <li>Wi-fi Grátis</li>
                      <li>Instalação grátis</li>
                      <li>Download: {plano.plano} Mbps</li>
                      <li>Suporte técnico 24h</li>
                      <li>Upload: {plano.plano} Mbps</li>
                    </ul>
                  </div>
                </div>
                <p>POR APENAS</p>
                <div className="preco">
                  <span>R$</span>
                  <span>{plano.valor}</span>
                  <span>,90</span>
                  <span>por mês</span>
                </div>
                <Button
                  className="avancar"
                  rightIcon={<FiArrowRight size="18" />}
                  fontWeight={800}
                  w="242px"
                  h="54px"
                  _hover={{ bg: "#51a84e" }}
                  color="white"
                  bg="var(--acessibilidade)"
                  onClick={() => {
                    setMyPlan(plano.plano);
                    setPag(pag + 1);
                  }}
                >
                  Contrate agora
                </Button>
              </div>
            ))}
        </ModalBody>
      </>
    );
  }
  function Pag4() {
    return (
      <>
        <ModalBody>
          <h1>formulario dados pessoais</h1>
          <h1>Cidade selecionada: {city}</h1>
          <h1>Plano selecionado: {myPlan}</h1>
        </ModalBody>
      </>
    );
  }
  function Pag5() {
    return (
      <>
        <ModalBody>
          <h1>formulario endereço</h1>
        </ModalBody>
      </>
    );
  }
  function Pag6() {
    return (
      <>
        <ModalBody>
          <h1>revisao</h1>
        </ModalBody>
      </>
    );
  }
  function Pag7() {
    return (
      <>
        <ModalBody>
          <h1>msg enviada</h1>
        </ModalBody>
      </>
    );
  }

  if (pag === 1) {
    return <Pag1 />;
  } else if (pag === 2) {
    return <Pag2 />;
  } else if (pag === 3) {
    return <Pag3 />;
  } else if (pag === 4) {
    return <Pag4 />;
  } else if (pag === 5) {
    return <Pag5 />;
  } else if (pag === 6) {
    return <Pag6 />;
  } else if (pag === 7) {
    return <Pag7 />;
  } else {
    return <Pag1 />;
  }
}
