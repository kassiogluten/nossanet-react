import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useState } from "react";
import Section1Hero from "./Section1Hero";
import Section2 from "./Section2Shortcuts";
import Section3 from "./Section3Fiber";
import Section4 from "./Section4Test";
import Section5 from "./Section5Plans";
import Section6 from "./Section6Faq";
import Section7 from "./Section7App";
import Section8 from "./Section8Contact";
import { FiArrowRight, FiCheck, FiRepeat } from "react-icons/fi";

import "./home.css";

//import progress1Img from "../../assets/progresso.svg";
import { progress } from "../../assets/progress";
import { Pag } from "./modalPages";
import { cidades } from "../../components/cities";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let [pag, setPag] = useState(1);
  const proxPag = () => setPag(pag + 1);
  const prevPage = () => setPag(pag - 1);
  const [formLoading, setFormLoading] = useState(false);

  const [city, setCity] = useState(cidades[0])

  function handleForm() {
    setFormLoading(true);
    setTimeout(fakeSend, 2000);
  }
  function fakeSend() {
    setFormLoading(false);
    setPag(pag + 1);
  }

  return (
    <>
      <Section1Hero />
      <Section2 />
      <Section3 />
      <Section4 onOpen={onOpen} />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Modal size="2xl" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent mx={5}>
          <ModalHeader
            className="modalHeader"
            color="white"
            borderTopRadius="5px"
            bg="var(--acessibilidade)"
          >
            {pag === 2
              ? "Vamos escolher o plano ideial para você"
              : pag === 3
              ? "Pronto! Este é seu plano ideial "
              : pag === 4
              ? "Parabéns! Agora falta pouco."
              : pag === 5
              ? "Endereço da instalação"
              : pag === 6
              ? "Revise as informações"
              : pag === 7
              ? "Informações enviadas"
              : "Vamos escolher o plano ideial para você"}
            <div
              className={
                pag === 2
                  ? "pag2"
                  : pag === 3
                  ? "pag3"
                  : pag === 5
                  ? "pag2"
                  : pag === 6
                  ? "pag3"
                  : pag === 7
                  ? "pag3"
                  : "pag1"
              }
            >
              <div>{progress}</div>
            </div>
          </ModalHeader>
          <ModalCloseButton
            mt="-25px"
            _hover={{ color: "#51a84e" }}
            color="var(--azul)"
            bg="white"
          />
          <Pag city={city} setCity={setCity} pag={pag} />
          <ModalFooter>
            {pag > 1 && (
              <Button
                color="#BFBFBF"
                variant="ghost"
                mr="10px"
                onClick={prevPage}
              >
                Anterior
              </Button>
            )}
            {pag < 6 && (
              <Button
                className="avancar"
                rightIcon={<FiArrowRight size="18" />}
                fontWeight={800}
                w="242px"
                h="54px"
                _hover={{ bg: "#51a84e" }}
                color="white"
                bg="var(--acessibilidade)"
                onClick={proxPag}
              >
                Avançar
              </Button>
            )}
            {pag === 6 && (
              <Button
                loadingText="Enviando"
                isLoading={formLoading}
                className="avancar"
                rightIcon={<FiArrowRight size="18" />}
                fontWeight={800}
                w="242px"
                h="54px"
                _hover={{ bg: "#51a84e" }}
                color="white"
                bg="var(--acessibilidade)"
                onClick={handleForm}
              >
                Enviar
              </Button>
            )}
            {pag > 6 && (
              <div>
                <Button
                  rightIcon={<FiRepeat />}
                  fontWeight={800}
                  w="150px"
                  h="54px"
                  _hover={{ bg: "#51a84e" }}
                  color="white"
                  bg="var(--acessibilidade)"
                  onClick={() => setPag(1)}
                >
                  Recomeçar
                </Button>
                <Button
                  m="5px"
                  rightIcon={<FiCheck />}
                  fontWeight={800}
                  w="150px"
                  h="54px"
                  _hover={{ bg: "#51a84e" }}
                  color="white"
                  bg="blackAlpha.500"
                  onClick={onClose}
                >
                  Finalizar
                </Button>
              </div>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
