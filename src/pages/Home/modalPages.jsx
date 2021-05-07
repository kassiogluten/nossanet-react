import { HStack } from "@chakra-ui/layout";
import { ModalBody } from "@chakra-ui/modal";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { useState } from "react";

import { cidades } from "../../components/cities";
import { planos } from "../../components/planos";

export function Pag({ pag, setCity, city }) {
  let [pessoas, setPessoas] = useState(0);
  let [jogaOnline, setJogaOnline] = useState(0);
  let [usaTrabalho, setUsaTrabalho] = useState(0);
  let [dispositivos, setDispositivos] = useState(0);
  let [streaming, setStreaming] = useState(0);
  let [estudar, setEstudar] = useState(0);

  let pontuacao =
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
          Qual sua cidade ?
          <RadioGroup defaultValue={city} onChange={setCity} value={city}>
            <HStack>
              {cidades.map((cidade) => (
                <Radio key={cidade} value={cidade}>
                  {cidade}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
          Quantas pessoas moram na casa ?
          <RadioGroup
            defaultValue={pessoas}
            onChange={setPessoas}
            value={pessoas}
          >
            <HStack>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
              <Radio value="6">6</Radio>
            </HStack>
          </RadioGroup>
          Alguém tem o hábito de jogar online?
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
          Alguém usa a internet para trabalhar?
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
          Quantos dispositivos serão conectados? (Celular, SmartTV,
          Computadores...)
          <RadioGroup
            defaultValue={dispositivos}
            onChange={setDispositivos}
            value={dispositivos}
          >
            <HStack>
              <Radio value="1">1 à 3</Radio>
              <Radio value="2">4 ou 5 </Radio>
              <Radio value="3">6 ou 7</Radio>
              <Radio value="4">8+</Radio>
            </HStack>
          </RadioGroup>
          Utiliza serviços de streaming de filmes e séries? (Netflix, Amazom,
          Globoplay, Telecine...)
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
          Alguém utiliza para estudar? (escola, faculdade...)
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
          <h1>pontuacao: {pontuacao}</h1>
          {planos
            .filter((plano) => plano.cidade === city)
            .map((plano) => (
              <li>
                {plano.cidade} / {plano.plano}
              </li>
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
